import { React, useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HashLink as Link } from 'react-router-hash-link';
gsap.registerPlugin(ScrollTrigger);

export const ClassesDetailsTop = ( { image, name, explanation }) => {
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
        <div className="detailedClass-cover column"
        style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
        <div className="heading-cover detailedClasses-heading">
            <div className="column-center center">
                <h4 className="detailedClass-heading" ref={addtoRefs}>{name}</h4>
                <div className="studio" ref={addtoRefs}>
                <p className="your-fit">IN YOUR FIT STUDIO</p>
                </div>
                <p className="class-explanation" ref={addtoRefs}>{explanation}</p>
                <button className="cta" ref={addtoRefs}>
                <Link smooth to="/#form" className="coaches-link text-light">Get a free trial</Link>
                </button>
            </div>
            <div className="detailedClasses-topPhoto">
                <img className="detailedClassPhoto" src={image} alt="class" ref={addtoRefs} />
            </div>
        </div>
        </div>
    )
}