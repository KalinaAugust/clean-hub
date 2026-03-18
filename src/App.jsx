import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CleaningForEviction from './pages/CleaningForEviction';
import MaintenanceCleaning from './pages/MaintenanceCleaning';
import OneTimeCleaning from './pages/OneTimeCleaning';
import Wallpaper from './pages/Wallpaper';
import MoldRemoval from './pages/MoldRemoval';
import ThankYouPage from './pages/ThankYouPage';
import WallRepair from './pages/WallRepair';
import Order from './pages/Order';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PublicOffer from './pages/PublicOffer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route>
                    <Route index element={<CleaningForEviction />} />
                    <Route path={'/maintenance-cleaning'} element={<MaintenanceCleaning />} />
                    <Route path={'/one-time-cleaning'} element={<OneTimeCleaning />} />
                    <Route path={'/wallpaper'} element={<Wallpaper />} />
                    <Route path={'/mold-removal'} element={<MoldRemoval />} />
                    <Route path={'/wall-repair'} element={<WallRepair />} />
                    <Route path={'/order'} element={<Order />} />
                    <Route path={'/privacy-policy'} element={<PrivacyPolicy />} />
                    <Route path={'/public-offer'} element={<PublicOffer />} />
                    <Route path={'/thank-you'} element={<ThankYouPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
