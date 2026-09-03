import CareerCard from "./CareerCard";
import CareerContent from "./CareerContent";

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
                <article>
                    {/* detail */}
                    <CareerCard 
                        title="현대오토에버 웹/앱 부트캠프"
                        duration="2026.07 - (ing)"
                        skills={["React", "Spring (Boot)", "Database", "Server"]}
                        summary="test입니다"
                    />
                    <CareerContent 
                        title="React 기반 프론트엔드 개발 학습"
                        duration="2026.07.03 ~ 2026.08.02"
                        content="React의 컴포넌트 기반 개발 방식을 학습하고 JavaScript와 TypeScript를 활용하여 웹 애플리케이션을 구현했습니다.
                                상태 관리와 API 통신을 학습하며 TanStack Query와 Redux를 활용한 데이터 및 전역 상태 관리 경험을 쌓았습니다."
                    />
                    <CareerContent 
                        title="Spring Boot & 서버 배포"
                        duration="2026.08.03 ~ 2026.09.01"
                        content="Spring Boot와 JPA를 활용하여 REST API 서버를 구축하고 회원가입, 로그인, JWT 기반 인증 등의 백엔드 기능을 구현했습니다.
                                Docker와 AWS EC2를 활용한 서버 배포 과정을 경험하고 Nginx를 이용한 Reverse Proxy 및 서버 운영 환경을 학습했습니다."      
                    />
                    <CareerContent 
                        title="포트폴리오 1차 프로젝트"
                        duration="2026.09.02 ~ (ing)"
                        content="지금까지 학습한 React, TypeScript 등의 기술을 활용하여 개인 포트폴리오 웹사이트를 개발하고 있습니다.
                                프로젝트 및 경력 정보를 효과적으로 전달할 수 있도록 컴포넌트 기반 UI를 설계를 하고 있습니다."    
                    />
                </article>
            </div>


        </section>
    )
}