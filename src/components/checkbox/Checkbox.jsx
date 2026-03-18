import './checkbox.scss';
import React, {useState, useEffect} from 'react';

export const Checkbox = ({isChecked, isManual = false, callback, name, isSmall}) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    const handleClick = () => {
        if (isManual) {
            return;
        }

        setChecked(!checked);
        callback({value: !checked, name: name});
    }

    return (
        <div
            className={`checkbox ${checked ? 'is-checked' : ''} ${isSmall ? 'is-small' : ''}`}
            onClick={handleClick}
        >
        </div>
    )
}
