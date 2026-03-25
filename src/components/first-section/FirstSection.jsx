import './first-section.scss';
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import { Remarkable } from 'remarkable';
import Select from 'react-select';
import { Button } from '../button/Button'
import { usePageContent } from '../../hooks/usePageContent';


export const FirstSection = ({ page }) => {
    const md = new Remarkable('full', { html: true });
    const [selectedOption, setSelectedOption] = useState(null);
    const [price, setPrice] = useState('');
    const language = useSelector((state) => state.app.language);
    const pageContent = usePageContent();

    let content;
    let globalContent;
    let commonContent;

    if (language === 'RU') {
        content = pageContent.firstSectionContentRU[page];
        globalContent = pageContent.firstSectionContentRU;
        commonContent = pageContent.allRU;
    } else if (language === 'CN') {
        content = pageContent.firstSectionContentCN[page];
        globalContent = pageContent.firstSectionContentCN;
        commonContent = pageContent.allCN;
    }

    useEffect(() => {
        setPrice(content.prices[selectedOption?.value]);
    }, [selectedOption, content])

    const renderMarkdownToHTML = (markdown) => {
        const renderedHTML = md.render(markdown);
        return {__html: renderedHTML};
    }

    const title = renderMarkdownToHTML(content.title);
    const subTitle = renderMarkdownToHTML(content.subTitle);

    return (
		<div className="first-section">
            <div className={`wrapper first-section__wrapper ${page}`}>
                <div className="first-section__title" dangerouslySetInnerHTML={title}></div>
                <div className="first-section__sub-title" dangerouslySetInnerHTML={subTitle}></div>
                <div className="first-section__price">
                    <div className="first-section__price-wrapper">
                        <div className="first-section__price-select">
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                placeholder={globalContent.placeholder}
                                options={content.options}
                                menuPortalTarget={document.body}
                                menuPosition="fixed"
                                styles={{
                                    menuPortal: (baseStyles) => ({
                                        ...baseStyles,
                                        zIndex: 9999,
                                    }),
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        borderRadius: '10px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        height: '50px',
                                        fontSize: '18px',
                                        paddingLeft: '10px',
                                        maxWidth: '360px',
                                        minWidth: '200px',
                                        width: '100%',
                                    }),
                                    option: (baseStyles) => ({
                                        ...baseStyles,
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        paddingLeft: '20px',
                                    }),
                                }}
                            />
                        </div>
                        <div className="first-section__price-calculated">{globalContent.price}:
                            {price && <span className="first-section__price-number">{price + content.currency}</span>}
                        </div>
                    </div>
                    <div className="first-section__price-button">
                        <Button text={commonContent.make_order} routerLinkUrl="/order" />
                    </div>
                </div>
            </div>
        </div>
	)
}
