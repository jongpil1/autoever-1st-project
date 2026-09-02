import SkillCard from "./SkillCard";

export default function SkillCards() {
    return (
        <div>
            <SkillCard 
                category="Language"
                skills={["Java", "Python", "JavaScript", "TypeScript"]}
            />
            <SkillCard 
                category="Frontend"
                skills={["React.js", "Redux/Redux Toolkit", "TanStack Query", "Vite"]}
            />
            <SkillCard
                category="Backend"
                skills={["Spring (Boot)", "Node.js/NestJs", "PostgreSQL", "MySQL", "MongoDB", "JPA/Hibernate"]}
            />
            <SkillCard
                category="DevOps"
                skills={["Docker", "AWS (EC2)", "Nginx", "GitHub Actions", "Eureka"]}
            />
        </div>
    )
}