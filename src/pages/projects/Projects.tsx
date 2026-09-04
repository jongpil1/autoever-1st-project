import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../entities/post/api/getPosts"
import ProjectCard from "./ProjectCard"
import styles from "./Projects.module.css"

export default function Projects() {
    const { data: posts, isLoading, isError } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
    if (isLoading) {
        return <div>loading...</div>
    }
    if (isError) {
        return <div>Error occured</div>
    }

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>Projects</h2>
            </div>
            <div className={styles.main}>
                {posts?.map(post => (
                    <div className={styles.post}>
                        <ProjectCard
                            key={post.id}
                            post={post}
                        />
                    </div>

                ))}
            </div>

        </section>
    )
}