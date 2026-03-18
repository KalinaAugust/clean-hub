import React from 'react';
import Header from '../components/header/Header';
import { FirstSection } from '../components/first-section/FirstSection';
import { GuideSection } from '../components/guide-section/GuideSection';
import {Faq} from '../components/faq/Faq';
import {PriceCalculator} from '../components/price-calculator/PriceCalculator';
import {Footer} from '../components/footer/Footer';

const Wallpaper = () => {
    return (
        <>
            <Header/>
            <FirstSection page="wall-repair" />
            <GuideSection page="wall-repair"/>
            <Faq page="wall-repair"/>
            <PriceCalculator page="wall-repair"/>
            <Footer/>
        </>
    );
};

export default Wallpaper;
