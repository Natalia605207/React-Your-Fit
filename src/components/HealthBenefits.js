import woman from "../assets/healthBenefits.png";
import { AiFillPlusCircle } from "react-icons/ai";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { React, useEffect, useRef } from 'react';
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HealthBenefits = () => {
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
            <section className="health-benefits">
                <div className="column flex-one" ref={addtoRefs}>
                    <div className="benefits-flexAround">
                <a className="benefits-button" data-tooltip-id="point-one" data-tooltip-content="Boost energy">
                <AiFillPlusCircle />
                </a>
                <a className="benefits-button" data-tooltip-id="point-two" data-tooltip-content="Improve cardiovascular health">
                <AiFillPlusCircle />
                </a>
                <a className="benefits-button" data-tooltip-id="point-three" data-tooltip-content="Improve sleep">
                <AiFillPlusCircle />
                </a>
                <Tooltip id="point-one" clickable />
                <Tooltip id="point-two" clickable />
                <Tooltip id="point-three" clickable />
                </div>
                <img src={woman} alt="woman" className="woman-photo" />
                <div className="benefits-flexAround">
                <a className="benefits-button" data-tooltip-id="point-four" data-tooltip-content="Strong muscles" data-tooltip-place="bottom">
                <AiFillPlusCircle />
                </a>
                <a className="benefits-button" data-tooltip-id="point-five" data-tooltip-content="Lower blood pressure" data-tooltip-place="bottom">
                <AiFillPlusCircle />
                </a>
                <a className="benefits-button" data-tooltip-id="point-six" data-tooltip-content="Weight loss" data-tooltip-place="bottom">
                <AiFillPlusCircle />
                </a>
                <Tooltip id="point-four" clickable  />
                <Tooltip id="point-five" clickable />
                <Tooltip id="point-six" clickable />
                </div>
                </div>
                <div className="start-column flex-one" ref={addtoRefs}>
                <h4 className="black">Health <span className="outlined border-black">Benefits</span></h4>
                <p className="description black">Our exercises give <span className="pink">a strong positive impact</span> on your body. Join us today for better tomorrow.</p>
                </div>
            </section>
    )
}