import axios from "axios";
import Swal from 'sweetalert2';

const getAllReviews = (setReview, setLoading) => {
    axios.get(`https://your-fit.onrender.com`)
    .then(({data}) => {
        setReview(data)
        setLoading(false)
    })
}
const addReview = (name, setName, comment, setComment, setReview, setClientModalIsOpen) => {
    if(name.trim() === "" || comment.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Please, fill in both fields!'
        })
        return;
    }

    axios.post(`https://your-fit.onrender.com/saveReviews`, {name, comment})
    .then((data) => {
        setName('');
        setComment('');
        getAllReviews(setReview);
        setClientModalIsOpen(false);
    })
}

export { getAllReviews, addReview };