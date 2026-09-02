import { Calendar, GraduationCap, Mail, Phone, User } from "lucide-react";
import Card from "./AboutMeCard";

export default function AboutMeInfo() {
    return (
        <div>
            <Card 
                icon={<User/>}
                title="이름"
                content="한종필"
            />
            <Card 
                icon={<Calendar/>}
                title="생년월일"
                content="02.05.10"
            />
            <Card 
                icon={<Phone/>}
                title="연락처"
                content="010-9513-1759"
            />
            <Card 
                icon={<Mail/>}
                title="이메일"
                content="paulgks1@naver.com"
            />
            <Card 
                icon={<GraduationCap/>}
                title="학력"
                content="인천대학교(컴퓨터공학부)"
            />
            <Card 
                icon={<User/>}
                title="GitHub"
                content="https://github.com/jongpil1"
            />
        </div>
    )
}