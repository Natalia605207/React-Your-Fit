import { HomePageClassesCarousel } from "./HomePageClassesCarousel/HomePageClassesCarousel";
import { Link } from "react-router-dom";

export const HomePageClasses = () => {
    return(
        <section className="homePageClasses start-column">
            <h4 className="section-headings">Our <span className="outlined">Classes</span></h4>
            <p className="description">More than <span className="pink">12 options</span> to choose! Effective training system developed by professionals. Enjoy fitness, stretching and yoga with us.</p>
            <HomePageClassesCarousel />
            <button className="cta learn-more center-btn">
            <Link to="/classes" className="coaches-link text-light">Learn More</Link>
            </button>
        </section>
    )
}