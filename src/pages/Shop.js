import { React, useEffect, useRef } from "react";
import Garments from "../components/ItemsComponent/Garments";
import AllCategories from "../components/Filter/AllCategories";
import "../App.css";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Shop = () => {
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
        <div>
        <div className="top-photo shopItems-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading" ref={addtoRefs}>Visit</p>
        <h2 className="topPhoto-subheading" ref={addtoRefs}>Our Shop</h2>
        </div>
        </div>
        <section>
            <div className="column">
            <h4 className="black" ref={addtoRefs}>Best items <span className="outlined border-black">for workouts</span></h4>
            <p className="description black" ref={addtoRefs}>We offer you only <span className="pink">necessary and high-quality</span> items for your workouts! They will help you to reach the desired results. Enjoy our workouts with items that are designed for sport.</p>
            </div>
            <AllCategories />
            <Garments />
        </section>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}