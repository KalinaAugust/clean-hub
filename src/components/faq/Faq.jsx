import './faq.scss';
import {useSelector} from 'react-redux';
import { Remarkable } from 'remarkable';
import { faqContentRU, faqContentCN } from '../../content/pageContent';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export const Faq = ({ page }) => {
    const md = new Remarkable('full', { html: true });
    const language = useSelector((state) => state.app.language);
    let content;

    if (language === 'RU') {
        content = faqContentRU[page];
    } else if (language === 'CN') {
        content = faqContentCN[page];
    }

    const renderMarkdownToHTML = (markdown) => {
        const renderedHTML = md.render(markdown);
        return { __html: renderedHTML };
    }

    return (
        <div className="faq">
            <div className="wrapper">
                <div
                    className="faq__title"
                    dangerouslySetInnerHTML={renderMarkdownToHTML(content.title)}
                />
                <div className="faq__accordion-wrapper" id="faq-accordion-wrapper">
                    <Accordion allowMultipleExpanded allowZeroExpanded>
                        {content.accordions.map(item => {
                            return (
                                <AccordionItem key={item.id}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {item.title}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <span
                                            dangerouslySetInnerHTML={renderMarkdownToHTML(item.content)}
                                        />
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
            </div>
        </div>
	)
}
