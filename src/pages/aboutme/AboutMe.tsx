import AboutMeCards from "./AboutMeCards";
import SkillCards from "./SkillCards";
import styles from './AboutMe.module.css'

export default function AboutMe() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                {/* header */}
                <h2>백엔드 개발자 한종필입니다.</h2>
                <p>사용자와 서비스의 흐름을 이해하고 개발하고자하는</p>
                <p> 백엔드 개발자입니다.</p>
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