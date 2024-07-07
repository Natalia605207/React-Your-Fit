import { React, useEffect, useRef } from "react";
import { AccordionFaqs } from "../components/AccordionFaqs/AccordionFaqs";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Faqs = () => {
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
        <div className="faqs">
        <div className="top-photo faqs-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading" ref={addtoRefs}>View</p>
        <h2 className="topPhoto-subheading" ref={addtoRefs}>The FAQs</h2>
        </div>
        </div>
        <section className="faqs-main">
            <div className="column">
            <h4 className="white" ref={addtoRefs}>Most often <span className="outlined">questions</span></h4>
            <p className="description" ref={addtoRefs}>We gathered <span className="pink">the most important</span> questions with answers for you.</p>
            </div>
        <AccordionFaqs />
        </section>
        <ScrollToTopBtn />
        <FeedbackForm />
        <Footer />
        </div>
    )
}