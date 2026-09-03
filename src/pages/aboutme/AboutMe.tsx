import AboutMeCards from "./AboutMeCards";
import SkillCards from "./SkillCards";
import styles from './AboutMe.module.css'

export default function AboutMe() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                {/* header */}

            </div>
            <div className={styles.main}>
                <h2>ABOUT ME</h2>
                <div className={styles.aboutme}>
                    <img className={styles.profileImage} src="src/assets/dog.avif" alt="profile" />
                    <AboutMeCards />
                </div>
                <div className={styles.skills}>
                    <h2>Skills</h2>
                    <SkillCards />
                </div>
            </div>


        </section>
    )
}