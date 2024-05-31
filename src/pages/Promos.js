import { Benefits } from "../components/Benefits";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { PromosInfo } from "../components/PromosInfo";
import { HashLink as Link } from 'react-router-hash-link';
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const Promos = () => {
        return(
            <div>
            <div className="top-photo promos-topPhoto">
            <div className="topPhoto-cover column">
            <p className="topPhoto-heading">Find</p>
            <h2 className="topPhoto-subheading">Our Promos</h2>
            </div>
            </div>
            <section>
                <div className="column">
                <h4 className="black">Nice offers <span className="outlined border-black">for our clients</span></h4>
                <p className="description black">We think and care about our clients all the time. That's why we <span className="pink">constantly make various promos</span> to meet your needs. Use this opportunity. Choose your promo today.</p>
                </div>
                <PromosInfo />
                <br />
                <div className="column">
                <button className="cta learn-more">
                <Link smooth to="/#form" className="coaches-link text-light">Learn More</Link>
                </button>
                </div>
            </section>
            <Benefits />
            <FeedbackForm />
            <ScrollToTopBtn />
            <Footer />
            </div>
        )
}