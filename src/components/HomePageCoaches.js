import { dataCoaches } from "./CoachesInfo/dataCoaches";
import { Link } from "react-router-dom";

export const HomePageCoaches = () => {
    return(
        <section className="homePageCoaches start-column">
        <h4 className="black">Our <span className="outlined border-black">Coaches</span></h4>
        <p className="description black">We have a team of <span className="pink">in-house sport scientists</span> and head coaches. Our coaches individualize the workout for members, adapting the exercises on each round to suit your skills and fitness level.</p>
        <div className="flex-around">
            {dataCoaches.slice(0,3).map((coach) => {
                const { id, photo, name, specialization } = coach;
                return(
                    <div key={id} className="coach-card">
                        <img className="coach-photo" src={photo} alt="coach" />
                        <p className="coach-name">{name}</p>
                        <p className="specialization">{specialization}</p>
                    </div>
                )
            })}
        </div>
        <button className="cta learn-more center-btn">
            <Link to="/coaches" className="coaches-link text-light">Choose Yours</Link>
        </button>
    </section>
    )
}