import { LiaFireAltSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { CgArrowRight } from "react-icons/cg";

export const ClassesDetailsBottom = ({ imageTwo, name, calories, point }) => {
    return(
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
            {point.map((item, index) => {
                return(
                    <div key={index}>
                        <p className="class-explanation middle"><CgArrowRight className="dash-icon" />{item}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}