import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="column item">
            <Link to={`/shop/${item.title}`}>
            <img className="item-image" src={item.image} alt="item" />
            </Link>
            <p className="item-price">$ {item.price}</p>
            <p className="item-name">{item.name}</p>
        </div>
    )
}

export default Item;