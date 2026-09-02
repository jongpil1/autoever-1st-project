import AboutMeCards from "./AboutMeCards";
import SkillCards from "./SkillCards";

export default function AboutMe() {
    return (
        <section>
            <div>
                {/* header */}
                <h2>🙋‍♂️ ABOUT ME</h2> 
            </div>
            <div>
                {/* profile */}
            </div>
            <div>
                {/* cards */}
                <AboutMeCards />
            </div>
            <div>
                <h2>🔧 Skills</h2>
                <SkillCards />
            </div>
            
        </section>
    )
}