import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    return(
        <div className="flex">
            <div className="itemPhotoInCart">
            <img className="item-image" src={ cartItem.image } alt="item" />
            </div>
            <div className="itemInCart column-left">
                <div className="flex-relative">
                    <p className="itemNameInCart">{ cartItem.name }</p>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin"/>
                    </span>
                </div>
                <p className="items-number">{ cartItem.quantity } item(s)</p>
                <p className="itemTotalPrice">${+(cartItem.price * cartItem.quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItem;