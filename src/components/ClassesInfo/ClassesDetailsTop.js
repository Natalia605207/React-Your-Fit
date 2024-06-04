import { HashLink as Link } from 'react-router-hash-link';

export const ClassesDetailsTop = ( { image, name, explanation }) => {
    return(
        <div className="detailedClass-cover column"
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
    )
}