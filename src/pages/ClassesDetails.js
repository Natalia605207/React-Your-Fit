import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataClasses } from "../components/ClassesInfo/dataClasses";
import "../App.css";
import { Benefits } from "../components/Benefits";
import { LiaFireAltSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { CgArrowRight } from "react-icons/cg";
import { Discount } from "../components/PricingInfo/Discount";
import { FeedbackForm } from "../components/FeedbackForm";
import { HashLink as Link } from 'react-router-hash-link';
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const ClassesDetails = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const [showText, setShowText] = useState(false);
    
    const showTextClick = (elem) => {
        elem.showMore = !elem.showMore;
        setShowText(!showText);
    }
    return (
        <div className="detailed-class">
            {dataClasses.filter(element => element.title === title).map((elem) => {
                const {id, image, name, explanation, calories, imageTwo, pointOne, pointTwo, pointThree, pointFour, pointFive, pointSix, description, showMore } = elem;
                return(
                    <div className="classes-column">
                    <div key={id} className="detailedClass-cover column"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div className="heading-cover detailedClasses-heading">
                        <div className="column-center center">
                            <h4 className="detailedClass-heading">{name}</h4>
                            <div className="studio">
                            <p className="your-fit">IN YOUR FIT STUDIO</p>
                            </div>
                            <p className="class-explanation">{explanation}</p>
                            <button className="cta">
                            <Link smooth to="/#form" className="coaches-link text-light">Get a free trial</Link>
                            </button>
                        </div>
                        <div className="detailedClasses-topPhoto">
                            <img className="detailedClassPhoto" src={image} alt="class" />
                        </div>
                    </div>
                    </div>
                    <Benefits />
                    <div className="detailedClasses-heading pros">
                        <div className="detailedClasses-topPhoto">
                            <img className="detailedClassPhoto second" src={imageTwo} alt="class" />
                        </div>
                        <div className="column-center">
                            <h4 className="detailedClass-heading">{name}</h4>
                            <div className="start">
                            <p className="time"><WiTime4 className="time-icon" /> 60 min</p>
                            <p className="time"><LiaFireAltSolid className="time-icon" /> {calories} kcal</p>
                            </div>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointOne}</p>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointTwo}</p>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointThree}</p>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointFour}</p>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointFive}</p>
                            <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{pointSix}</p>
                        </div>
                    </div>
                    <hr className="horizontal-line" />
                    <div className="class-description column">
                        <div className="row">
                        <p className="class-explanation left">
                        {showMore ? description : description.substring(0, 300) +"..."}
                            <button className="showMoreBtn" onClick = {() => showTextClick(elem)}>{showMore ? "Show less" : "Show more"}</button>
                        </p>
                        </div>
                    <button className="cta low" onClick={() => navigate(-1)}>
                    Go back
                    </button>
                    </div>
                    <ScrollToTopBtn />
                    <Discount />
                    <FeedbackForm />
                    <Footer />
                    </div>
                );
            })}
        </div>
    )
}