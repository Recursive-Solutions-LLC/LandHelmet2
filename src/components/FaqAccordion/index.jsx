import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,

    AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function FaqAccordion({ question, answer ,isExpanded }) {
    return (
        <>
            <Accordion allowZeroExpanded  allowMultipleExpanded={true} >
                <AccordionItem dangerouslySetExpanded={isExpanded}>
                    <AccordionItemHeading>
                        <AccordionItemButton>{question}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{answer}</AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}

export default FaqAccordion;
