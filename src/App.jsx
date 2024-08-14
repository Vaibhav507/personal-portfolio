import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RiGithubLine, RiMailLine, RiLinkedinLine } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";



function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const mailRef = useRef(null);

  useGSAP(()=> {

    window.addEventListener("mousemove", function(dets) {
      gsap.to("#cursor", {
          x: dets.x,
          y: dets.y,
          duration: 1,
      })
    })

    const tl1 = gsap.timeline()

    tl1.from(".logo",{
        x:-50,
        duration: 0.5,
        opacity: 0,
        delay: 1
    })

    tl1.from(".menu-icon",{
        x:50,
        duration: 0.5,
        opacity: 0
    })

  
      const menuOpenTimeline = gsap.timeline()

      menuOpenTimeline.to(".menu",{
        transform: "translateX(-100%)",
        duration:1
      })

      menuOpenTimeline.from(".logo-menu",{
        x:-50,
        duration: 0.2,
        opacity: 0,
        delay: 0.3
      })

      menuOpenTimeline.from(".close-icon",{
        x:50,
        duration: 0.2,
        opacity: 0
      })

      menuOpenTimeline.to(".pages p",{ 
        opacity: 0.2 , 
        stagger: 0.3, 
        y:0,
        visibility: "visible",
        ease: "circ"
      },1);

      menuOpenTimeline.to(".icons", {
        opacity: 1,
        stagger: 0.3,
        y: 0,
        visibility: "visible",
        ease: "circ"
      },1)

      menuOpenTimeline.pause()

      document.querySelector(".menu-icon").addEventListener("click",()=>{menuOpenTimeline.play()})

      document.querySelector(".close-icon").addEventListener("click",()=>{menuOpenTimeline.reverse()})

      

      const refs = [homeRef,aboutRef,contactRef]

      refs.forEach(element => {

        const underline = element.current.querySelector(".underline")
        const hoverTl = gsap.timeline({paused:true})


        hoverTl.fromTo(element.current,
          {opacity: 0.2},{opacity: 1},0)

        hoverTl.to(underline,{
            width: "100%",
            duration: 0.2,
            ease: "power1.inOut"
        },0)

        element.current.addEventListener("mouseenter",()=>{hoverTl.play()})
        element.current.addEventListener("mouseleave",()=>{hoverTl.reverse()})

        element.current.addEventListener("click",()=>{menuOpenTimeline.reverse()})
        
      });

      const gitIcon = document.querySelector(".githubIcon")

      const gitTl = gsap.timeline({paused:true})

      gitTl.from(".github",{
        opacity: 0,
        x: 20
      },0)

      gitIcon.addEventListener("mouseenter",()=>gitTl.play())
      gitIcon.addEventListener("mouseleave",()=>gitTl.reverse())

      const linkedinIcon = document.querySelector(".linkedinIcon")

      const linkedTl = gsap.timeline({paused:true})

      linkedTl.from(".linkedin",{
        opacity: 0,
        x: 20
      },0)

      linkedinIcon.addEventListener("mouseenter",()=>linkedTl.play())
      linkedinIcon.addEventListener("mouseleave",()=>linkedTl.reverse())

      const mailIcon = document.querySelector(".mailIcon")

      const mailTl = gsap.timeline({paused:true})

      mailTl.from(".mail",{
        opacity: 0,
        x: 20
      },0)

      mailIcon.addEventListener("mouseenter",()=>mailTl.play())
      mailIcon.addEventListener("mouseleave",()=>mailTl.reverse())

      

  })


  return (
    <Router>

      <div id="cursor"></div>

      <div className="navbar">
            <p className="logo">VM</p>
            <svg className="menu-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="63" height="63" rx="31.5" fill="white"/>
                <rect x="14" y="30" width="36.67" height="3" rx="1.5" fill="black"/>
                <rect x="14" y="22" width="36.67" height="3" rx="1.5" fill="black"/>
                <rect x="14" y="38" width="36.67" height="3" rx="1.5" fill="black"/>
            </svg>
      </div>

      <div className="menu">
            <div className="navbar">
            <p className="logo-menu">VM</p>
            <svg className="close-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="63" height="63" rx="31.5" fill="white"/>
                <rect x="20.4308" y="17.4745" width="36.67" height="3" rx="1.5" transform="rotate(45 20.4308 17.4745)" fill="black"/>
                <rect x="18.3095" y="43.4042" width="36.67" height="3" rx="1.5" transform="rotate(-45 18.3095 43.4042)" fill="black"/>
            </svg>
            </div>
            <div className="pages">
                <Link to="/"><p ref={homeRef}>01 Home <span className="underline"></span></p></Link>
                <Link to="/about"><p ref={aboutRef}>02 About <span className="underline"></span></p></Link>
                <Link to="/projects"><p ref={projectRef} className="coming">03 Projects <span className="underline"></span></p></Link>
                <Link to="/contact"><p ref={contactRef}>04 Contact Me <span className="underline"></span></p></Link>
            </div>
            <div className="socials">
              <div className="social-1">
                <p className="social-name github">GitHub</p>
                <RiGithubLine color="white" className="icons githubIcon"></RiGithubLine>
              </div>
              <div className="social-2">
                <p className="social-name linkedin">LinkedIn</p>
                <RiLinkedinLine color="white" className="icons linkedinIcon"></RiLinkedinLine>
              </div>
              <div className="social-3">
                <p className="social-name mail">Connect on Mail</p>
                <RiMailLine color="white" className="icons mailIcon"></RiMailLine>
              </div>
                  
            </div>      
        </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      
      
    </Router>
      
  )
}

export default App


