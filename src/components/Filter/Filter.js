import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/garmentsSlice";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return(
    <div className="flex-center">
        <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? "categoryButton categoryBtnSelected" : "categoryButton categoryBtn"}>{category}</p>
    </div>)
}

export default Filter;