import { React, useEffect, useRef } from 'react';
import { dataShop } from "../dataShop";
import Garment from "./Garment";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/garmentsSlice";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Garments = () => {
    const selectedCategory = useSelector(getSelectedCategory);

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
            {dataShop
            .filter(garment => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === garment.category
            })
            .map(garment =>
                <Garment garment={garment} key={garment.id} />
            )}
        </div>
    )
}

export default Garments;