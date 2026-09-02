import type { Post } from "../../entities/post/model/type";

interface PostProp {
    post : Post
}

export default function ProjectCard({post} : PostProp ) {
    return (
        <article>
            <div>
                <h3>{post.title}</h3>
            </div>
            <div>
                <p>{post.summary}</p>
                <button>README</button>
            </div>
        </article>
    )
}