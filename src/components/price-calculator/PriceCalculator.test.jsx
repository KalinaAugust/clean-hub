import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import appReducer from '../../store/slices/appSlice';
import { PriceCalculator } from './PriceCalculator';

// ---------------------------------------------------------------------------
// Mock react-select (JSDOM cannot handle it well)
// ---------------------------------------------------------------------------
jest.mock('react-select', () => {
    const Select = ({ onChange, options, placeholder }) => (
        <select
            data-testid="mock-select"
            onChange={(e) => {
                const opt = options.find((o) => o.value === e.target.value);
                if (opt) onChange(opt);
            }}
        >
            <option value="">{placeholder}</option>
            {options && options.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
            ))}
        </select>
    );
    return Select;
});

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
                    sverdlova34: { 'cleaning-for-eviction': 660 },
                },
                bannerData: {},
                isLoading: false,
                isInitialized: true,
                error: null,
                ...overrides,
            },
        },
    });

const renderCalculator = (page = 'cleaning-for-eviction', storeOverrides = {}) => {
    const store = makeStore(storeOverrides);
    return render(
        <Provider store={store}>
            <MemoryRouter>
                <PriceCalculator page={page} />
            </MemoryRouter>
        </Provider>
    );
};

// ---------------------------------------------------------------------------
// Render tests
// ---------------------------------------------------------------------------

describe('PriceCalculator', () => {
    it('renders without crashing', () => {
        renderCalculator();
        expect(document.querySelector('.price-calculator')).toBeInTheDocument();
    });

    it('renders the select dropdown', () => {
        renderCalculator();
        expect(screen.getByTestId('mock-select')).toBeInTheDocument();
    });

    it('renders "Оформить заказ" button in RU mode', () => {
        renderCalculator();
        expect(screen.getByText('Оформить заказ')).toBeInTheDocument();
    });

    it('shows counts section', () => {
        renderCalculator();
        // hostelsCount, workersCount, clientsCount
        expect(screen.getByText('общежитий БГУ')).toBeInTheDocument();
        expect(screen.getByText('профессионалов')).toBeInTheDocument();
        expect(screen.getByText('довольных клиентов')).toBeInTheDocument();
    });

    it('renders price label in Russian', () => {
        renderCalculator();
        expect(screen.getByText('Выберите общежитие и узнайте цену')).toBeInTheDocument();
    });
});

// ---------------------------------------------------------------------------
// Language switching
// ---------------------------------------------------------------------------

describe('PriceCalculator — language', () => {
    it('renders Chinese price label when CN', () => {
        renderCalculator('cleaning-for-eviction', { language: 'CN' });
        expect(screen.getByText('选择宿舍并了解价格')).toBeInTheDocument();
    });

    it('renders Chinese order button text when CN', () => {
        renderCalculator('cleaning-for-eviction', { language: 'CN' });
        // allCN.make_order
        expect(screen.queryByText('Оформить заказ')).not.toBeInTheDocument();
    });
});
