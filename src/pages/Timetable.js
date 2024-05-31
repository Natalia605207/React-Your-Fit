import { AccordionTimetable } from "../components/AccordionTimetable/AccordionTimetable";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const Timetable = () => {
    return(
        <div className="timetable">
        <div className="top-photo timetable-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading">See</p>
        <h2 className="topPhoto-subheading">Our Timetable</h2>
        </div>
        </div>
        <section className="timetable-main">
            <div className="column">
            <h4 className="white">Many options in <span className="outlined">one place</span></h4>
            <p className="description">We tried to make our timetable extremely useful with <span className="pink">lots of daily activities</span> so that anyone could find the necessary class in comfortable time.</p>
            </div>
        <AccordionTimetable />
        </section>
        <FeedbackForm />
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}