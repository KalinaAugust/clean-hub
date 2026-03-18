import React from 'react';
import {ThankYou} from '../components/thank-you/ThankYou';
import Header from '../components/header/Header';
import {Footer} from '../components/footer/Footer';

const ThankYouPage = () => {
    return (
        <>
            <Header/>
            <ThankYou />
            <Footer />
        </>
    );
};

export default ThankYouPage;
