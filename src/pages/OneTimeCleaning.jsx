import React from 'react';
import Header from '../components/header/Header';
import { FirstSection } from '../components/first-section/FirstSection';
import { GuideSection } from '../components/guide-section/GuideSection';
import { WhatWeClean } from '../components/what-we-clean/WhatWeClean';
import {Faq} from '../components/faq/Faq';
import {PriceCalculator} from '../components/price-calculator/PriceCalculator';
import {Footer} from '../components/footer/Footer';

const CleaningForEviction = () => {
    return (
        <>
            <Header/>
            <FirstSection page="one-time-cleaning" />
            {/*<GuideSection page="one-time-cleaning" />*/}
            {/*<WhatWeClean page="one-time-cleaning"/>*/}
            {/*<Faq page="one-time-cleaning"/>*/}
            {/*<PriceCalculator page="one-time-cleaning"/>*/}
            <GuideSection page="maintenance-cleaning" />
            <WhatWeClean page="maintenance-cleaning"/>
            <Faq page="maintenance-cleaning"/>
            <PriceCalculator page="maintenance-cleaning"/>
            <Footer/>
        </>
    );
};

export default CleaningForEviction;
