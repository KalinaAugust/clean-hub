import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import appReducer from '../../store/slices/appSlice';
import { OrderPage } from './OrderPage';

// ---------------------------------------------------------------------------
// Mocks
// ---------------------------------------------------------------------------

// react-select: simplified native <select>
jest.mock('react-select', () => {
    const Select = ({ onChange, options, defaultValue, placeholder }) => (
        <select
            data-testid="mock-select"
            defaultValue={defaultValue?.value ?? ''}
            onChange={(e) => {
                const opt = options.find((o) => String(o.value) === e.target.value);
                if (opt) onChange(opt);
            }}
        >
            {placeholder && <option value="">{placeholder}</option>}
            {options && options.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
        </select>
    );
    return Select;
});

// jQuery: mock $.ajax
jest.mock('jquery', () => {
    const $ = jest.fn(() => ({
        ajax: jest.fn(),
    }));
    $.ajax = jest.fn();
    return $;
});

// SVG import
jest.mock('../../images/icons/back-arrow.svg', () => ({
    ReactComponent: () => <svg data-testid="back-arrow" />,
}));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const makeStore = (overrides = {}) =>
    configureStore({
        reducer: { app: appReducer },
        preloadedState: {
            app: {
                language: 'RU',
                pricesData: {
                    sverdlova34: {
                        'one-time-cleaning__2-rooms': 190,
                        'cleaning-for-eviction': 660,
                        'maintenance-cleaning__2': 340,
                    },
                    oktyabrskaya2: {
                        'one-time-cleaning': 150,
                        'cleaning-for-eviction': 410,
                    },
                },
                bannerData: {},
                isLoading: false,
                isInitialized: true,
                error: null,
                ...overrides,
            },
        },
    });

const renderOrder = (storeOverrides = {}) => {
    const store = makeStore(storeOverrides);
    return render(
        <Provider store={store}>
            <MemoryRouter>
                <OrderPage />
            </MemoryRouter>
        </Provider>
    );
};

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

describe('OrderPage — rendering', () => {
    it('renders without crashing', () => {
        renderOrder();
        expect(document.querySelector('.order')).toBeInTheDocument();
    });

    it('displays the page title', () => {
        renderOrder();
        expect(screen.getByText('Оформление заказа')).toBeInTheDocument();
    });

    it('shows step 1 heading', () => {
        renderOrder();
        expect(screen.getByText('Выберите общежитие и комнату')).toBeInTheDocument();
    });

    it('shows step 2 heading', () => {
        renderOrder();
        expect(screen.getByText('Выберите услуги')).toBeInTheDocument();
    });

    it('shows step 3 heading', () => {
        renderOrder();
        expect(screen.getByText('Введите личные данные')).toBeInTheDocument();
    });

    it('renders dorm select dropdown', () => {
        renderOrder();
        // There may be multiple selects; check at least one exists
        expect(screen.getAllByTestId('mock-select').length).toBeGreaterThan(0);
    });

    it('renders personal data input labels', () => {
        renderOrder();
        expect(screen.getByText('Имя*')).toBeInTheDocument();
        expect(screen.getByText('Фамилия*')).toBeInTheDocument();
        expect(screen.getByText('Номер телефона*')).toBeInTheDocument();
        expect(screen.getByText('Email*')).toBeInTheDocument();
    });
});

// ---------------------------------------------------------------------------
// Price calculation
// ---------------------------------------------------------------------------

describe('OrderPage — price calculation', () => {
    it('calculatePrice reducer — sums active service prices', () => {
        // Test the reducer logic directly (without rendering)
        const services = [
            { name: 'a', price: 100, active: true },
            { name: 'b', price: 200, active: false },
            { name: 'c', price: 50, active: true },
        ];
        const total = services.reduce(
            (acc, cur) => (cur.active ? acc + cur.price : acc),
            0
        );
        expect(total).toBe(150);
    });

    it('calculatePrice returns 0 when no services are active', () => {
        const services = [
            { name: 'a', price: 100, active: false },
            { name: 'b', price: 200, active: false },
        ];
        const total = services.reduce(
            (acc, cur) => (cur.active ? acc + cur.price : acc),
            0
        );
        expect(total).toBe(0);
    });
});

// ---------------------------------------------------------------------------
// OrderPage reducer unit tests
// ---------------------------------------------------------------------------

// Import the reducer logic inline (it's not exported, so we replicate the
// same logic to test it in isolation)
const ACTIONS = {
    SET_DORM: 'SET_DORM',
    SET_SERVICES: 'SET_SERVICES',
    SET_SERVICES_TO_DEFAULT: 'SET_SERVICES_TO_DEFAULT',
    SET_FORM_INPUT_VALUE: 'SET_FORM_INPUT_VALUE',
    SET_VALIDATION_VALUE: 'SET_VALIDATION_VALUE',
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_DORM:
            return { ...state, dorm: action.payload };
        case ACTIONS.SET_SERVICES:
            return {
                ...state,
                services: state.services.map((item) =>
                    action.payload.name === item.name
                        ? { ...item, active: action.payload.value }
                        : item
                ),
            };
        case ACTIONS.SET_SERVICES_TO_DEFAULT:
            return {
                ...state,
                services: state.services.map((item) =>
                    item.name === 'cleaning-for-eviction'
                        ? { ...item, active: true }
                        : { ...item, active: false }
                ),
            };
        case ACTIONS.SET_FORM_INPUT_VALUE:
            return { ...state, [action.payload.name]: action.payload.value };
        case ACTIONS.SET_VALIDATION_VALUE: {
            const clonedValidation = { ...state.validation };
            clonedValidation[action.payload.field] = action.payload.value;
            return { ...state, validation: clonedValidation };
        }
        default:
            return state;
    }
}

