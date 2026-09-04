import styles from './CareerContent.module.css'

export interface CareerContentProp {
    title : string
    duration : string
    content : string
}

export default function CareerContent({title, duration, content} : CareerContentProp) {
    return (
        <div>
            <div className={styles.main}>
                <h4>{title}</h4>
                <p className={styles.duration}>{duration}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}