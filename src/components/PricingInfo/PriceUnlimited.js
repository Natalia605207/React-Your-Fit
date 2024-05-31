import { dataPrice } from "./dataPrice";
import { HashLink as Link } from 'react-router-hash-link';

export const PriceUnlimited = () => {
    return(
        <div className="prices-container column unlimited">
            <h4><span className="outlined border-black">UNLIMITED</span> CLASS PASSES</h4>
            <hr className="prices-hr unlimited-hr" />
            <div className="flex-around width">
            {dataPrice.slice(3,6).map((price) => {
                const { id, days, oldPrice, newPrice } = price;
                return(
                    <div key={id} className="column morePadding">
                    <hr className="wide-hr unlimitedWide-hr" />
                    <div className="coach-card">
                    <p className="trainings">{days}</p>
                    <p className="priceClasses-vertical unlimitedPriceClasses-vertical">Days</p>
                    </div>
                    <div className="white-back dark-back">
                    <p className="old-price unlimitedOldPrice">${oldPrice}</p>
                    </div>
                    <div className="pink-back">
                    <p className="new-price unlimitedOldPrice">${newPrice}</p>
                    </div>
                    <p className="marginBottom">${Math.round(newPrice/days*30)}/month</p>
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