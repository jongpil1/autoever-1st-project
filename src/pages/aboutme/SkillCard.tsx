

interface SkillProp {
    category: string
    skills : string[]
}

export default function SkillCard({category, skills} : SkillProp) {
    return (
        <div>

            <div>
                {/* category */}
                <h3>{category}</h3>
            </div>
            <div>
                {/* skills */}
                {skills.map(skill => (
                    <span>{skill}</span>
                ))}
            </div>
        </div>
    )
}