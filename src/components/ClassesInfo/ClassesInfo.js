import { React, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import { RiArrowRightSLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

export const ClassesInfo = ({classes}) => {
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
        <div className="flex-around wrap" ref={ref}>
            {classes.map((element => {
                const {id, image, name } = element;
                return(
                    <div key={id} className="class-card">
                        <div className="classCard-inner">
                        <Link to={`/classes/${element.title}`}>
                        <img className="class-photo" src={image} alt="class" />
                        </Link>
                        <p className="class-name">{name}</p>
                        <Link to={`/classes/${element.title}`}>
                        <RiArrowRightSLine className="right-arrow" />
                        </Link>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}