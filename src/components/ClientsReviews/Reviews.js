import { useEffect, useState } from 'react';
import { getAllReviews } from './FetchReviews';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LoaderPage from './Loader/LoaderPage';
import ReviewComponent from './ReviewComponent';
import ClientsModal from './ClientsModal/ClientsModal';
import ClientsModalContent from './ClientsModal/ClientsModalContent';
import '../../App.css';


function Reviews () {
    const [myReview, setReview] = useState([]);
    const [clientModalIsOpen, setClientModalIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllReviews(setReview, setLoading);
    }, []);

    return(
        <section className="reviews column bottom-padding">
            <h4 className="section-headings">Clients <span className="outlined">Reviews</span></h4>
            <p className="description">We <span className="pink">appreciate your reviews</span> as we strive to provide you with only hight-quality classes</p>
        { loading ? <LoaderPage /> :
            <>
                <Carousel infiniteLoop={true} showIndicators={false} showThumbs={false}>
                    {myReview.map((review) => <ReviewComponent name={review.name} comment={review.comment} key={review._id} />)}
                </Carousel>
                <button className="cta" onClick={() => setClientModalIsOpen(true)}>Leave a review</button>
                {clientModalIsOpen &&  
                <ClientsModal setClientModalIsOpen={setClientModalIsOpen}>
                    <ClientsModalContent setClientModalIsOpen={setClientModalIsOpen} setReview={setReview} />
                </ClientsModal>
                }
            </>
        }
    </section>
    )
}

export default Reviews;