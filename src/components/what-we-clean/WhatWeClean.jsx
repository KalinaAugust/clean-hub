import './what-we-clean.scss';
import {
    whatWeCleanContentRU,
    whatWeCleanContentCN,
    allRU, allCN
} from '../../content/pageContent';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import { Button } from '../button/Button';
import { Remarkable } from 'remarkable';
import { v4 as uuidv4 } from 'uuid';

export const WhatWeClean = ({ page }) => {
    const language = useSelector((state) => state.app.language);
    const [activeTab,setActiveTab] = useState('room');
    const md = new Remarkable('full', { html: true });
    let content;
    let commonContent;

    if (language === 'RU') {
        content = whatWeCleanContentRU[page];
        commonContent = allRU;
    } else if (language === 'CN') {
        content = whatWeCleanContentCN[page];
        commonContent = allCN;
    }

    const renderMarkdownToHTML = (markdown) => {
        const renderedHTML = md.render(markdown);
        return {__html: renderedHTML};
    }

    const title = renderMarkdownToHTML(content.title);

    return (
		<div className="what-we-clean">
            <div className="what-we-clean__title" dangerouslySetInnerHTML={title}></div>
            <div className="what-we-clean__tabs-wrapper">
                <div className="what-we-clean__tabs">
                    {content.tabs.map(tab => {
                        return (
                            <div
                                key={tab.id}
                                className={`what-we-clean__tabs-item ${ tab.id === activeTab ? 'active' : "" }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.text}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="what-we-clean__wrapper">
                <div className="what-we-clean__content">
                    <div className="what-we-clean__content-title">{content.tabsContent[activeTab].title}</div>
                    <div className="what-we-clean__content-list">
                        {content.tabsContent[activeTab].listItems.map(item => {
                            return (<div key={uuidv4()} className="what-we-clean__content-item">– {item}</div>);
                        })}
                    </div>
                    <div className="what-we-clean__price-button">
                        <Button text={commonContent.make_order} routerLinkUrl="/order" />
                    </div>
                </div>
            </div>
        </div>
	)
}
