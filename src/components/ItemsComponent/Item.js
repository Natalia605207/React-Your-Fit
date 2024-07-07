import { Link } from "react-router-dom";

const Item = ({garment}) => {
    return(
        <div className="column item">
            <Link to={`/shop/${garment.title}`}>
            <img className="item-image" src={garment.image} alt="item" />
            </Link>
            <p className="item-price">$ {garment.price}</p>
            <p className="item-name">{garment.name}</p>
        </div>
    )
}

export default Item;