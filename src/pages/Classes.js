import { useState } from "react";
import { dataClasses } from "../components/ClassesInfo/dataClasses";
import ClassFilter from "../components/ClassesInfo/ClassFilter";
import { ClassesInfo } from "../components/ClassesInfo/ClassesInfo";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";


export const Classes = () => {
    const [classes, setClasses] = useState(dataClasses);

    const filterClasses = (searchTerm) => {
        const chosenClass = dataClasses.filter(item => item.searchTerm === searchTerm);
        setClasses(chosenClass);
    }

    return(
        <div className="all-classes">
        <div className="top-photo classes-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading">View</p>
        <h2 className="topPhoto-subheading">Our Classes</h2>
        </div>
        </div>
        <ScrollToTopBtn />
        <section>
            <div className="column">
            <h4 className="white">Best classes <span className="outlined">for you</span></h4>
            <p className="description">More than <span className="pink">12 options</span> to choose! Effective training system developed by professionals. Enjoy fitness, stretching and yoga with us.</p>
            </div>
        <ClassFilter filterClasses={filterClasses} />
        <ClassesInfo classes={classes} />
        </section>
        <FeedbackForm />
        <Footer />
        </div>
    )
}