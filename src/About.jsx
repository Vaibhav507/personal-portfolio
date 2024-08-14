import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Footer from "./Footer";

function About() {

    useGSAP(()=> {
        gsap.from(".skills p",{
            opacity: 0,
            y: -20,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".skills",
                scrub: true,
                end: "bottom bottom",
                start: "top center"
            }
        })

        gsap.to(".skills .divider",{
            width: "100%",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".skills",
                scrub: true,
                end: "bottom bottom",
                start: "top center"
            }
        })

        gsap.from(".about-section",{
            x:-20,
            opacity: 0,
            stagger:0.5,
            delay: 2,
            scrollTrigger:".about-section"
        })

        

    })

    return(
        <>
        <div className="about">
            <div className="about-section">
                <p className="greeting">About Me</p>
                <p className="about-me">
                Driven by a passion for design and technology, I’m dedicated to crafting well-designed websites and apps.
                I love blending creativity with technology, turning inspiration into unique digital experiences. My focus 
                is on creating user-friendly designs with attention to detail, ensuring each project is both visually 
                stunning and highly functional.
                </p>
            </div>
            <div className="skills">
                <p className="greeting">skills</p>
                <div className="divider"></div>
                <p>HTML</p>
                <div className="divider"></div>
                <p>CSS</p>
                <div className="divider"></div>
                <p>JavaScript</p>
                <div className="divider"></div>
                <p>ReactJs</p>
                <div className="divider"></div>
                <p>GSAP</p>
                <div className="divider"></div>
                <p>Figma</p>
                <div className="divider"></div>
                <p>C++</p>
                <div className="divider"></div>
                <p>Data Structures & Algorithm</p>
                <div className="divider"></div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About