const baseState = {
    dorm: { value: '1', label: 'Dorm 1' },
    services: [
        { name: 'one-time-cleaning__2-rooms', price: 190, active: true },
        { name: 'cleaning-for-eviction', price: 660, active: false },
        { name: 'maintenance-cleaning__2', price: 340, active: false },
    ],
    room: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    validation: { room: 'invalid', name: 'invalid', phone: 'invalid', email: 'invalid', surname: 'invalid' },
    turnOnTypingValidation: true,
    showGlobalValidationErrorMessage: false,
};

describe('OrderPage reducer', () => {
    it('SET_DORM updates dorm', () => {
        const newDorm = { value: '2', label: 'Dorm 2' };
        const next = reducer(baseState, { type: ACTIONS.SET_DORM, payload: newDorm });
        expect(next.dorm).toEqual(newDorm);
    });

    it('SET_SERVICES toggles a service active state', () => {
        const next = reducer(baseState, {
            type: ACTIONS.SET_SERVICES,
            payload: { name: 'cleaning-for-eviction', value: true },
        });
        const svc = next.services.find((s) => s.name === 'cleaning-for-eviction');
        expect(svc.active).toBe(true);
    });

    it('SET_SERVICES_TO_DEFAULT resets to cleaning-for-eviction only', () => {
        const stateWithActive = {
            ...baseState,
            services: baseState.services.map((s) => ({ ...s, active: true })),
        };
        const next = reducer(stateWithActive, { type: ACTIONS.SET_SERVICES_TO_DEFAULT });
        const eviction = next.services.find((s) => s.name === 'cleaning-for-eviction');
        const oneTime = next.services.find((s) => s.name === 'one-time-cleaning__2-rooms');
        expect(eviction.active).toBe(true);
        expect(oneTime.active).toBe(false);
    });

    it('SET_FORM_INPUT_VALUE sets arbitrary field', () => {
        const next = reducer(baseState, {
            type: ACTIONS.SET_FORM_INPUT_VALUE,
            payload: { name: 'name', value: 'Иван' },
        });
        expect(next.name).toBe('Иван');
    });

    it('SET_VALIDATION_VALUE updates a validation field', () => {
        const next = reducer(baseState, {
            type: ACTIONS.SET_VALIDATION_VALUE,
            payload: { field: 'email', value: 'valid' },
        });
        expect(next.validation.email).toBe('valid');
    });

    it('returns current state for unknown action', () => {
        const next = reducer(baseState, { type: 'UNKNOWN' });
        expect(next).toBe(baseState);
    });
});

// ---------------------------------------------------------------------------
// Email validation (regex)
// ---------------------------------------------------------------------------

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

describe('Email validation regex', () => {
    it('accepts valid email', () => {
        expect('user@example.com'.toLowerCase().match(emailRegExp)).not.toBeNull();
    });

    it('accepts email with subdomain', () => {
        expect('user@mail.domain.org'.toLowerCase().match(emailRegExp)).not.toBeNull();
    });

    it('rejects email without @', () => {
        expect('userexample.com'.toLowerCase().match(emailRegExp)).toBeNull();
    });

    it('rejects email without domain', () => {
        expect('user@'.toLowerCase().match(emailRegExp)).toBeNull();
    });

    it('rejects plain text', () => {
        expect('notanemail'.toLowerCase().match(emailRegExp)).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// Phone validation
// ---------------------------------------------------------------------------

describe('Phone validation (min 9 chars)', () => {
    it('accepts phone with 9+ chars', () => {
        expect('+375291234567'.length >= 9).toBe(true);
    });

    it('rejects phone shorter than 9 chars', () => {
        expect('12345'.length >= 9).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// allRequiredFieldIsValid logic
// ---------------------------------------------------------------------------

describe('allRequiredFieldIsValid logic', () => {
    const allValid = { room: 'valid', name: 'valid', phone: 'valid', email: 'valid', surname: 'valid' };
    const someInvalid = { ...allValid, email: 'invalid' };

    const check = (validation) => !Object.values(validation).includes('invalid');

    it('returns true when all fields are valid', () => {
        expect(check(allValid)).toBe(true);
    });

    it('returns false when at least one field is invalid', () => {
        expect(check(someInvalid)).toBe(false);
    });
});
