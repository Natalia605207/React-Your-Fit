import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { FeedbackForm } from "./components/FeedbackForm";
import { Classes } from "./pages/Classes";
import { ClassesDetails } from "./pages/ClassesDetails";
import { Timetable } from "./pages/Timetable";
import { Coaches } from "./pages/Coaches";
import { CoachesDetails } from "./pages/CoachesDetails";
import { Pricing } from "./pages/Pricing";
import { Promos } from "./pages/Promos";
import { Faqs } from "./pages/Faqs";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Shop } from "./pages/Shop";
import { ShopItemDetails } from "./pages/ShopItemDetails";
import Cart from "./components/Cart/Cart";
import ModalPromo from "./components/Modal/ModalPromo";
import ContentPromo from "./components/Modal/ContentPromo";

function App() {
  const [active, setActive] = useState(true);
  const [modalPromoOpen, setModalPromoOpen] = useState(false);

  useEffect(() => {
    const modalTimer = setTimeout(() => setModalPromoOpen(true), 5000);
    return () => clearTimeout(modalTimer)
  }, [])

  return <Router>
    <div>
    {modalPromoOpen && 
    <ModalPromo setModalPromoOpen={setModalPromoOpen}>
      <ContentPromo setModalPromoOpen={setModalPromoOpen} />
    </ModalPromo>
    }
  </div>
    <ScrollToTop />
    <Navbar active={active} setActive={setActive} />
    <div className={active ? "cart": "cart openCart"} >
      <Cart active={active} setActive={setActive} />
    </div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/form" element={<FeedbackForm/>} />
      <Route path="/classes" element={<Classes/>} />
      <Route path="/classes/:title" element={<ClassesDetails/>} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/coaches" element={<Coaches/>} />
      <Route path="/coaches/:title" element={<CoachesDetails/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/promos" element={<Promos/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/shop/:title" element={<ShopItemDetails />} />
      <Route path="/faqs" element={<Faqs/>} />
      <Route path="/contacts" element={<Footer/>} />
      <Route path="/privacy" element={<PrivacyPolicy/>} />
    </Routes>
  </Router>
}

export default App;
