import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineStar } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export const CoachesDetailsInfo = ({ name, directions, experience, education, certificates, phrase, photo, moto }) => {
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
        <div className="detailedCoachInfo">
        <div className="column-center">
        <h4 className="black bottom" ref={addtoRefs}>{name}</h4>
        <p className="directions" ref={addtoRefs}>{directions}</p>
        <p className="detailedInfo" ref={addtoRefs}><MdOutlineStar className="star-icon" /> {experience} years of experience</p>
        <p className="detailedInfo" ref={addtoRefs}><MdOutlineStar className="star-icon" /> Education: {education}</p>
        <p className="detailedInfo" ref={addtoRefs}><MdOutlineStar className="star-icon" /> Cerificates in {certificates}</p>
        <p className="detailedInfo" ref={addtoRefs}><MdOutlineStar className="star-icon" /> Group program trainer</p>
        <p className="detailedInfo" ref={addtoRefs}><MdOutlineStar className="star-icon" /> "{phrase}"</p>
        </div>
        <div className="photo-moto" ref={addtoRefs}>
        <img className="aboutCoach-photo" src={photo} alt="coach" />
        <p className="moto">{moto}</p>
        </div>
    </div>
    )
}