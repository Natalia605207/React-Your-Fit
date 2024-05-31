import { dataPrice } from "./dataPrice";
import { HashLink as Link } from 'react-router-hash-link';

export const PriceAllClasses = () => {
    return(
        <div className="prices-container column">
            <h4><span className="outlined">ALL</span> CLASSES</h4>
            <hr className="prices-hr" />
            <div className="flex-around width">
            {dataPrice.slice(0,3).map((price) => {
                const { id, trainings, months, oldPrice, newPrice } = price;
                return(
                    <div key={id} className="column morePadding">
                    <hr className="wide-hr" />
                    <div className="coach-card">
                    <p className="trainings">{trainings}</p>
                    <p className="priceClasses-vertical">Classes</p>
                    </div>
                    <p>{months} months</p>
                    <div className="white-back">
                    <p className="old-price">${oldPrice}</p>
                    </div>
                    <div className="pink-back">
                    <p className="new-price">${newPrice}</p>
                    </div>
                    <p className="marginBottom">${Math.round(newPrice/trainings)}/class</p>
                    </div>
                )
            })}
            </div>
            <button className="cta">
                <Link smooth to="/#form" className="coaches-link text-light">Leave a Request</Link>
                </button>
        </div>
    )
}