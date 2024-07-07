import { HashLink as Link } from 'react-router-hash-link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import "../App.css";
import mainPhoto from "../assets/main-photo.jpg";

gsap.registerPlugin(useGSAP);

export const FrontPage = () => {
    const animateFrontPage = useRef();

    useGSAP(
        () => {
            gsap.from('h2', { delay: 0.5, duration: 1, y: -70, opacity: 0, ease: "sine.out" });
            gsap.from('h1', { delay: 1.5, duration: 1.2, x: -70, opacity: 0, ease: "sine.out" });
            gsap.from('h3', { delay: 2, duration: 1, y: 70, opacity: 0, ease: "sine.out" });
            gsap.from('.cta', { delay: 2, duration: 1, y: 70, opacity: 0, ease: "sine.out" });
        },
        { scope: animateFrontPage }
    );

    return(
        <section className="top-cover column" ref={animateFrontPage}>
            <img src={mainPhoto} alt="cover" className="main-photo" />
            <h2>Welcome to <span className="outlined-words">&nbsp;YOUR FIT&nbsp;</span></h2>
            <h1>Stretching <span className="plus">+</span> fitness <span className="plus">+</span> yoga studio</h1>
            <h3>Dive into the world of movement, energy and unique training classes</h3>
            <button className="cta">
            <Link smooth to="/#form" className="coaches-link text-light">Get a free trial</Link>
            </button>
        </section>
    )
}