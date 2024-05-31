import { dataAccordionFaqs } from "./dataAccordionFaqs";
import { AccordionItemFaqs } from "./AccordionItemFaqs";
import './AccordionFaqs.css';

export const AccordionFaqs = () => {
    return (<div>
        {dataAccordionFaqs.map((item, index) => 
        <AccordionItemFaqs key={index}
        title={item.title}
        content={item.content}
        />
        )}
    </div>)
}