import './Modal.css';

const ModalPromo = ( {setModalPromoOpen, children} ) => {
    const closeModalPromo = e => {
        if (e.target.classList.contains('overlayPromo')) {
            setModalPromoOpen(false)
        }
    }

    return (
        <div className="modalPromo">
            <div className="overlayPromo" onClick={closeModalPromo}>
                { children }
            </div>
        </div>
    )
}

export default ModalPromo;