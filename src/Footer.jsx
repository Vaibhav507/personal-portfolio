import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { RiArrowRightUpLine, RiHeart3Fill, RiGithubLine, RiLinkedinLine } from "@remixicon/react";
import React from "react";

function Footer() {

    const buttonRef = useRef(null)
    useGSAP(()=> {
        const tl = gsap.timeline()
        
        tl.to(".goto-mail", {
            scale: 1.1,
        },0)

        tl.to(".arrow",{
            rotate: 360,
        },0)

        tl.pause()



        buttonRef.current.addEventListener("mouseenter",function () {
            tl.play()
            
        })
        buttonRef.current.addEventListener("mouseleave",function () {
            tl.reverse()
        })
    })

    let currentYear = new Date().getFullYear()

    return(
        <div className="footer">
            <p>Like What you see?</p>
            <p className="footer-heading">Let's Talk</p>
            <div className="footer-buttons">
                <div className="goto-mail" ref={buttonRef}><p className="button-text">Send me a mail</p> <RiArrowRightUpLine className="arrow" /> </div>
                <div className="social-buttons">
                    <RiGithubLine className="footer-icons"/>
                    <RiLinkedinLine className="footer-icons"/>
                </div>
            </div>
            <hr />
            <div className="personal">
                <p>@{currentYear}</p>
                <p>Designed and Created with <RiHeart3Fill fill="red"/> by Vaibhav Madan</p>
            </div>
            
        </div>
        
    )
}

export default Footer