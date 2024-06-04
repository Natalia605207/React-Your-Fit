import ChangeQuantity from "../components/Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { TbShoppingBagPlus } from "react-icons/tb";

export const ShopItemDetailsInfo = ({ image, name, price, description, quantity, setQuantity, dispatch , item }) => {
    return(
        <div className="detailedItmes-heading">
        <div className="column realtive">
            <img className="itemImage-detailed" src={image} alt="item" />
            <div className="new">
                <p className="new-sign">NEW</p>
            </div>
        </div>
        <div className="column-left">
            <p className="detailedItem-name">{name}</p>
            <p className="detailedItem-price">$ {price}</p>
            <p className="item-description">{description}</p>
            <div className="addedItems">
                <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
            </div>
            <div>
                <button className="cta flex-center" onClick={() => {dispatch(addItemToCart({item, quantity}))}}><TbShoppingBagPlus className="shoppingBag-icon" /> Add to cart</button>
            </div>
        </div>
    </div>
    )
}