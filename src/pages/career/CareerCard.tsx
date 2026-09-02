interface CareerProp {
    title : string
    duration : string
    skills : string[]
    content : string
}

export default function CareerCard({title, duration, skills, content } : CareerProp) {
    return (
        <article>
            <div>
                {/* header */}
                {title}
            </div>
            <div>
                {duration}
            </div>
            <div>
                {skills}
            </div>
            <div>
                {content}
            </div>
        </article>
    )
}