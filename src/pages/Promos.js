import { React, useEffect, useRef } from "react";
import { Benefits } from "../components/Benefits";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { PromosInfo } from "../components/PromosInfo";
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Promos = () => {
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
            <div className="top-photo promos-topPhoto">
            <div className="topPhoto-cover column">
            <p className="topPhoto-heading" ref={addtoRefs}>Find</p>
            <h2 className="topPhoto-subheading" ref={addtoRefs}>Our Promos</h2>
            </div>
            </div>
            <section>
                <div className="column">
                <h4 className="black" ref={addtoRefs}>Nice offers <span className="outlined border-black">for our clients</span></h4>
                <p className="description black" ref={addtoRefs}>We think and care about our clients all the time. That's why we <span className="pink">constantly make various promos</span> to meet your needs. Use this opportunity. Choose your promo today.</p>
                </div>
                <PromosInfo />
                <br />
                <div className="column">
                <button className="cta learn-more" ref={addtoRefs}>
                <Link smooth to="/#form" className="coaches-link text-light">Learn More</Link>
                </button>
                </div>
            </section>
            <Benefits />
            <FeedbackForm />
            <ScrollToTopBtn />
            <Footer />
            </div>
        )
}