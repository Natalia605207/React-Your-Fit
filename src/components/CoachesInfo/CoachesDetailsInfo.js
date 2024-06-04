import { MdOutlineStar } from "react-icons/md";

export const CoachesDetailsInfo = ({ name, directions, experience, education, certificates, phrase, photo, moto }) => {
    return(
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
    )
}