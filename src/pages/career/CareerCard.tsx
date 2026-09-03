
interface CareerProp {
    title : string
    duration : string
    skills : string[]
    summary : string
}

export default function CareerCard({title, duration, skills, summary } : CareerProp) {
    return (
        <div>
            <div>
                {/* header */}
                <h3>{title}</h3>
                <p>{duration}</p>
            </div>
            
            <div>
                {/* summary */}
                {skills.map(skill => (
                    <span>{skill}</span>
                ))}
                <p>{summary}</p>
            </div>

            <div>
                {/* main */}
                
            </div>
        </div>
    )
}