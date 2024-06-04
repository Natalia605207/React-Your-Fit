export const ClassesDetailsDescription = ({ description, showMore, showTextClick, elem }) => {
    return(
        <div className="row">
        <p className="class-explanation left">
        {showMore ? description : description.substring(0, 300) +"..."}
            <button className="showMoreBtn" onClick = {() => showTextClick(elem)}>{showMore ? "Show less" : "Show more"}</button>
        </p>
        </div>
    )
}