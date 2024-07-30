import React from "react";

const ReviewComponent = ({name, comment}) => {
    return(
        <div>
            <p className="reviewer-name">{ name }</p>
            <p>{ comment }</p>
        </div>
    )
}
export default ReviewComponent;