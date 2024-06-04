import { dataAccordionFaqs } from "./dataAccordionFaqs";
import { AccordionItemFaqs } from "./AccordionItemFaqs";
import './AccordionFaqs.css';

export const AccordionFaqs = () => {
    return (<div>
        {dataAccordionFaqs.map((item) => 
        <AccordionItemFaqs key={item.id}
        title={item.title}
        content={item.content}
        />
        )}
    </div>)
}