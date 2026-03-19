import './order-page.scss';
import React, {useEffect, useReducer, useRef} from 'react';
import {useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import Select from 'react-select';
import {Button} from '../button/Button';
import {Checkbox} from '../checkbox/Checkbox';
import {FormInput} from '../form-input/FormInput';
import {ServiceItem} from '../service-item/ServiceItem';
import $ from 'jquery';

import {Card} from '../card/Card'
import {ReactComponent as BackArrow} from '../../images/icons/back-arrow.svg';
import { usePageContent } from '../../hooks/usePageContent';

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ACTIONS = {
    SET_DORM: 'SET_DORM',
    SET_SERVICES: 'SET_SERVICES',
    SET_SERVICES_TO_DEFAULT: 'SET_SERVICES_TO_DEFAULT',
    SET_FORM_INPUT_VALUE: 'SET_FORM_INPUT_VALUE',
    SET_VALIDATION_VALUE: 'SET_VALIDATION_VALUE',
};

const initialState = {
    dorm: null,
    room: '',
    services: [],
    name: '',
    surname: '',
    phone: '',
    email: '',
    message: '',
    socialConnect: true,
    processingPersonalData: true,
    publicOfferAndPrivacy: true,
    validation: {
        room: 'invalid', name: 'invalid', phone: 'invalid', email: 'invalid', surname: 'invalid'
    },
    turnOnTypingValidation: true,
    showGlobalValidationErrorMessage: false,
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_DORM:
            return {
                ...state,
                dorm: action.payload
            };
        case ACTIONS.SET_SERVICES:
            return {
                ...state,
                services: state.services.map(item => {
                    if (action.payload.name === item.name) {
                        return {
                            ...item,
                            active: action.payload.value,
                        };
                    }
                    return item;
                })
            };
        case ACTIONS.SET_SERVICES_TO_DEFAULT:
            return {
                ...state,
                services: state.services.map(item => {
                    if (item.name === 'cleaning-for-eviction') {
                        return {
                            ...item,
                            active: true,
                        };
                    } else {
                        return {
                            ...item,
                            active: false,
                        };
                    }
                })
            };
        case ACTIONS.SET_FORM_INPUT_VALUE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case ACTIONS.SET_VALIDATION_VALUE:
            const clonedValidation = {...state.validation};
            clonedValidation[action.payload.field] = action.payload.value;

            return {
                ...state,
                validation: clonedValidation
            };
        default:
            return state;
    }
}


