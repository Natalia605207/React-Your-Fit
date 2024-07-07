import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { VscClose } from "react-icons/vsc";
import Stripe from "../../Stripe/StripeContainer";

const Cart = ({active, setActive}) => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    const toggleCart = () => {
        setActive(!active);
    };

    return(
        <div className="start-column">
            <div className="cart-topLine flex-relative">
            <p className="cart-top">Shopping Cart</p>
            <VscClose className="closeCart-icon" onClick={toggleCart} />
            </div>
            <div className="all-cartItems">
            {cartItems.map(cartItem => <CartItem cartItem = {cartItem} key={cartItem.id} />)}
            </div>
            <div className="cart-topLine flex-relative">
            <p className="total-price">Total: ${ totalPrice }</p>
            </div>
            <Stripe />
        </div>
    )
}

export default Cart;