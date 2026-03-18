import './form-input.scss';

export const FormInput = ({callback, value, validationMessage, name, label, validation = null}) => {
    let validationClass = '';

    if (validation) {
        if (validation === 'valid') {
            validationClass = 'valid';
        } else if (validation === 'invalid') {
            validationClass = 'invalid';
        }
    }

    const handleInput = (e) => {
        callback({value: e.target.value, name});
    }

    return (
        <div className={`form-input-wrapper ${validationClass}`}>
            <div className="form-input-label">{label}</div>
            <div className="form-input-error">{validationMessage}</div>
            <input
                className="form-input"
                onInput={handleInput}
                value={value}
                name={name}
                type="text"
            />
        </div>
    )
}
