import { AccordionFaqs } from "../components/AccordionFaqs/AccordionFaqs"
import { FeedbackForm } from "../components/FeedbackForm"
import { Footer } from "../components/Footer"
import { ScrollToTopBtn } from "../components/ScrollToTopBtn"

export const Faqs = () => {
    return(
        <div className="faqs">
        <div className="top-photo faqs-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading">View</p>
        <h2 className="topPhoto-subheading">The FAQs</h2>
        </div>
        </div>
        <section className="faqs-main">
            <div className="column">
            <h4 className="white">Most often <span className="outlined">questions</span></h4>
            <p className="description">We gathered <span className="pink">the most important</span> questions with answers for you.</p>
            </div>
        <AccordionFaqs />
        </section>
        <ScrollToTopBtn />
        <FeedbackForm />
        <Footer />
        </div>
    )
}