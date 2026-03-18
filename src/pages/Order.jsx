import React from 'react';
import Header from '../components/header/Header';
import {Footer} from '../components/footer/Footer';
import {OrderPage} from '../components/order-page/OrderPage';

const Order = () => {
    return (
        <>
            <Header/>
            <OrderPage/>
            <Footer/>
        </>
    );
};

export default Order;
