import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import { useEffect, useRef } from "react";

function Home() {

    const textRef = useRef(null);

    useGSAP(()=> {

        const getRandomColor = () => {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };

        const words = ["Frontend","UI/UX"]

        const tl = gsap.timeline()

        tl.from(".greeting",{
            y:-50,
            duration: 0.5,
            opacity: 0,
            delay: 2
        })

        tl.from(".main",{
            y:50,
            duration: 0.5,
            opacity: 0,
            onComplete: () => masterTl.play()
        })

        tl.from(".typer",{
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })

        let masterTl = gsap.timeline({repeat: -1}).pause()

        words.forEach(word => {
            let typertl = gsap.timeline({
                repeat: 1,
                yoyo: true,
                repeatDelay:1,
            })
            typertl.to(".text", {
                duration:1,
                text: word,
                onStart: () => {
                    textRef.current.style.color = getRandomColor();
                }
            })
            masterTl.add(typertl)
        })

    })


    return(
        <div className="home">
            <p className="greeting">Hello there!</p>
            <p className="main">I'm Vaibhav Madan,
                <br />a creative <span className="text" ref={textRef}></span> 
                                 <span className="typer">_</span>
                <br />Developer</p> 
        </div> 
    )

}

export default Home