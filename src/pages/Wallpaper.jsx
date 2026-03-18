import React from 'react';
import Header from '../components/header/Header';
import { FirstSection } from '../components/first-section/FirstSection';
import { GuideSection } from '../components/guide-section/GuideSection';
import {Faq} from '../components/faq/Faq';
import {PriceCalculator} from '../components/price-calculator/PriceCalculator';
import {Footer} from '../components/footer/Footer';

const WallRepair = () => {
    return (
        <>
            <Header/>
            <FirstSection page="wallpaper"/>
            <GuideSection page="wallpaper"/>
            <Faq page="wallpaper"/>
            <PriceCalculator page="wallpaper"/>
            <Footer/>
        </>
    );
};

export default WallRepair;
