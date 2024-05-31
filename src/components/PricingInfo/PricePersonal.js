import { dataPrice } from "./dataPrice";
import { HashLink as Link } from 'react-router-hash-link';

export const PricePersonal = () => {
    return(
        <div className="prices-container column">
            <h4><span className="outlined">PERSONAL</span> TRAININGS</h4>
            <p className="discount-subheading">(1 hour)</p>
            <hr className="prices-hr" />
            <div className="flex-around width">
            {dataPrice.slice(6,9).map((element) => {
                const { id, trainings, months, price } = element;
                return(
                    <div key={id} className="column morePadding">
                    <hr className="wide-hr" />
                    <div className="coach-card">
                    <p className="trainings">{trainings}</p>
                    <p className="priceClasses-vertical">Classes</p>
                    </div>
                    <p>{months} months</p>
                    <div className="white-back">
                    <p className="old-price decoration-none">${price}</p>
                    </div>
                    <p className="marginBottom">${Math.round(price/trainings)}/class</p>
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