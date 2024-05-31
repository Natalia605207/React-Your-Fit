import { Discount } from "../components/PricingInfo/Discount";
import { PriceAllClasses } from "../components/PricingInfo/PriceAllClasses";
import { PriceUnlimited } from "../components/PricingInfo/PriceUnlimited";
import { PricePersonal } from "../components/PricingInfo/PricePersonal";
import "../App.css";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const Pricing = () => {
    return(
        <section className="pricing column">
            <Discount />
            <PriceAllClasses />
            <PriceUnlimited />
            <PricePersonal />
            <ScrollToTopBtn />
            <FeedbackForm />
            <Footer />
        </section>
    )
}