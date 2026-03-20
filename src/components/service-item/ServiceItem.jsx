import './service-item.scss';
import {Checkbox} from '../checkbox/Checkbox';
import {Radio} from '../radio/Radio';

const TYPE = {
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
};

export const ServiceItem = ({callback, type, item, currency}) => {
    const handleClick = () => {
        callback({value: !item.active, name: item.name});
    }

    return (
        <div
            className={`service__item ${item.active ? 'is-active' : ''}`}
            onClick={handleClick}
        >
            {type === TYPE.CHECKBOX ? <Checkbox isManual isChecked={item.active}/> : <Radio isManual isChecked={item.active}/>}
            <div className="service__item-title">{item.title} <span className="service__item-price">{item.price} {currency}</span></div>
        </div>
    )
}
