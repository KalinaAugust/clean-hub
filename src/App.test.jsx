import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import appReducer from './store/slices/appSlice';
import App from './App';

// ---------------------------------------------------------------------------
// Mock all page components so tests stay fast and isolated
// ---------------------------------------------------------------------------

jest.mock('./pages/CleaningForEviction', () => () => <div>CleaningForEviction</div>);
jest.mock('./pages/MaintenanceCleaning', () => () => <div>MaintenanceCleaning</div>);
jest.mock('./pages/OneTimeCleaning', () => () => <div>OneTimeCleaning</div>);
jest.mock('./pages/Wallpaper', () => () => <div>Wallpaper</div>);
jest.mock('./pages/MoldRemoval', () => () => <div>MoldRemoval</div>);
jest.mock('./pages/WallRepair', () => () => <div>WallRepair</div>);
jest.mock('./pages/Order', () => () => <div>Order</div>);
jest.mock('./pages/PrivacyPolicy', () => () => <div>PrivacyPolicy</div>);
jest.mock('./pages/PublicOffer', () => () => <div>PublicOffer</div>);
jest.mock('./pages/ThankYouPage', () => () => <div>ThankYouPage</div>);
jest.mock('./components/scrollToTop/ScrollToTop', () => () => null);
jest.mock('./components/loader/Loader', () => () => <div data-testid="loader">Loading...</div>);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const makeStore = (isInitialized = false) =>
    configureStore({
        reducer: { app: appReducer },
        preloadedState: {
            app: {
                language: 'RU',
                pricesData: {},
                bannerData: {},
                isLoading: !isInitialized,
                isInitialized,
                error: null,
            },
        },
    });

const renderApp = (initialPath = '/', initialized = true) => {
    const store = makeStore(initialized);
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialPath]}>
                <App />
            </MemoryRouter>
        </Provider>
    );
};

// ---------------------------------------------------------------------------
// Loader state
// ---------------------------------------------------------------------------

describe('App — loading state', () => {
    it('shows Loader when not initialized', () => {
        renderApp('/', false);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('does not show Loader when initialized', () => {
        renderApp('/');
        expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
});

// ---------------------------------------------------------------------------
// Routing
// ---------------------------------------------------------------------------

describe('App — routing', () => {
    it('renders CleaningForEviction at /', () => {
        renderApp('/');
        expect(screen.getByText('CleaningForEviction')).toBeInTheDocument();
    });

    it('renders MaintenanceCleaning at /maintenance-cleaning', () => {
        renderApp('/maintenance-cleaning');
        expect(screen.getByText('MaintenanceCleaning')).toBeInTheDocument();
    });

    it('renders OneTimeCleaning at /one-time-cleaning', () => {
        renderApp('/one-time-cleaning');
        expect(screen.getByText('OneTimeCleaning')).toBeInTheDocument();
    });

    it('renders Wallpaper at /wallpaper', () => {
        renderApp('/wallpaper');
        expect(screen.getByText('Wallpaper')).toBeInTheDocument();
    });

    it('renders MoldRemoval at /mold-removal', () => {
        renderApp('/mold-removal');
        expect(screen.getByText('MoldRemoval')).toBeInTheDocument();
    });

    it('renders WallRepair at /wall-repair', () => {
        renderApp('/wall-repair');
        expect(screen.getByText('WallRepair')).toBeInTheDocument();
    });

    it('renders Order at /order', () => {
        renderApp('/order');
        expect(screen.getByText('Order')).toBeInTheDocument();
    });

    it('renders PrivacyPolicy at /privacy-policy', () => {
        renderApp('/privacy-policy');
        expect(screen.getByText('PrivacyPolicy')).toBeInTheDocument();
    });

    it('renders PublicOffer at /public-offer', () => {
        renderApp('/public-offer');
        expect(screen.getByText('PublicOffer')).toBeInTheDocument();
    });

    it('renders ThankYouPage at /thank-you', () => {
        renderApp('/thank-you');
        expect(screen.getByText('ThankYouPage')).toBeInTheDocument();
    });
});
