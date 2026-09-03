import { useState } from "react";
import type { Post } from "../../entities/post/model/type";
import ReadmeModal from "./ReadmeModal";

interface PostProp {
    post: Post
}

export default function ProjectCard({ post }: PostProp) {
    const [isReadmeOpen, setIsReadmeOpen] = useState(false)
    return (
        <article>
            <div>
                <h3>{post.title}</h3>
                <p>{post.skills}</p>
            </div>
            <div>
                <p>{post.summary}</p>
                <button onClick={() => setIsReadmeOpen(true)}>README</button>
            </div>
            {isReadmeOpen && (
                <ReadmeModal
                slug={post.slug}
                title={post.title}
                onClose={() => setIsReadmeOpen(false)}
                />
            )}
        </article>
    )
}