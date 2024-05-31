import { Link } from "react-router-dom";
import "../../App.css";

export const CoachesInfo = ({coaches}) => {
    return(
        <div className="row">
            {coaches.map((element => {
                const {id, photo, name } = element;
                return(
                    <div key={id} className="point coach-card">
                        <Link to={`/coaches/${element.title}`}>
                        <img className="coach-photo" src={photo} alt="coach" />
                        </Link>
                        <p className="coach-name">{name}</p>
                    </div>
                )
            }))}
        </div>
    )
}