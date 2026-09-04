import styles from './CareerCard.module.css'

interface CareerProp {
    title : string
    duration : string
    skills : string[]
    summary : string
}

export default function CareerCard({title, duration, skills, summary } : CareerProp) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {/* header */}
                <h3>{title}</h3>
                <p>{duration}</p>
            </div>
            
            <div className={styles.main}>
                {/* summary */}
                {skills.map(skill => (
                    <span className={styles.skill}>{skill}</span>
                ))}
                <p>{summary}</p>
            </div>

        </div>
    )
}