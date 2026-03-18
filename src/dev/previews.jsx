import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {FirstSection} from '../components/first-section/FirstSection';
import {OrderPage} from '../components/order-page/OrderPage';

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FirstSection">
                <FirstSection/>
            </ComponentPreview>
            <ComponentPreview path="/OrderPage">
                <OrderPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews
