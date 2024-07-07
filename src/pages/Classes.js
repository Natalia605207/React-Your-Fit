import { React, useEffect, useRef, useState } from "react";
import { dataClasses } from "../components/ClassesInfo/dataClasses";
import ClassFilter from "../components/ClassesInfo/ClassFilter";
import { ClassesInfo } from "../components/ClassesInfo/ClassesInfo";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Classes = () => {
    const [classes, setClasses] = useState(dataClasses);

    const filterClasses = (searchTerm) => {
        const chosenClass = dataClasses.filter(item => item.searchTerm === searchTerm);
        setClasses(chosenClass);
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
        <div className="all-classes">
        <div className="top-photo classes-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading" ref={addtoRefs}>View</p>
        <h2 className="topPhoto-subheading" ref={addtoRefs}>Our Classes</h2>
        </div>
        </div>
        <ScrollToTopBtn />
        <section>
            <div className="column">
            <h4 className="white" ref={addtoRefs}>Best classes <span className="outlined">for you</span></h4>
            <p className="description" ref={addtoRefs}>More than <span className="pink">12 options</span> to choose! Effective training system developed by professionals. Enjoy fitness, stretching and yoga with us.</p>
            </div>
        <ClassFilter filterClasses={filterClasses} />
        <ClassesInfo classes={classes} />
        </section>
        <FeedbackForm />
        <Footer />
        </div>
    )
}