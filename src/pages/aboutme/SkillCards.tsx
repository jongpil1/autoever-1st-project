import SkillCard from "./SkillCard";
import styles from "./SkillCards.module.css";

export interface SkillValue {
    text : string
    color : string
}

export interface CardProp {
    category : string
    value : SkillValue[]
}


export default function SkillCards() {
    return (
        <div className={styles.cards}>
            <SkillCard 
                category="Language"
                value={[
                    { text: "Java", color: "#f48139" },
                    { text: "Python", color: "#387deb" },
                    { text: "JavaScript", color: "#e71d3e" },
                    { text: "TypeScript", color: "#0bb357" },
                ]}
                // skills={["Java", "Python", "JavaScript", "TypeScript"]}
            />
            <SkillCard 
                category="Frontend"
                value={[
                    { text: "React.js", color: "#d211e3" },
                    { text: "Redux/Redux Toolkit", color: "#10e384" },
                    { text: "TanStack Query", color: "#070707" },
                    { text: "Vite", color: "#d34b4b" },
                ]}
                // skills={["React.js", "Redux/Redux Toolkit", "TanStack Query", "Vite"]}
            />
            <SkillCard
                category="Backend"
                value={[
                    { text: "Spring (Boot)", color: "#7c6f0a" },
                    { text: "Node.js/NestJs", color: "#f48139" },
                    { text: "PostgreSQL", color: "#d34b4b" },
                    { text: "MySQL", color: "#387deb" },
                    { text: "MongoDB", color: "#f48139" },
                    { text: "JPA/Hibernate", color: "#070707" },
                ]}
                // skills={["Spring (Boot)", "Node.js/NestJs", "PostgreSQL", "MySQL", "MongoDB", "JPA/Hibernate"]}
            />
            <SkillCard
                category="DevOps"
                value={[
                    { text: "Docker", color: "#387deb" },
                    { text: "AWS (EC2)", color: "#f48139" },
                    { text: "Nginx", color: "#10e384" },
                    { text: "GitHub Actions", color: "#387deb" },
                    { text: "Eureka", color: "#d34b4b" },
                    
                ]}
                // skills={["Docker", "AWS (EC2)", "Nginx", "GitHub Actions", "Eureka"]}
            />
        </div>
    )
}