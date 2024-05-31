import "./Modal.css";
import promoOne from "../../assets/PROMOS/drop.png";
import { VscClose } from "react-icons/vsc";
import flower from "../../assets/PROMOS/flower.png";
import { Link } from "react-router-dom";

const ContentPromo = ( {setModalPromoOpen} ) => {
    return(
        <div className="modal_content">
            <VscClose className="closeModalBtn" onClick={() => setModalPromoOpen(false)} />
            <img src={flower} alt="flower" className="flower" />
            <img src={flower} alt="flower" className="flowerTwo" />
            <img src={flower} alt="flower" className="flowerThree" />
            <img src={flower} alt="flower" className="flowerFour" />
            <img src={flower} alt="flower" className="flowerFive" />
            <p className="modal-heading">Summer drop</p>
            <p className="modal-text">-21% for 90/180/360 class packs</p>
            <img src={promoOne} alt="promo" className="promo-photo" />
            <button className="modal-cta" onClick={() => setModalPromoOpen(false)}>
                <Link to="/promos" className="promos-link text-light">More promos</Link>
            </button>
        </div>
    )
}

export default ContentPromo;