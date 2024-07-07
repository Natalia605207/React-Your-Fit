import { React, useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LiaFireAltSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { CgArrowRight } from "react-icons/cg";

gsap.registerPlugin(ScrollTrigger);

export const ClassesDetailsBottom = ({ imageTwo, name, calories, point }) => {
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
        <div className="detailedClasses-heading pros">
        <div className="detailedClasses-topPhoto">
            <img className="detailedClassPhoto second" src={imageTwo} alt="class"  ref={addtoRefs} />
        </div>
        <div className="column-center">
            <h4 className="detailedClass-heading"  ref={addtoRefs}>{name}</h4>
            <div className="start">
            <p className="time"  ref={addtoRefs}><WiTime4 className="time-icon" /> 60 min</p>
            <p className="time"  ref={addtoRefs}><LiaFireAltSolid className="time-icon" /> {calories} kcal</p>
            </div>
            {point.map((item, index) => {
                return(
                    <div key={index}  ref={addtoRefs}>
                        <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{item}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}