import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown";
import './ReadmeModal.css'

interface ReadmeModalProps {
    slug: string
    title: string
    onClose: () => void
}

export default function ReadmeModal({ slug, title, onClose }: ReadmeModalProps) {
    const [markdown, setMarkdown] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchReadme = async () => {
            try {
                const response = await fetch(`/posts/${slug}.md`);

                if (!response.ok) {
                    throw new Error("README 파일을 찾을 수 없습니다.");
                }

                const text = await response.text();
                setMarkdown(text);
            } catch (error) {
                console.error(error);
                setMarkdown("# README를 불러오지 못했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchReadme();
    }, [slug])

    return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="readme-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{title}</h2>

          <button onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-content">
          {loading ? (
            <p>README 불러오는 중...</p>
          ) : (
            <ReactMarkdown>
              {markdown}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}