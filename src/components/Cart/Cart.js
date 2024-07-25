import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, clearCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { VscClose } from "react-icons/vsc";
import Stripe from "../../Stripe/StripeContainer";

const Cart = ({active, setActive}) => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();

    const toggleCart = () => {
        setActive(!active);
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="start-column">
            <div className="cart-topLine flex-relative">
            <p className="cart-top">Shopping Cart</p>
            <VscClose className="closeCart-icon" onClick={toggleCart} />
            </div>
            {cartItems.length === 0 ? (
                <div className="start-column">
                    <p className="empty-cart">Your cart is empty</p>
                </div>
            ) : (
            <div>
            <div className="all-cartItems">
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} key={cartItem.id} />)}
            </div>
            <div className="cart-topLine start-column">
            <p className="total-price">Total: ${ totalPrice }</p>
            <p onClick={handleClearCart} className="clear-cart">Clear cart</p>
            </div>
            </div>
            )}
            <Stripe />
        </div>
    )
}

export default Cart;