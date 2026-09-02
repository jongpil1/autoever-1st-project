import type React from "react"

interface CardProp {
    icon : React.ReactNode
    title : string
    content : string
}

export default function AboutMeCard({icon , title, content} : CardProp) {
    return (
        <div>
            <div>
                {icon}
            </div>
            <div>
                <h3>{title}</h3>
                <span>{content}</span>
            </div>
        </div>
    )
}