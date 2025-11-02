"use client";
import "@/assets/fontawesome/css/all.css";
import { useEffect } from "react";
import Education from "@/components/education";
import Header from "@/components/header";
import Profile from "@/components/profile";
import Hiring from "@/components/hiring";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Skills from "@/components/skills";

export default function Home() {
    useEffect(() => {
        import("@/assets/fontawesome/js/all.js");
    }, []);
    return (
        <>
            <Header />
            <Profile />
            <Skills />
            <Education />
            <Hiring />
            <Project />
            <Footer />
        </>
    );
}
