import './banner.scss';

export const Banner = ({ title, content, type = 'green' }) => {
    const bannerType = type === 'red' ? 'red' : 'green';

    return (
        <div className={`banner banner--${bannerType}`}>
            <div className="wrapper banner__wrapper">
                {title && <h3 className="banner__title">{title}</h3>}
                {content && <p className="banner__content">{content}</p>}
            </div>
        </div>
    );
};
