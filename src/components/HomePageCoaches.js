import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { dataCoaches } from "./CoachesInfo/dataCoaches";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const HomePageCoaches = () => {
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
        <section className="homePageCoaches start-column">
        <h4 className="black">Our <span className="outlined border-black">Coaches</span></h4>
        <p className="description black">We have a team of <span className="pink">in-house sport scientists</span> and head coaches. Our coaches individualize the workout for members, adapting the exercises on each round to suit your skills and fitness level.</p>
        <div className="flex-around">
            {dataCoaches.slice(0,3).map((coach) => {
                const { id, photo, name, specialization } = coach;
                return(
                    <div key={id} className="coach-card" ref={addtoRefs}>
                        <img className="coach-photo" src={photo} alt="coach" />
                        <p className="coach-name">{name}</p>
                        <p className="specialization">{specialization}</p>
                    </div>
                )
            })}
        </div>
        <button className="cta learn-more center-btn">
            <Link to="/coaches" className="coaches-link text-light">Choose Yours</Link>
        </button>
    </section>
    )
}