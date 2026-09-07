import  { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown";
import './ReadmeModal.css'
import type { Post } from "../../entities/post/model/type";
import ProjectChat from "../../widgets/ProjectChat";


interface ReadmeModalProps {
  post : Post
  onClose: () => void
}

export default function ReadmeModal({ post, onClose }: ReadmeModalProps) {
  const [markdown, setMarkdown] = useState("")
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(`/posts/${post.slug}.md`);

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
  }, [post.slug])

 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="readme-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{post.title}</h2>
          <button onClick={onClose}>×</button>
        </div>

        <div className="modal-content">
          {loading ? (
            <p>README 불러오는 중...</p>
          ) : (
            <>
              <div className="readme-content">
                <ReactMarkdown>{markdown}</ReactMarkdown>
              </div>
              <ProjectChat key={post.id} project={post} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}