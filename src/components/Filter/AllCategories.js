import Filter from "./Filter";

const AllCategories = () => {
    return(
            <div className="classesBtnGroup">
            {['ALL', 'CLOTHES', 'SHOES', 'ACCESSORIES']
            .map( (category, index) => <Filter category={category} key={index}/>
            )}
            </div>
    )
}

export default AllCategories;