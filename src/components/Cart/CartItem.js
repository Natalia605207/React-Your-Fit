import { useDispatch } from "react-redux";
import { removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from "../../redux/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiPlusLight } from "react-icons/pi";
import { PiMinusLight } from "react-icons/pi";

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();

    const addQuantity = () => {
        dispatch(incrementCartItemQuantity({ garmentId: cartItem.garmentId }));
    };
    
    const removeQuantity = () => {
        dispatch(decrementCartItemQuantity({ garmentId: cartItem.garmentId }));
    };

    return(
        <div className="flex">
            <div className="itemPhotoInCart">
            <img className="item-image" src={cartItem.garmentImg} alt="item" />
            </div>
            <div className="itemInCart column-left">
                <div className="flex-relative">
                    <p className="itemNameInCart">{ cartItem.garmentName }</p>
                    <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt className="trash-bin"/>
                    </span>
                </div>
                <div className="flex">
                    <button className="addDeleteBtn" onClick={removeQuantity}><PiMinusLight className="minus"/></button>
                    <span className="addedQuantity">{cartItem.quantity}</span>
                    <button className="addDeleteBtn" onClick={addQuantity}><PiPlusLight /></button>
                </div>
                <p className="items-number">{ cartItem.quantity } item(s)</p>
                <p className="itemTotalPrice">${+(cartItem.garmentPrice * cartItem.quantity).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default CartItem;