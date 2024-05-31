import { Benefits } from "../components/Benefits";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { FrontPage } from "../components/FrontPage";
import { HomePageClasses } from "../components/HomePageClasses";
import { HomePageCoaches } from "../components/HomePageCoaches";
import { Interior } from "../components/Interior/Interior";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { ScrollingAnnouncement } from "../components/ScrollingAnnouncement";
import { SpecialOffer } from "../components/SpecialOffer";

export const Home = () => {
    return(
        <main>
            <FrontPage />
            <ScrollToTopBtn />
            <Benefits />
            <Interior />
            <ScrollingAnnouncement />
            <HomePageClasses />
            <HomePageCoaches />
            <SpecialOffer />
            <ScrollingAnnouncement />
            <div id="form">
            <FeedbackForm />
            </div>
            <div id="contact">
            <Footer />
            </div>
        </main>
    )
}