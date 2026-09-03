import type React from "react"
import styles from './AboutMeCard.module.css'

interface CardProp {
    icon : React.ReactNode
    title : string
    content : string
}

export default function AboutMeCard({icon , title, content} : CardProp) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.main}>
                <h3>{title}</h3>
                <span>{content}</span>
            </div>
        </div>
    )
}