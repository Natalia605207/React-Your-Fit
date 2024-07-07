import { React, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CoachesInfo = ({coaches}) => {
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
            {coaches.map((element => {
                const {id, photo, name } = element;
                return(
                    <div key={id} className="point coach-card">
                        <Link to={`/coaches/${element.title}`}>
                        <img className="coach-photo" src={photo} alt="coach" />
                        </Link>
                        <p className="coach-name">{name}</p>
                    </div>
                )
            }))}
        </div>
    )
}