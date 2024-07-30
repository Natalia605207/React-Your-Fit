import "./ClientsModal.css";
import { useState } from 'react';
import { addReview } from '../FetchReviews';
import { VscClose } from "react-icons/vsc";

const ClientsModalContent = ({ setClientModalIsOpen, setReview }) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div className="modal_contentReviews">
            <VscClose className="close-btn" onClick={ () => setClientModalIsOpen(false)} />
            <div className="modal_content-review">
            <p className="review-heading">Leave a review</p>
            <input 
                    className="reviewInput"
                    type="text" 
                    placeholder="Your full name"
                    value={ name }
                    onChange = {(e) => setName(e.target.value)}/>
                <textarea 
                    className="reviewInput reviewTextarea"
                    type="text" 
                    placeholder="Add a review"
                    value={ comment }
                    onChange = {(e) => setComment(e.target.value)}>
                </textarea>

                <button className="cta" onClick={() => 
                    addReview(name, setName, comment, setComment, setReview, setClientModalIsOpen)}>
                        Submit review
                </button> 
                </div>
        </div>
    )
}
export default ClientsModalContent; 