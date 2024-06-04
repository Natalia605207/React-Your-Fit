import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { dataClasses } from "../components/ClassesInfo/dataClasses";
import "../App.css";
import { Benefits } from "../components/Benefits";
import { Discount } from "../components/PricingInfo/Discount";
import { FeedbackForm } from "../components/FeedbackForm";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";
import { ClassesDetailsTop } from "../components/ClassesInfo/ClassesDetailsTop";
import { ClassesDetailsBottom } from "../components/ClassesInfo/ClassesDetailsBottom";
import { ClassesDetailsDescription } from "../components/ClassesInfo/ClassesDetailsDescription";

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
                const {id, image, name, explanation, calories, imageTwo, point, description, showMore } = elem;
                return(
                    <div key={id} className="classes-column">
                    <ClassesDetailsTop image={image} name={name} explanation={explanation} />
                    <Benefits />
                    <ClassesDetailsBottom imageTwo={imageTwo} name={name} calories={calories} point={point} />
                    <hr className="horizontal-line" />
                    <div className="class-description column">
                    <ClassesDetailsDescription description={description} showMore={showMore} showTextClick={showTextClick} elem={elem} /> 
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