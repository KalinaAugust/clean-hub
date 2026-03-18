import './card.scss';
import React from 'react';

export const Card = ({ step, title, isAside = false, children, refProp }) => {
    return (
        <div className={`card ${isAside ? 'is-aside' : ''}`} ref={refProp}>
            <div className="card__header">
                {step && <div className="card__step">{step}</div>}
                <div className="card__title">{title}</div>
            </div>
            {children}
        </div>
    )
}
