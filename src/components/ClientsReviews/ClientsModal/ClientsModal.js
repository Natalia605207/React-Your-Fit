import "./ClientsModal.css";

const ClientsModal = ( { setClientModalIsOpen, children } ) => {

    const closeModalReviews = (e) =>{
        if (e.target.classList.contains("overlayReviews")){
            setClientModalIsOpen(false)
        }
    }

    return(
        <div className="modalReviews">
            <div className="overlayReviews" onClick={closeModalReviews}>
                {children}
            </div>
        </div>
    )
}
export default ClientsModal;