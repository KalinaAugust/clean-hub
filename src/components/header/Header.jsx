import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import './header.scss';
import Social from '../social/Social';
import { MobileMenu } from '../mobile-menu/MobileMenu';
import { Logo } from '../logo/Logo';
import debounce from 'lodash.debounce'
import { ReactComponent as PhoneIcon } from '../../images/icons/phone.svg';
import { setLanguage } from '../../store/slices/appSlice';
import { navigationsLinksRU, navigationsLinksCN } from '../../content/pageContent';
import { Banner } from '../banner/Banner';

const Header = () => {
    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
    const dispatch = useDispatch();
    const language = useSelector((state) => state.app.language);
    const bannerData = useSelector((state) => state.app.bannerData);
    let globalContent;

    const getWindowSize = () => {
        setWindowInnerWidth(window.innerWidth);
    }

    useEffect(() => {
        const handleWindowResize = debounce(getWindowSize, 100);

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const getSocialColor = () => {
        return windowInnerWidth < 768 ? '#559EC7' : '#FAFAFA';
    };

    const handleChangeLanguage = () => {
        if (language === 'RU') {
            dispatch(setLanguage('CN'));
        } else if (language === 'CN') {
            dispatch(setLanguage('RU'));
        }
    };

    if (language === 'RU') {
        globalContent = navigationsLinksRU;
    } else if (language === 'CN') {
        globalContent = navigationsLinksCN;
    }

    const activeBanner = Array.isArray(bannerData)
        ? bannerData.find((item) => item?.show)
        : bannerData?.show
            ? bannerData
            : null;

    return (
        <>
            {activeBanner && (
                <Banner
                    title={activeBanner.title}
                    content={activeBanner.content}
                    type={activeBanner.type}
                />
            )}
            <header className='header'>
                <div className="wrapper header-wrapper">
                    <Logo/>
                    <div className="header-group">
                        <a href="tel:+375(29)207-77-71" className="phone-link">
                            <div className="phone-icon">
                                <PhoneIcon fill={getSocialColor()}  width="16" height="25" />
                            </div>
                            <span className="phone-number">+375(29)207-77-71</span>
                        </a>
                        <div className="header__language">
                            <div
                                className={`header__language-item ${language}`}
                                onClick={handleChangeLanguage}
                            >
                                { language }
                            </div>
                        </div>
                        <div className="social-block">
                            <Social color={getSocialColor()} />
                        </div>
                        <MobileMenu/>
                    </div>
                </div>
                <div className="wrapper header-wrapper sub-header">
                    <NavLink className="sub-header__link" to="/maintenance-cleaning">{globalContent['maintenance-cleaning']}</NavLink>
                    <NavLink className="sub-header__link" to="/one-time-cleaning">{globalContent['one-time-cleaning']}</NavLink>
                    <NavLink className="sub-header__link" to="/">{globalContent['cleaning-for-eviction']}</NavLink>
                    {/*<NavLink className="sub-header__link" to="/wallpaper">{globalContent['wallpaper']}</NavLink>*/}
                    {/*<NavLink className="sub-header__link" to="/mold-removal">{globalContent['mold-removal']}</NavLink>*/}
                    {/*<NavLink className="sub-header__link" to="/wall-repair">{globalContent['wall-repair']}</NavLink>*/}
                </div>
            </header>
        </>
    );
}

export default Header;
