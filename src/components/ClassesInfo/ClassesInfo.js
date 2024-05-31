import { Link } from "react-router-dom";
import "../../App.css";
import { RiArrowRightSLine } from "react-icons/ri";

export const ClassesInfo = ({classes}) => {
    return(
        <div className="flex-around wrap">
            {classes.map((element => {
                const {id, image, name } = element;
                return(
                    <div key={id} className="class-card">
                        <div className="classCard-inner">
                        <Link to={`/classes/${element.title}`}>
                        <img className="class-photo" src={image} alt="class" />
                        </Link>
                        <p className="class-name">{name}</p>
                        <Link to={`/classes/${element.title}`}>
                        <RiArrowRightSLine className="right-arrow" />
                        </Link>
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}