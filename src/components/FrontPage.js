import { HashLink as Link } from 'react-router-hash-link';
import "../App.css";
import mainPhoto from "../assets/main-photo.jpg";

export const FrontPage = () => {
    return(
        <section className="top-cover column">
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