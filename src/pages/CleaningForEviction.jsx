import React from 'react';
import Header from '../components/header/Header';
import { FirstSection } from '../components/first-section/FirstSection';
import { GuideSection } from '../components/guide-section/GuideSection';
import { WhatWeClean } from '../components/what-we-clean/WhatWeClean';
import { Faq } from '../components/faq/Faq';
import { PriceCalculator } from '../components/price-calculator/PriceCalculator';
import { Footer } from '../components/footer/Footer';


export default function CleaningForEviction() {
    return (
        <>
            <Header/>
            <FirstSection page="cleaning-for-eviction"/>
            <GuideSection page="cleaning-for-eviction"/>
            <WhatWeClean page="cleaning-for-eviction"/>
            <Faq page="cleaning-for-eviction"/>
            <PriceCalculator page="cleaning-for-eviction"/>
            <Footer/>
        </>
    );
};

