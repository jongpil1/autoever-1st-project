import { useEffect, useRef, useState } from "react"
import type { GithubContext } from "../entities/gemini/api/getGithubContext"
import type { Post } from "../entities/post/model/type"
import { useQuery } from "@tanstack/react-query"
import getGithubContext from "../entities/gemini/api/getGithubContext"
import { askGemini } from "../entities/gemini/gemini"
import styles from "./ProjectChat.module.css"
import ReactMarkdown from "react-markdown";

interface ChatMessage {
    role: "user" | "model"
    text: string
}

interface ProjectChatProp {
    project: Post | null
}

function buildSystemContext(project: Post | null, githubContext: GithubContext | null | undefined,): string {
    if (!project) return ""

    let summary = project.summary
    return [
        `너는 개발자 포트폴리오 사이트에서, 이 개발자를 채용할지 검토 중인 채용 담당자의 질문에 답하는 챗봇이야.`,
        `아래는 "${project.title}" 프로젝트 요약과 정보야. 이 정보에 근거해서 합리적으로 추론하거나 설명을 덧붙여도 괜찮아 
		(예: 트러블슈팅 과정, 기술적 의사결정 이유, 배운 점 등). 
		다만 정보에 전혀 근거가 없는 사실(예: 연봉, 개인정보, 언급되지 않은 경력)은 절대 지어내지 말고, 
		그런 질문에는 모른다고 솔직히 답해.
		5문장 이내로 답해줘.`,
        `프로젝트 요약 : ${summary}`,
        project.repository_url ? `Github 저장소 : ${project.repository_url}` : null,
        githubContext?.readme ? `\nREADME 내용:\n${githubContext.readme}` : null,
        githubContext?.commits?.length
            ? `\n최근 커밋 목록:\n${githubContext.commits.map((c) => `- ${c}`).join("\n")}`
            : null,
    ]
        .filter(Boolean)
        .join("\n")
}

export default function ProjectChat({ project }: ProjectChatProp) {
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (messages.length > 0 || isLoading) {
            bottomRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isLoading])

    const { data: githubContext, isFetching: isGithubLoading } = useQuery({
        queryKey: ["github-context", project?.repository_url],
        queryFn: () => getGithubContext(project?.repository_url ?? ""),
        enabled: !!project?.repository_url,
        staleTime: 1000 * 60 * 30,
    })

    const handleSend = async () => {
        const text = input.trim()
        if (!text || isLoading || isGithubLoading) return;

        const nextMessages: ChatMessage[] = [...messages, { role: "user", text }]
        setMessages(nextMessages)
        setInput("")
        setIsLoading(true)

        try {
            const answer = await askGemini(nextMessages, buildSystemContext(project, githubContext))
            setMessages((prev) => [...prev, { role: "model", text : answer },])

        
        } catch (e) {
            console.error(e)
            const status = (e as Error & { status?: number }).status;
            
            const fallback =
                status === 429
                    ? "오늘 챗봇 사용량이 많아 잠시 후 다시 이용해주세요."
                    : "죄송해요, 답변을 가져오지 못했어요.";

            setMessages((prev) => [
                ...prev,
                { role: "model", text: fallback },
            ]);
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>🤖 이 프로젝트에 대해서 궁금한 점을 물어보세요</h3>
            </div>
            <hr />
            <div className={styles.messages}>
                {messages.map((m, idx) =>
                    m.role === "user" ? (
                        <p key={idx} className={styles.userMsg}>
                            {m.text}
                        </p>
                    ) : (
                        <div key={idx} className={styles.modelMsg}>
                            <ReactMarkdown>{m.text}</ReactMarkdown>
                        </div>
                    ),
                )}
                {isLoading && <p className={styles.modelMsg}>생각하는 중...</p>}
                <div ref={bottomRef}/>
            </div>


            <div className={styles.inputRow}>
                <input 
                className={styles.input} 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                        e.preventDefault()
                        void handleSend()
                    }
                }}
                placeholder={
                    isGithubLoading ? "Github 정보 불러오는 중..." : "질문을 입력하세요"
                }
                disabled={isGithubLoading}
                />
                <button className={styles.sendButton} aria-label="전송" onClick={handleSend} disabled={isGithubLoading}>
                    입력
                </button>
            </div>
        </div>
    )

}