import { useParams, useNavigate } from "react-router-dom";
import { dataCoaches } from "../components/CoachesInfo/dataCoaches";
import "../App.css";
import CoachCounter from "../components/CoachesInfo/CoachCounter";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { CoachesDetailsInfo } from "../components/CoachesInfo/CoachesDetailsInfo";

export const CoachesDetails = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    return (
        <div className="detailed-coach column">
            {dataCoaches.filter(element => element.title === title).map((elem) => {
                const {id, photo, name, moto, directions, experience, education, certificates, phrase, hoursTrained, happyClients, personalBests} = elem;
                return(
                    <div key={id}>
                        <CoachesDetailsInfo name={name} directions={directions} experience={experience} education={education} certificates={certificates} phrase={phrase} photo={photo} moto={moto} />
                        <CoachCounter hoursTrained={hoursTrained} happyClients={happyClients} personalBests={personalBests} />
                        <div className="back">
                        <button className="cta learn-more coach-btn" onClick={() => navigate(-1)}>
                                Go back
                            </button>
                        </div>
                        <ScrollToTopBtn />
                        <FeedbackForm />
                        <Footer />
                    </div>
                );
            })}
        </div>
    )
}