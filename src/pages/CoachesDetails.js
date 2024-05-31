import { useParams, useNavigate } from "react-router-dom";
import { dataCoaches } from "../components/CoachesInfo/dataCoaches";
import "../App.css";
import { MdOutlineStar } from "react-icons/md";
import CoachCounter from "../components/CoachesInfo/CoachCounter";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const CoachesDetails = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    return (
        <div className="detailed-coach column">
            {dataCoaches.filter(element => element.title === title).map((elem) => {
                const {id, photo, name, moto, directions, experience, education, certificates, phrase, hoursTrained, happyClients, personalBests} = elem;
                return(
                    <div key={id}>
                    <div className="detailedCoachInfo">
                            <div className="column-center">
                            <h4 className="black bottom">{name}</h4>
                            <p className="directions">{directions}</p>
                            <p className="detailedInfo"><MdOutlineStar className="star-icon" /> {experience} years of experience</p>
                            <p className="detailedInfo"><MdOutlineStar className="star-icon" /> Education: {education}</p>
                            <p className="detailedInfo"><MdOutlineStar className="star-icon" /> Cerificates in {certificates}</p>
                            <p className="detailedInfo"><MdOutlineStar className="star-icon" /> Group program trainer</p>
                            <p className="detailedInfo"><MdOutlineStar className="star-icon" /> "{phrase}"</p>
                            </div>
                            <div className="photo-moto">
                            <img className="aboutCoach-photo" src={photo} alt="coach" />
                            <p className="moto">{moto}</p>
                            </div>
                        </div>
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