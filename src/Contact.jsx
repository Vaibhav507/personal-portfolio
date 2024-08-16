import { useRef } from "react";
import React from "react";
import { RiGithubLine, RiLinkedinLine, RiArrowRightUpLine, RiInstagramLine } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from 'split-type'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const paragraphRef = useRef(null);
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

        const split1 = new SplitType(paragraphRef.current.children[0], { types: "lines" });
        const split2 = new SplitType(paragraphRef.current.children[1], { types: "lines" });

    
    gsap.set(split1.lines, { opacity: 0 });
    gsap.set(split2.lines, { opacity: 0 });
    gsap.set(".footer-buttons", {opacity: 0})

    
    const tl1 = gsap.timeline({ delay: 2 });

    
    tl1.to(split1.lines, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.inOut",
    });

    
    tl1.to(split2.lines, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.inOut",
    });

      tl1.to(".divider",{
        width: "100%",
        duration: 0.5,
        ease: "power2.inOut",
    })

      tl1.to(".footer-buttons", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

    })

    return (
        <div className="contact-me">
            <div className="contact-top" ref={paragraphRef}>
                <p className="greeting">Say Hello?</p>
                <p className="contact-headline" >Let's collaborate. Feel free to drop me a line about your project or follow me on social networks</p>
            </div>
            <div className="divider"></div>
            <div className="contact-bottom">
            <div className="footer-buttons contact-me-bottom">
                <a href="mailto:vaibhavpratham507@gmail.com" className="mail-contact-me"><div className="goto-mail" ref={buttonRef}><p className="button-text">Send me a mail</p><RiArrowRightUpLine className="arrow" /></div></a>
                <div className="social-buttons contact-social-buttons">
                    <a href="https://github.com/Vaibhav507" target="_blank"><RiGithubLine className="footer-icons"/></a>
                    <a href="https://www.linkedin.com/in/vaibhav-madan-386927200/" target="_blank"><RiLinkedinLine className="footer-icons"/></a>
                    <a href="https://www.instagram.com/madanvaibhav11/" target="_blank"><RiInstagramLine className="footer-icons"/></a>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Contact