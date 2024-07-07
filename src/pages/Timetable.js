import { React, useEffect, useRef } from "react";
import { AccordionTimetable } from "../components/AccordionTimetable/AccordionTimetable";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Timetable = () => {
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
        <div className="timetable">
        <div className="top-photo timetable-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading" ref={addtoRefs}>See</p>
        <h2 className="topPhoto-subheading" ref={addtoRefs}>Our Timetable</h2>
        </div>
        </div>
        <section className="timetable-main">
            <div className="column">
            <h4 className="white" ref={addtoRefs}>Many options in <span className="outlined">one place</span></h4>
            <p className="description" ref={addtoRefs}>We tried to make our timetable extremely useful with <span className="pink">lots of daily activities</span> so that anyone could find the necessary class in comfortable time.</p>
            </div>
        <AccordionTimetable />
        </section>
        <FeedbackForm />
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}