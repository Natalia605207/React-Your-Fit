import { useState } from "react";
import { SlPlus } from "react-icons/sl";

export const AccordionItem = ({title, classOne, time, classTwo, timeTwo, classThree, timeThree, classFour, timeFour, classFive, timeFive, classSix, timeSix, classSeven, timeSeven, classEight, timeEight}) => {
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
            <div className="flex-between">
            <p className="accordion-content">{classOne}</p>
            <p className="accordion-content">{time}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classTwo}</p>
            <p className="accordion-content">{timeTwo}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classThree}</p>
            <p className="accordion-content">{timeThree}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classFour}</p>
            <p className="accordion-content">{timeFour}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classFive}</p>
            <p className="accordion-content">{timeFive}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classSix}</p>
            <p className="accordion-content">{timeSix}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classSeven}</p>
            <p className="accordion-content">{timeSeven}</p>
            </div>
            <div className="flex-between">
            <p className="accordion-content">{classEight}</p>
            <p className="accordion-content last">{timeEight}</p>
            </div>
        </div>
    </div>)
}