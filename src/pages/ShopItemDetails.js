import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataShop } from "../components/dataShop";
import "../App.css";
import Tabs from "../components/Tabs/Tabs";
import TabInfoOne from '../components/Tabs/TabInfoOne';
import TabInfoTwo from '../components/Tabs/TabInfoTwo';
import { Footer } from '../components/Footer';
import { ScrollToTopBtn } from '../components/ScrollToTopBtn';
import { ShopItemDetailsInfo } from '../components/ShopItemDetailsInfo';

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
                        <ShopItemDetailsInfo image={image} name={name} price={price} description={description} quantity={quantity} setQuantity={setQuantity} dispatch={dispatch} item={item} />
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