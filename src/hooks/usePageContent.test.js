import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import appReducer from '../store/slices/appSlice';
import { usePageContent } from './usePageContent';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const makeStore = (overrides = {}) =>
    configureStore({
        reducer: { app: appReducer },
        preloadedState: {
            app: {
                language: 'RU',
                pricesData: {},
                bannerData: {},
                isLoading: false,
                isInitialized: true,
                error: null,
                ...overrides,
            },
        },
    });

const wrapper = (store) =>
    ({ children }) => <Provider store={store}>{children}</Provider>;

// ---------------------------------------------------------------------------
// Russian content
// ---------------------------------------------------------------------------

describe('usePageContent — Russian (RU)', () => {
    it('returns allRU with Russian currency', () => {
        const store = makeStore();
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.allRU.currency).toBe('руб.');
    });

    it('returns orderRU with Russian title', () => {
        const store = makeStore();
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.orderRU.title).toBe('Оформление заказа');
    });

    it('returns priceCalculatorContentRU with Russian placeholder', () => {
        const store = makeStore();
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.priceCalculatorContentRU.placeholder).toBe('Выберите общежитие');
    });

    it('exposes services map in orderRU', () => {
        const store = makeStore();
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.orderRU.services).toBeDefined();
        expect(result.current.orderRU.services['1']).toBeInstanceOf(Array);
    });
});

// ---------------------------------------------------------------------------
// Chinese content
// ---------------------------------------------------------------------------

describe('usePageContent — Chinese (CN)', () => {
    it('returns allCN with Chinese currency string', () => {
        const store = makeStore({ language: 'CN' });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        // allCN is static content — just check it exists
        expect(result.current.allCN).toBeDefined();
    });

    it('returns orderCN with Chinese title', () => {
        const store = makeStore({ language: 'CN' });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.orderCN.title).toBe('正在下单');
    });

    it('returns priceCalculatorContentCN with Chinese placeholder', () => {
        const store = makeStore({ language: 'CN' });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.priceCalculatorContentCN.placeholder).toBe('选择宿舍');
    });
});

// ---------------------------------------------------------------------------
// Price injection from Redux
// ---------------------------------------------------------------------------

describe('usePageContent — price injection', () => {
    const pricesData = {
        sverdlova34: {
            'one-time-cleaning__2-rooms': 199,
            'cleaning-for-eviction': 670,
        },
        oktyabrskaya2: {
            'one-time-cleaning': 155,
        },
    };

    it('injects prices into orderRU services for dorm 1', () => {
        const store = makeStore({ pricesData });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });

        const services1 = result.current.orderRU.services['1'];
        const twoRooms = services1.find((s) => s.name === 'one-time-cleaning__2-rooms');
        expect(twoRooms.price).toBe(199);
    });

    it('injects prices into orderRU services for dorm 2', () => {
        const store = makeStore({ pricesData });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });

        const services2 = result.current.orderRU.services['2'];
        const oneTime = services2.find((s) => s.name === 'one-time-cleaning');
        expect(oneTime.price).toBe(155);
    });

    it('returns undefined price when dorm not in pricesData', () => {
        const store = makeStore({ pricesData: {} });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });

        const services1 = result.current.orderRU.services['1'];
        const twoRooms = services1.find((s) => s.name === 'one-time-cleaning__2-rooms');
        expect(twoRooms.price).toBeUndefined();
    });

    it('exposes raw prices object', () => {
        const store = makeStore({ pricesData });
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });
        expect(result.current.prices).toEqual(pricesData);
    });
});

// ---------------------------------------------------------------------------
// Structural checks
// ---------------------------------------------------------------------------

describe('usePageContent — returned object structure', () => {
    it('returns all expected top-level keys', () => {
        const store = makeStore();
        const { result } = renderHook(() => usePageContent(), { wrapper: wrapper(store) });

        const keys = [
            'allRU', 'allCN',
            'navigationsLinksRU', 'navigationsLinksCN',
            'guideSectionContentRU', 'guideSectionContentCN',
            'whatWeCleanContentRU', 'whatWeCleanContentCN',
            'faqContentRU', 'faqContentCN',
            'footerRU', 'footerCN',
            'thankYouRU', 'thankYouCN',
            'firstSectionContentRU', 'firstSectionContentCN',
            'priceCalculatorContentRU', 'priceCalculatorContentCN',
            'orderRU', 'orderCN',
            'prices',
        ];
        keys.forEach((key) => {
            expect(result.current).toHaveProperty(key);
        });
    });
});
