import { HashLink as Link } from 'react-router-hash-link';

export const SpecialOffer = () => {
    return(
        <div className="special-offer column">
            <div className="topPhoto-cover less column">
            <p className="offer-heading">Choose your class and get <span className="pink">a special offer</span></p>
            <p className="offer-subheading">We help tailor your routine and weekly training to get the most out of your sessions to reach your health and fitness goals faster.</p>
            <button className="cta learn-more">
            <Link smooth to="/#form" className="coaches-link text-light">Get my offer</Link>
            </button>
            </div>
        </div>
    )
}