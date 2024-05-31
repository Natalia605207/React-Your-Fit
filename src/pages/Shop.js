import Items from "../components/ItemsComponent/Items";
import AllCategories from "../components/Filter/AllCategories";
import "../App.css";
import { Footer } from "../components/Footer";
import { ScrollToTopBtn } from "../components/ScrollToTopBtn";

export const Shop = () => {
    return(
        <div>
        <div className="top-photo shopItems-topPhoto">
        <div className="topPhoto-cover column">
        <p className="topPhoto-heading">Visit</p>
        <h2 className="topPhoto-subheading">Our Shop</h2>
        </div>
        </div>
        <section>
            <div className="column">
            <h4 className="black">Best items <span className="outlined border-black">for workouts</span></h4>
            <p className="description black">We offer you only <span className="pink">necessary and high-quality</span> items for your workouts! They will help you to reach the desired results. Enjoy our workouts with items that are designed for sport.</p>
            </div>
            <AllCategories />
            <Items />
        </section>
        <ScrollToTopBtn />
        <Footer />
        </div>
    )
}