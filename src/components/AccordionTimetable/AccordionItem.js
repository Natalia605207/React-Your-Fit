import { useState } from "react";
import { SlPlus } from "react-icons/sl";
import { DailyClasses } from "./DailyClasses";

export const AccordionItem = ({title, classes}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(<div>
        <div className={isOpen ? 'activeAccordion' : 'default'} onClick={handleIsOpen}>
            <p className="accordion-header">{title}</p>
            <SlPlus className="arrow"/>
        </div>
        <div className={isOpen ? 'content' : 'hidden'} onClick={handleIsOpen}>
        {
        Object.values(classes)
            .map(({ name, time }, index) =>
                <DailyClasses key={index}
                    name={name}
                    time={time}
                />
            )
        }
        </div>
    </div>)
}