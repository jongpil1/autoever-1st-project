import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../entities/post/api/getPosts"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    const {data : posts, isLoading, isError } = useQuery({
        queryKey : ['posts'],
        queryFn : getPosts,
    })
    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        return <div>Error occured</div>
    }
    
    return (
        <section>
            <div>
                <h2>💻 Projects</h2>
            </div>
            <div>
                {posts?.map(post => (
                    <ProjectCard
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
            
        </section>
    )
}