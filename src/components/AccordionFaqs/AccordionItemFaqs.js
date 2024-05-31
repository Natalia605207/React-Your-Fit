import { useState } from "react";
import { SlPlus } from "react-icons/sl";

export const AccordionItemFaqs = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(<div>
        <div className={isOpen ? 'activeAccordionFaqs' : 'defaultFaqs'} onClick={handleIsOpen}>
            <p className="accordion-header">{title}</p>
            <SlPlus className="arrow"/>
        </div>
        <div className={isOpen ? 'contentFaqs' : 'hidden'} onClick={handleIsOpen}>
            <p className="accordion-content">{content}</p>
        </div>
    </div>)
}