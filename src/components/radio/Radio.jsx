import './radio.scss';
import React, {useState, useEffect} from 'react';

export const Radio = ({isChecked, isManual = false, callback, name}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    const handleClick = () => {
        if (isChecked || isManual) {
            return;
        }

        setChecked(!checked);
        callback({value: !checked, name: name});
    }

    return (
        <div
            className={`radio ${checked ? 'is-checked' : ''}`}
            onClick={handleClick}
        >
        </div>
    )
}
