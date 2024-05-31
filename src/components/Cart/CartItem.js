import { dataShop } from "../dataShop";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({cartItem}) => {
    const items = dataShop.find(item => item.id === cartItem.itemId);
    const dispatch = useDispatch();
    return(
        <div className="flex">
            <div className="itemPhotoInCart">
            <img className="item-image" src={ items.image } alt="item" />
            </div>
            <div className="itemInCart column-left">
                <div className="flex-relative">
                    <p className="itemNameInCart">{ items.name }</p>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin"/>
                    </span>
                </div>
                <p className="items-number">{ cartItem.quantity } item(s)</p>
                <p className="itemTotalPrice">${+(items.price * cartItem.quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItem;