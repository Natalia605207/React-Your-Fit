import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import ChangeQuantity from "../components/Cart/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { dataShop } from "../components/dataShop";
import "../App.css";
import Tabs from "../components/Tabs/Tabs";
import TabInfoOne from '../components/Tabs/TabInfoOne';
import TabInfoTwo from '../components/Tabs/TabInfoTwo';
import { TbShoppingBagPlus } from "react-icons/tb";
import { Footer } from '../components/Footer';
import { ScrollToTopBtn } from '../components/ScrollToTopBtn';

export const ShopItemDetails = () => {
    const navigate = useNavigate();
    const { title } = useParams();
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);

    return(
        <div>
        <section className="shopItem-container column">
            {dataShop.filter(item => item.title === title).map((item) => {
                const {id, image, price, name, description, fullDescription, fabric, careInstructions, season, sku } = item;
                return(
                    <div className="column-left black" key={id}>
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
                        <div className="item-tabs column-left">
                            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                            <hr className="hr-tabs" />
                                {activeTab === 0 && <TabInfoOne fullDescription={fullDescription}/>}
                                {activeTab === 1 && <TabInfoTwo fabric={fabric} careInstructions={careInstructions} season={season} sku={sku} />}
                        </div> 
                        <div className="column">
                        <button className="cta low" onClick={() => navigate(-1)}>
                        Go back
                        </button>
                        </div>
                    </div>
            )})}
        </section>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}