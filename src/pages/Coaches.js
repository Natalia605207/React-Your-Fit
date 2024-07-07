import { React, useEffect, useRef, useState } from "react";
import { dataCoaches } from "../components/CoachesInfo/dataCoaches";
import { Buttons } from "../components/CoachesInfo/Buttons";
import { CoachesInfo } from "../components/CoachesInfo/CoachesInfo";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Coaches = () => {
    const [coaches, setCoaches] = useState(dataCoaches);

    const filterCoaches = (searchTerm) => {
        const chosenCoaches = dataCoaches.filter(coach => coach.searchTerm.includes(searchTerm) === true);
        setCoaches(chosenCoaches);
    }

    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=70",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, [])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return(
        <div>
        <div className="our-team column">
        <div className="top-photo coaches-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading" ref={addtoRefs}>Meet</p>
        <h2 className="topPhoto-subheading" ref={addtoRefs}>Our Team</h2>
        </div>
        </div>
        <section className="column">
            <h4 className="black" ref={addtoRefs}>Team of <span className="outlined border-black">expert coaches</span></h4>
            <p className="description black" ref={addtoRefs}>We have a team of <span className="pink">in-house sport scientists</span> and head coaches. Our coaches individualize the workout for members, adapting the exercises on each round to suit your skills and fitness level.</p>
        <Buttons filterCoaches={filterCoaches} setCoaches={setCoaches} dataCoaches={dataCoaches} />
        <CoachesInfo coaches={coaches} />
        </section>
        </div>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}