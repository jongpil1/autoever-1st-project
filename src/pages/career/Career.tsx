import CareerCard from "./CareerCard";

export default function Career() {
    return (
        <section>
            <div>
                {/* header */}
                <h2>📖 Career</h2>
            </div>
            <div>
                {/* main */}
                <div>
                    {/* image */}
                </div>
                <div>
                    {/* detail */}
                    <CareerCard 
                        title="현대오토에버 부트캠프"
                        duration="2026.07 - (ing)"
                        skills={["React"]}
                        content="test입니다"
                    />
                </div>
            </div>


        </section>
    )
}