import { React, useEffect, useRef } from "react";
import { dataPrice } from "./dataPrice";
import { HashLink as Link } from 'react-router-hash-link';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const PriceUnlimited = () => {
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
        <div className="prices-container column unlimited">
            <h4 ref={addtoRefs}><span className="outlined border-black">UNLIMITED</span> CLASS PASSES</h4>
            <hr className="prices-hr unlimited-hr" ref={addtoRefs} />
            <div className="flex-around width">
            {dataPrice.slice(3,6).map((price) => {
                const { id, days, oldPrice, newPrice } = price;
                return(
                    <div key={id} className="column morePadding" ref={addtoRefs}>
                    <hr className="wide-hr unlimitedWide-hr" />
                    <div className="coach-card">
                    <p className="trainings">{days}</p>
                    <p className="priceClasses-vertical unlimitedPriceClasses-vertical">Days</p>
                    </div>
                    <div className="white-back dark-back">
                    <p className="old-price unlimitedOldPrice">${oldPrice}</p>
                    </div>
                    <div className="pink-back">
                    <p className="new-price unlimitedOldPrice">${newPrice}</p>
                    </div>
                    <p className="marginBottom">${Math.round(newPrice/days*30)}/month</p>
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