import './price-calculator.scss';
import { Remarkable } from 'remarkable';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { usePageContent } from '../../hooks/usePageContent';
import Select from 'react-select';
import { Button } from '../button/Button';

export const PriceCalculator = ({ page }) => {
    const md = new Remarkable('full', { html: true });
    const [selectedOption, setSelectedOption] = useState(null);
    const [price, setPrice] = useState('');
    const language = useSelector((state) => state.app.language);
    const pageContent = usePageContent();

    let content;
    let globalContent;
    let commonContent;

    if (language === 'RU') {
        content = pageContent.priceCalculatorContentRU[page];
        globalContent = pageContent.priceCalculatorContentRU;
        commonContent = pageContent.allRU;
    } else if (language === 'CN') {
        content = pageContent.priceCalculatorContentCN[page];
        globalContent = pageContent.priceCalculatorContentCN;
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

	return (
        <div className="price-calculator">
            <div className="wrapper">
                <div className="price-calculator__title" dangerouslySetInnerHTML={title}></div>
                <div className="price-calculator__container">
                    <div className="price-calculator__left">
                        <div className="price-calculator__img-1"></div>
                        <div className="price-calculator__img-2"></div>
                        <div className="price-calculator__img-3"></div>
                    </div>
                    <div className="price-calculator__right">
                        <div className="price-calculator__price">
                        <div className="price-calculator__price-wrapper">
                            <div className="price-calculator__price-label">{globalContent.priceLabel}</div>
                            <div className="price-calculator__price-select">
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    placeholder={globalContent.placeholder}
                                    options={content.options}
                                    styles={{
                                        container: (baseStyles) => ({
                                            ...baseStyles,
                                            minWidth: '100%',
                                            width: '100%',
                                        }),
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            borderRadius: '10px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            height: '50px',
                                            fontSize: '18px',
                                            paddingLeft: '10px',
                                            minWidth: '100%',
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
                            <div className="price-calculator__price-calculated">{globalContent.price}:
                                {price && <span className="price-calculator__price-number">{price + content.currency}</span>}
                            </div>
                        </div>
                        <div className="price-calculator__price-button">
                            <Button text={commonContent.make_order} routerLinkUrl="/order"/>
                        </div>
                    </div>
                        <div className="price-calculator__counts">
                            <div className="price-calculator__counts-item">
                                <div className="price-calculator__counts-item-number">
                                    {globalContent.hostelsCount.count}
                                </div>
                                <div className="price-calculator__counts-item-title">
                                    {globalContent.hostelsCount.title}
                                </div>
                            </div>
                            <div className="price-calculator__counts-item">
                                <div className="price-calculator__counts-item-number">
                                    {globalContent.workersCount.count}+
                                </div>
                                <div className="price-calculator__counts-item-title">
                                    {globalContent.workersCount.title}
                                </div>
                            </div>
                            <div className="price-calculator__counts-item">
                                <div className="price-calculator__counts-item-number">
                                    {globalContent.clientsCount.count}+
                                </div>
                                <div className="price-calculator__counts-item-title">
                                    {globalContent.clientsCount.title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