export const OrderPage = () => {
    const thirdStep = useRef(null);
    const navigate = useNavigate();
    const language = useSelector((state) => state.app.language);
    const pageContent = usePageContent();

    let content;
    let commonContent;
    const orderContentRU = pageContent.orderRU;

    if (language === 'RU') {
        content = pageContent.orderRU;
        commonContent = pageContent.allRU;
    } else if (language === 'CN') {
        content = pageContent.orderCN;
        commonContent = pageContent.allCN;
    }

    const [state, dispatch] = useReducer(reducer, initialState, state => {
        const dorm = content.addresses[0];

        state.dorm = dorm;
        state.services = content.services[dorm.value];

        return state;
    });

    const changeDorm = (value) => {
        if (value.value !== state.dorm.value) {
            dispatch({
                type: ACTIONS.SET_DORM,
                payload: value
            });
            dispatch({
                type: ACTIONS.SET_SERVICES_TO_DEFAULT,
            });
        }
    }

    const checkboxRadioHandler = ({name, value}) => {
        dispatch({
            type: ACTIONS.SET_SERVICES,
            payload: { name, value }
        });
    }

    useEffect(() => {
        let services = content.services;

        formInputHandler({ value: services[state.dorm.value], name: 'services' });
    }, [state.dorm, language]);

    const renderServices = () => {
        let services = state.services;

        return services.map(item => {
            return (
                <ServiceItem
                    type={'checkbox'}
                    item={item}
                    currency={commonContent.currency}
                    callback={checkboxRadioHandler}
                    key={item.name}
                />
            );
        })
    }

    const computedAsideTitle = () => {
        let service = state.services.filter(item => item.active).map(item => item.title).join(', ');

        if (language === 'RU') {
            return `${service} в общежитии ${state.dorm.label} в комнате ${state.room}`;
        } else {
            return `${service} 在宿舍 ${state.dorm.label} 在房间里 ${state.room}`;
        }
    }

    const calculatePrice = () => {
        return state.services.reduce((accumulator, current) => current.active ? accumulator + current.price : accumulator, 0);
    }

    const handleClickAsideButton = () => {
        thirdStep.current.scrollIntoView({behavior: 'smooth'});
    }

    const allRequiredFieldIsValid = () => {
        const { validation } = state;
        let result = true;

        Object.values(validation).forEach(item => {
            if (item === 'invalid') {
                result = false;
            }
        });

        return result;
    }

    const prepareServices = (services) => {
        let result = '';

        services.forEach(item => {
            if (language !== 'RU') {
                const russianServices = orderContentRU.services[state.dorm.value];
                item.title = russianServices.find(el => el.name === item.name).title;
            }

            if (!item.active) {
                return;
            }
            if (result === '') {
                result = item.title;
            } else {
                result = result + ', ' + item.title;
            }
        });

        return result;
    }

    const prepareDorm = (dorm) => {
        const dormsFromContent = orderContentRU.addresses;

        if (language === 'RU') {
            return dorm.label;
        }

        return  dormsFromContent.find(item => item.value === dorm.value).label;
    }

    const getOrderNumber = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        const yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = dd + '-' + mm + '-' + yyyy;
        const hash = Math.floor(Math.random() * 90000) + 10000;

        return today + '-' + hash;
    }

    const handleClickSubmitButton = () => {
        inputsValidator();
        const {
            name, phone, email, message, surname, room, services, socialConnect, dorm
        } = state;

        if (allRequiredFieldIsValid()) {
            formInputHandler({ value: false, name: 'showGlobalValidationErrorMessage' });

            const formData = {
                name,
                surname,
                phone,
                email,
                message,
                room,
                dorm: prepareDorm(dorm),
                orderNumber: getOrderNumber(),
                socialConnect: socialConnect ? 'Да' : 'Нет',
                services: prepareServices(services),
                total: calculatePrice(),
            };

            $.ajax({
                url: "mail.php",
                method: "POST",
                data: formData,
                success: function () {
                    navigate('/thank-you');
                }
            });
        } else {
            formInputHandler({ value: true, name: 'showGlobalValidationErrorMessage' });
        }
    }

    const disableSubmit = () => {
        return !state.processingPersonalData || !state.publicOfferAndPrivacy;
    }

    const dispatchValidationValue = (field, value) => {
        dispatch({
            type: ACTIONS.SET_VALIDATION_VALUE,
            payload: {field, value}
        });
    }

    const formInputHandler = ({value, name}) => {
        dispatch({
            type: ACTIONS.SET_FORM_INPUT_VALUE,
            payload: {value, name}
        });

        if (state.turnOnTypingValidation) {
            validator(name, value);
        }
    }


    const validator = (field, value) => {
        switch (field) {
            case 'room':
            case 'name':
            case 'surname':
                if (value.length < 1) {
                    dispatchValidationValue(field, 'invalid');
                } else {
                    dispatchValidationValue(field, 'valid');
                }
                break;
            case 'phone':
                if (value.length < 9) {
                    dispatchValidationValue(field, 'invalid');
                } else {
                    dispatchValidationValue(field, 'valid');
                }
                break;
            case 'email':
                const isInvalid = value.toLowerCase().match(emailRegExp);

                if (!isInvalid) {
                    dispatchValidationValue(field, 'invalid');
                } else {
                    dispatchValidationValue(field, 'valid');
                }
                break;
            default:
                return null;
        }
    }

    const inputsValidator = () => {
        const fieldsToValidate = Object.keys(state.validation);

        for (let i = 0; i < fieldsToValidate.length; i++) {
            validator(fieldsToValidate[i], state[fieldsToValidate[i]]);
        }
    }

    return (
        <div className="order">
            <div className="wrapper">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <BackArrow/> &nbsp; {commonContent.back}
                </div>
                <div className="order__title">{content.title}</div>
                <div className="order__wrapper">
                    <div className="order__wrapper-right">
                        <Card step={`${content.step} 1`} title={content.step1}>
                            <div className="order__select-wrapper">
                                <Select
                                    defaultValue={state.dorm}
                                    onChange={changeDorm}
                                    placeholder={content.placeholder}
                                    options={content.addresses}
                                    styles={{
                                        control: (baseStyles) => ({
                                            ...baseStyles,
                                            borderRadius: '10px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            height: '50px',
                                            fontSize: '18px',
                                            paddingLeft: '10px',
                                            maxWidth: '400px',
                                            minWidth: '200px',
                                            width: '100%',
                                        }),
                                        option: (baseStyles) => ({
                                            ...baseStyles,
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                            paddingLeft: '20px',
                                        }),
                                    }}
                                />
                            </div>
                            <div className="order__room-input-wrapper">
                                <FormInput
                                    callback={formInputHandler}
                                    name="room"
                                    validationMessage={content.roomValidationMessage}
                                    value={state.room}
                                    label={content.room}
                                    validation={state.validation.room}
                                />
                            </div>
                        </Card>

                        <Card step={`${content.step} 2`} title={content.step2}>
                            {renderServices()}
                        </Card>

                        <Card step={`${content.step} 3`} title={content.step3} refProp={thirdStep}>
                            <div className="order__form-wrapper">
                                <div className="order__form-fileds">
                                    <FormInput
                                        callback={formInputHandler}
                                        name="name"
                                        validationMessage={content.nameValidationMessage}
                                        value={state.name}
                                        label={content.name}
                                        validation={state.validation.name}
                                    />
                                    <FormInput
                                        callback={formInputHandler}
                                        name="phone"
                                        validationMessage={content.phoneValidationMessage}
                                        value={state.phone}
                                        label={content.phone}
                                        validation={state.validation.phone}
                                    />
                                    <FormInput
                                        callback={formInputHandler}
                                        name="email"
                                        validationMessage={content.emailValidationMessage}
                                        value={state.email}
                                        label={content.email}
                                        validation={state.validation.email}
                                    />
                                </div>
                                <div className="order__form-fileds">
                                    <FormInput
                                        callback={formInputHandler}
                                        name="surname"
                                        validationMessage={content.surNameValidationMessage}
                                        value={state.surname}
                                        label={content.surName}
                                        validation={state.validation.surname}
                                    />
                                    <div className="order__form-check-field">
                                        <Checkbox
                                            isSmall
                                            callback={formInputHandler}
                                            isChecked={state.socialConnect}
                                            name="socialConnect"
                                        />
                                        <span className="order__check-field-text">
                                            {content.socialConnect}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <textarea
                                className="order__form-textarea"
                                placeholder={content.textareaPlaceholder}
                                name="message"
                                onInput={(e) => formInputHandler({value: e.target.value, name: 'message'})}
                            >
                            </textarea>
                            <div className="order__submit-button">
                                {state.showGlobalValidationErrorMessage &&
                                    <div className="order__global-error">
                                        {content.errorMessage}
                                    </div>
                                }
                                <Button
                                    text={`${content.buttonText} ${calculatePrice()} ${commonContent.currency}`}
                                    handleClick={handleClickSubmitButton}
                                    isRoundedButton
                                    isDisabled={disableSubmit()}
                                />
                            </div>
                            {language === 'CN' ?
                                <div className="order__check-field">
                                    <Checkbox
                                        isSmall
                                        callback={formInputHandler}
                                        isChecked={state.publicOfferAndPrivacy}
                                        name="publicOfferAndPrivacy"
                                    />
                                    <span className="order__check-field-text">
                                        下订单即表示我同意&nbsp;
                                        <Link
                                            className="text__link"
                                            to="/public-offer"
                                        >
                                            公开发售协议
                                        </Link>
                                        &nbsp;和&nbsp;
                                        <Link className="text__link" to="/privacy-policy">隐私政策</Link>.
                                    </span>
                                </div>
                                :
                                <div className="order__check-field">
                                    <Checkbox
                                        isSmall
                                        callback={formInputHandler}
                                        isChecked={state.publicOfferAndPrivacy}
                                        name="publicOfferAndPrivacy"
                                    />
                                    <span className="order__check-field-text">
                                        Оформляя заказ я согласен с&nbsp;
                                        <Link
                                            className="text__link"
                                            to="/public-offer"
                                        >
                                            договором публичной оферты
                                        </Link>
                                        &nbsp;и&nbsp;
                                        <Link className="text__link" to="/privacy-policy">политикой приватности</Link>.
                                    </span>
                                </div>
                            }

                            <div className="order__check-field">
                                <Checkbox
                                    isSmall
                                    isChecked={state.processingPersonalData}
                                    callback={formInputHandler}
                                    name="processingPersonalData"
                                />
                                <span className="order__check-field-text">{content.processingPersonalData}</span>
                            </div>
                        </Card>
                    </div>
                    <div className="order__wrapper-left">
                        <Card
                            title={computedAsideTitle()}
                            isAside
                        >
                            <Button
                                text={`${content.asideButtonText} ${calculatePrice()} ${commonContent.currency}`}
                                handleClick={handleClickAsideButton}
                                isRoundedButton
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
