import "react-responsive-carousel/lib/styles/carousel.min.css";
import './guide-section.scss';
import {
    guideSectionContentRU,
    guideSectionContentCN,
} from '../../content/pageContent';
import {useSelector} from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

export const GuideSection = ({ page }) => {
    const language = useSelector((state) => state.app.language);
    let content;

    if (language === 'RU') {
        content = guideSectionContentRU[page];
    } else if (language === 'CN') {
        content = guideSectionContentCN[page];
    }

    return (
		<div className="guide-section">
            <div className="guide-section__wrapper">
                <div className="guide-section__titles">
                    <div className="guide-section__title">{content.title}</div>
                    <div className="guide-section__sub-title">{content.subTitle}</div>
                </div>
                <div className="guide-section__card-wrapper">
                    {content.cards.map((card) => (
                        <div key={card.icon} className="guide-section__card">
                            <div className={`guide-section__card-icon ${card.icon}`}></div>
                            <div className="guide-section__card-title">{card.title}</div>
                            <div className="guide-section__card-text">{card.text}</div>
                        </div>
                    ))}
                </div>
                <div  className="guide-section__carousel" id="guide-section-carousel">
                    <Carousel
                        showArrows
                        showStatus={false}
                        showThumbs={false}
                    >
                        {content.cards.map((card) => (
                            <div key={card.icon} className="guide-section__card">
                                <div className={`guide-section__card-icon ${card.icon}`}></div>
                                <div className="guide-section__card-title">{card.title}</div>
                                <div className="guide-section__card-text">{card.text}</div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
	)
}


