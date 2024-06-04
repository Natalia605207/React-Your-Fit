import { AccordionItem } from "./AccordionItem";
import { dataAccordion } from "./dataAccordion";
import './Accordion.css';

export const AccordionTimetable = () => {
    return (<div>
        {dataAccordion.map((item, id) => 
        <AccordionItem key={id}
        title={item.title}
        classes={item.classes}
        />
        )}
    </div>)
}