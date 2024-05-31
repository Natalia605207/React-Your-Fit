import React from "react";
import { dataBenefits } from "./dataBenefits";

export const Benefits = () => {
    return(
        <section className="benefits flex-around">
            {dataBenefits.map((benefit) => {
                const { id, icon, headingOne, headingTwo, subheading } = benefit;
                return(
                    <div key={id} className="benefit column">
                        <p className="benefit-icon">{icon}</p>
                        <br />
                        <p className="benefit-heading upper">{headingOne}</p>
                        <p className="benefit-heading">{headingTwo}</p>
                        <p className="benefit-explanation">{subheading}</p>
                    </div>
                )
            })}
        </section>
    )
}