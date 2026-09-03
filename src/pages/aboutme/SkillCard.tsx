import styles from "./SkillCard.module.css";
import type { CardProp } from "./SkillCards";



export default function SkillCard({category, value} : CardProp) {
    return (
        <div className={styles.card}>

            <div>
                {/* category */}
                <h3>{category}</h3>
            </div>
            <div>
                {/* skills */}
                {value.map(skill => (
                    <span className={`${styles.skill} ${styles[category]}`} style={{backgroundColor : skill.color}}>{skill.text}</span>
                ))}
            </div>
        </div>
    )
}