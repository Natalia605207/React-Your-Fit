import { React, useEffect, useRef } from "react";
import ChangeQuantity from "../components/Cart/ChangeQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, incrementCartItemQuantity, getCartItems } from "../redux/cartSlice";
import { TbShoppingBagPlus } from "react-icons/tb";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ShopItemDetailsInfo = ({ image, name, price, description, quantity, setQuantity, garment }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const garmentInCart = cartItems.some(cartItem => cartItem.garmentId === garment.id);

    const handleClick = () => {
        garmentInCart
        ? dispatch(incrementCartItemQuantity({
            garmentId: garment.id,
            quantity,
            })
          )
        : dispatch(addItemToCart({garment, quantity}))
    }

    const ref = useRef([]);
    ref.current = [];

    useEffect(() => {
        ref.current.forEach((el) => {
            gsap.fromTo(el, { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.7, scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=70",
                    toggleActions: "play none none reverse"
                }
            })
        })
    }, [])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return(
        <div className="detailedItmes-heading">
        <div className="column realtive" ref={addtoRefs}>
            <img className="itemImage-detailed" src={image} alt="item" />
            <div className="new">
                <p className="new-sign">NEW</p>
            </div>
        </div>
        <div className="column-left">
            <p className="detailedItem-name" ref={addtoRefs}>{name}</p>
            <p className="detailedItem-price" ref={addtoRefs}>$ {price}</p>
            <p className="item-description" ref={addtoRefs}>{description}</p>
            <div className="addedItems" ref={addtoRefs}>
                <ChangeQuantity quantity = {quantity} setQuantity={setQuantity}/>
            </div>
            <div>
                <button ref={addtoRefs} className="cta flex-center" onClick={handleClick}><TbShoppingBagPlus className="shoppingBag-icon" /> Add to cart</button>
            </div>
        </div>
    </div>
    )
}