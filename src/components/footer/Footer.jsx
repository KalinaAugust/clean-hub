import {NavLink} from "react-router-dom";
import {useSelector} from 'react-redux';
import './footer.scss';
import Social from '../social/Social';
import {Logo} from '../logo/Logo';
import {ReactComponent as PhoneIcon} from '../../images/icons/phone.svg';
import {ReactComponent as EmailIcon} from '../../images/icons/email.svg';
import { navigationsLinksRU, navigationsLinksCN, footerRU, footerCN } from '../../content/pageContent';
import {Remarkable} from 'remarkable';


export const Footer = () => {
    const language = useSelector((state) => state.app.language);
    const md = new Remarkable('full', { html: true });
    let globalContent;
    let footerContent;

    if (language === 'RU') {
        globalContent = navigationsLinksRU;
        footerContent = footerRU;
    } else if (language === 'CN') {
        globalContent = navigationsLinksCN;
        footerContent = footerCN;
    }

    const renderMarkdownToHTML = (markdown) => {
        const renderedHTML = md.render(markdown);
        return {__html: renderedHTML};
    }

    const socialText = renderMarkdownToHTML(footerContent.social_text);
    const jobWage = renderMarkdownToHTML(footerContent.job_wage);

    return (
        <div className="footer">
            <div className="wrapper footer-wrapper">
                <div className="footer__row">
                    <div className="footer__column first-column">
                        <Logo colorScheme="is-footer"/>
                        <div className="footer__job">
                            <div className="footer__job-text">
                                {footerContent.job} <br/>
                                <div className="footer__job-logo">CleanHub</div>
                                <div dangerouslySetInnerHTML={jobWage}></div>
                                <div className="footer__job-currency">
                                    {footerContent.job_currency}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__column middle-column">
                        <div className="show-on-small-screen">
                            <Logo colorScheme="is-footer"/>
                        </div>
                        <div className="footer__links">
                            <NavLink className="footer__link" to="/maintenance-cleaning">{globalContent['maintenance-cleaning']}</NavLink>
                            <NavLink className="footer__link" to="/one-time-cleaning">{globalContent['one-time-cleaning']}</NavLink>
                            <NavLink className="footer__link" to="/">{globalContent['cleaning-for-eviction']}</NavLink>
                            {/*<NavLink className="footer__link" to="/wallpaper">{globalContent['wallpaper']}</NavLink>*/}
                            {/*<NavLink className="footer__link" to="/mold-removal">{globalContent['mold-removal']}</NavLink>*/}
                            {/*<NavLink className="footer__link" to="/wall-repair">{globalContent['wall-repair']}</NavLink>*/}
                        </div>

                        <div className="footer__data">
                            {footerContent.data}
                        </div>
                        <div className="footer__cards">
                            <div className="footer__card visa"></div>
                            <div className="footer__card ver-visa"></div>
                            <div className="footer__card master"></div>
                            <div className="footer__card master-card"></div>
                            <div className="footer__card union"></div>
                            <div className="footer__card belcard"></div>
                            <div className="footer__card mir"></div>
                        </div>
                    </div>

                    <div className="footer__column last-column">
                        <div className="footer__social">
                            <a href="tel:+375(29)207-77-71" className="footer__phone-link">
                                <div className="footer__phone-icon">
                                    <PhoneIcon fill="#559EC7" width="14" height="24"/>
                                </div>
                                <span className="footer__phone-number">+375(29)207-77-71</span>
                            </a>
                            <a href="mailto:bsuclean@gmail.com" className="footer__phone-link">
                                <div className="footer__phone-icon">
                                    <EmailIcon fill="#559EC7" width="24" height="18"/>
                                </div>
                                <span className="footer__phone-number">bsuclean@gmail.com</span>
                            </a>
                            <Social color="#559EC7"/>
                            <div className="footer__social-arrow"></div>
                        </div>
                        <div className="footer__social-text" dangerouslySetInnerHTML={socialText}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
