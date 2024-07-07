import { React, useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Discount = () => {
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
        <div className="discount">
            <div className="discount-cover column">
                <p className="offer-heading" ref={addtoRefs}>ONLY FOR NEW CLIENTS</p>
                <div className="fifteen-container" ref={addtoRefs}>
                <p className="offer-heading">15% DISCOUNT</p>
                </div>
                <p className="discount-subheading" ref={addtoRefs}>ON CLASS PACKS</p>
            </div>
        </div>
    )
}