import { useState } from "react";
import type { Post } from "../../entities/post/model/type";
import ReadmeModal from "./ReadmeModal";
import styles from './ProjectCard.module.css'


interface PostProp {
    post: Post
}

export default function ProjectCard({ post }: PostProp) {
    const [isReadmeOpen, setIsReadmeOpen] = useState(false)
    const skills = post.skills.split(',')
    return (
        <article className={styles.container}>
            <div>
                <img src={`/project/${post.id}.png`} alt="project image" />
            </div>
            <div className={styles.header}>
                <h3>{post.title}</h3>
                <div>
                    {skills.map((skill, idx) => (
                        <span key={idx}>{skill}</span>
                    ))}
                </div>

                {/* <p>{post.skills}</p> */}
            </div>
            <div className={styles.summary}>
                <p>{post.summary}</p>
                <button onClick={() => setIsReadmeOpen(true)}>자세히 보기</button>
            </div>
            {isReadmeOpen && (
                <ReadmeModal
                    post={post}
                    onClose={() => setIsReadmeOpen(false)}
                />
            )}
        </article>
    )
}