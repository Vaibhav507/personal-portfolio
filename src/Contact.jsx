import { useRef } from "react";
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

    // Set initial opacity of all lines to 0.5
    gsap.set(split1.lines, { opacity: 0 });
    gsap.set(split2.lines, { opacity: 0 });
    gsap.set(".footer-buttons", {opacity: 0})

    // Create the timeline with a 2-second delay before starting
    const tl1 = gsap.timeline({ delay: 2 });

    // Animate the first p tag's lines
    tl1.to(split1.lines, {
      opacity: 1,
      duration: 0.5,
      stagger: 0.3,
      ease: "power2.inOut",
    });

    // Animate the second p tag's lines after the first p tag completes
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
            <div className="footer-buttons">
                <div className="goto-mail" ref={buttonRef}><p className="button-text">Send me a mail</p> <RiArrowRightUpLine className="arrow" /> </div>
                <div className="social-buttons">
                    <RiGithubLine className="footer-icons"/>
                    <RiLinkedinLine className="footer-icons"/>
                    <RiInstagramLine className="footer-icons"/>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Contact