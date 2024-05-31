import { useState } from "react";
import { dataCoaches } from "../components/CoachesInfo/dataCoaches";
import { Buttons } from "../components/CoachesInfo/Buttons";
import { CoachesInfo } from "../components/CoachesInfo/CoachesInfo";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const Coaches = () => {
    const [coaches, setCoaches] = useState(dataCoaches);

    const filterCoaches = (searchTerm) => {
        const chosenCoaches = dataCoaches.filter(coach => coach.searchTerm.includes(searchTerm) === true);
        setCoaches(chosenCoaches);
    }

    return(
        <div>
        <div className="our-team column">
        <div className="top-photo coaches-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading">Meet</p>
        <h2 className="topPhoto-subheading">Our Team</h2>
        </div>
        </div>
        <section className="column">
            <h4 className="black">Team of <span className="outlined border-black">expert coaches</span></h4>
            <p className="description black">We have a team of <span className="pink">in-house sport scientists</span> and head coaches. Our coaches individualize the workout for members, adapting the exercises on each round to suit your skills and fitness level.</p>
        <Buttons filterCoaches={filterCoaches} />
        <CoachesInfo coaches={coaches} />
        </section>
        </div>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}