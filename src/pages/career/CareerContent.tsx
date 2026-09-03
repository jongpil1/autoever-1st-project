export interface CareerContentProp {
    title : string
    duration : string
    content : string
}

export default function CareerContent({title, duration, content} : CareerContentProp) {
    return (
        <div>
            <div>
                <h4>{title}</h4>
                <p>{duration}</p>
                <p>{content}</p>
            </div>
        </div>
    )
}