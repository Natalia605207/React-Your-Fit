import { dataPromos } from "./dataPromos";

export const PromosInfo = () => {
    return(
        <div className="flex-around wrap gap">
            {dataPromos.map((element => {
                const {id, image, name, description} = element;
                return(
                    <div key={id} className="promo-card">
                        <img className="promo-image" src={image} alt="promo" />
                        <p className="class-name uppercase">{name}</p>
                        <p className="promo-about">{description}</p>
                    </div>
                )
            }))}
        </div>
    )
}