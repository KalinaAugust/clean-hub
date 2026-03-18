import './button.scss';
import { Link } from "react-router-dom";

export const Button = ({ text, handleClick, routerLinkUrl = null, isRoundedButton, isDisabled = false }) => {
    const onClickHandle = () => {
        if (!isDisabled) {
            handleClick();
        }
    }

    return (routerLinkUrl ?
            <Link className="button" to={routerLinkUrl}>{text}</Link>
            : (
                <div
                    className={`button ${isRoundedButton ? 'is-rounded' : ''} ${isDisabled ? 'is-disabled' : ''}`}
                    onClick={onClickHandle}
                >
                    {text}
                </div>
            )
    )
}
