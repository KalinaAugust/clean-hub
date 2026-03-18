import React from 'react';
import Header from '../components/header/Header';
import { FirstSection } from '../components/first-section/FirstSection';
import { GuideSection } from '../components/guide-section/GuideSection';
import {Faq} from '../components/faq/Faq';
import {PriceCalculator} from '../components/price-calculator/PriceCalculator';
import {Footer} from '../components/footer/Footer';

const MoldRemoval = () => {
    return (
        <>
            <Header/>
            <FirstSection page="mold-removal" />
            <GuideSection page="mold-removal" />
            <Faq page="mold-removal"/>
            <PriceCalculator page="mold-removal"/>
            <Footer/>
        </>
    );
};

export default MoldRemoval;
