import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import './mobile-menu.scss'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';
import Social from '../social/Social';
import { ReactComponent as PhoneIcon } from '../../images/icons/phone.svg';
import { navigationsLinksRU, navigationsLinksCN } from '../../content/pageContent';

export const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const language = useSelector((state) => state.app.language);
    let globalContent;

    if (language === 'RU') {
        globalContent = navigationsLinksRU;
    } else if (language === 'CN') {
        globalContent = navigationsLinksCN;
    }

    useEffect(() => {
        if (isOpen) {
            document.querySelector('body').classList.add('menu-open');
        } else {
            document.querySelector('body').classList.remove('menu-open');
        }
    }, [isOpen])

	return (
		<>
            { isOpen &&
                <div className="overlay">
                    <NavLink className="sub-header__link" to="/maintenance-cleaning">{globalContent['maintenance-cleaning']}</NavLink>
                    <NavLink className="sub-header__link" to="/one-time-cleaning">{globalContent['one-time-cleaning']}</NavLink>
                    <NavLink className="sub-header__link" to="/">{globalContent['cleaning-for-eviction']}</NavLink>
                    {/*<NavLink className="sub-header__link" to="/wallpaper">{globalContent['wallpaper']}</NavLink>*/}
                    {/*<NavLink className="sub-header__link" to="/mold-removal">{globalContent['mold-removal']}</NavLink>*/}
                    {/*<NavLink className="sub-header__link" to="/wall-repair">{globalContent['wall-repair']}</NavLink>*/}
                    <div className="overlay-divider"></div>
                    <a href="tel:+375(29)207-77-71" className="overlay__phone-link">
                        <div className="overlay__phone-icon">
                            <PhoneIcon fill='#559EC7' width="16" height="25" />
                        </div>
                        +375(29)207-77-71
                    </a>
                    <div className="overlay-divider"></div>
                    <Social color={'#559EC7'}/>
                </div>
            }

            <Hamburger toggled={isOpen} toggle={setOpen} size={27} rounded />
        </>
	)
}
