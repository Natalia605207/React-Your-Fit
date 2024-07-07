import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ClassesDetailsDescription = ({ description, showMore, showTextClick, elem }) => {
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                trigger: el,
                start: "top bottom-=70",
                toggleActions: "play none none reverse"
            }
        })
    }, [])

    return(
        <div className="row" ref={ref}>
        <p className="class-explanation left">
        {showMore ? description : description.substring(0, 300) +"..."}
            <button className="showMoreBtn" onClick = {() => showTextClick(elem)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
        </div>
    )
}