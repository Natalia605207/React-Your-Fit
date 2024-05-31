import { AccordionItem } from "./AccordionItem";
import { dataAccordion } from "./dataAccordion";
import './Accordion.css';

export const AccordionTimetable = () => {
    return (<div>
        {dataAccordion.map((item, index) => 
        <AccordionItem key={index}
        title={item.title}
        classOne={item.classOne}
        time={item.time}
        classTwo={item.classTwo}
        timeTwo={item.timeTwo}
        classThree={item.classThree}
        timeThree={item.timeThree}
        classFour={item.classFour}
        timeFour={item.timeFour}
        classFive={item.classFive}
        timeFive={item.timeFive}
        classSix={item.classSix}
        timeSix={item.timeSix}
        classSeven={item.classSeven}
        timeSeven={item.timeSeven}
        classEight={item.classEight}
        timeEight={item.timeEight}
        />
        )}
    </div>)
}