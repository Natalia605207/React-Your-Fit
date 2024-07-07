import { React, useEffect, useRef } from "react";
import { dataPrice } from "./dataPrice";
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const PriceAllClasses = () => {
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
        <div className="prices-container column">
            <h4 ref={addtoRefs}><span className="outlined">ALL</span> CLASSES</h4>
            <hr className="prices-hr" ref={addtoRefs} />
            <div className="flex-around width">
            {dataPrice.slice(0,3).map((price) => {
                const { id, trainings, months, oldPrice, newPrice } = price;
                return(
                    <div key={id} className="column morePadding" ref={addtoRefs}>
                    <hr className="wide-hr" />
                    <div className="coach-card">
                    <p className="trainings">{trainings}</p>
                    <p className="priceClasses-vertical">Classes</p>
                    </div>
                    <p>{months} months</p>
                    <div className="white-back">
                    <p className="old-price">${oldPrice}</p>
                    </div>
                    <div className="pink-back">
                    <p className="new-price">${newPrice}</p>
                    </div>
                    <p className="marginBottom">${Math.round(newPrice/trainings)}/class</p>
                    </div>
                )
            })}
            </div>
            <button className="cta" ref={addtoRefs}>
                <Link smooth to="/#form" className="coaches-link text-light">Leave a Request</Link>
                </button>
        </div>
    )
}