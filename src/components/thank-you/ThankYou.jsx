import './thank-you.scss';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import {useSelector} from 'react-redux';
import {thankYouRU, thankYouCN} from '../../content/pageContent';
import {Button} from '../button/Button';

export const ThankYou = () => {
    const navigate = useNavigate();
    const language = useSelector((state) => state.app.language);

    let content;

    if (language === 'RU') {
        content = thankYouRU;
    } else if (language === 'CN') {
        content = thankYouCN;
    }

    return (
        <>
            <div className="thank-you">
                <div className="wrapper">
                    <div className="thank-you__title">{content.thankYou}</div>
                    <div className="thank-you__text">{content.text}</div>
                    <div className="thank-you__button-wrapper">
                        <Button
                            text={content.button}
                            handleClick={() => navigate('/')}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
