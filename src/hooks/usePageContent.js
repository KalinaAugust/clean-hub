import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectPrices } from '../store/slices/appSlice';
import * as content from '../content/pageContent';

// Хук для получения контента с ценами из Redux
export const usePageContent = () => {
    const prices = useSelector(selectPrices);

    // Создаём commonPrices из Redux prices
    const commonPrices = useMemo(() => prices, [prices]);

    // Генерируем контент с актуальными ценами
    const firstSectionContentRU = useMemo(() => ({
        placeholder: 'Выберите общежитие',
        price: 'Цена',
        'cleaning-for-eviction': {
            title: 'Уборка для выселения <br/> из общежития',
            subTitle: 'Мы сделаем уборку и сдадим блок <br/> администрации вместо тебя',
            options: content.allRU.addressesWithOptions,
            currency: ' руб.',
            prices: {
                '1.2': commonPrices.sverdlova34?.['cleaning-for-eviction'] || 660,
                '1.3': commonPrices.sverdlova34?.['cleaning-for-eviction-2'] || 695,
                '2': commonPrices.oktyabrskaya2?.['cleaning-for-eviction'] || 410,
                '4': commonPrices.churlenisa7?.['cleaning-for-eviction'] || 660,
                '4.1': commonPrices.churlenisa1?.['cleaning-for-eviction'] || 660,
                '4.2': commonPrices.churlenisa3?.['cleaning-for-eviction'] || 660,
                '4.3': commonPrices.churlenisa5?.['cleaning-for-eviction'] || 660,
                '5.1': commonPrices.oktyabrskaya4?.['cleaning-for-eviction'] || 160,
                '5.2': commonPrices.oktyabrskaya4?.['cleaning-for-eviction-2'] || 120,
                '6.1': commonPrices.oktyabrskaya10?.['cleaning-for-eviction'] || 160,
                '6.2': commonPrices.oktyabrskaya4?.['cleaning-for-eviction-2'] || 120,
                '7': commonPrices.oktyabrskaya10a?.['cleaning-for-eviction'] || 410,
                '11': commonPrices.dzerzhinskogo87?.['cleaning-for-eviction'] || 660,
                '12': commonPrices.dzerzhinskogo83_16?.['cleaning-for-eviction'] || 660,
                '15': commonPrices.dzerzhinskogo97?.['cleaning-for-eviction'] || 660,
                '16': commonPrices.vuzovskiy9_1?.['cleaning-for-eviction'] || 410,
                '19': commonPrices.rabkorovskaya15?.['cleaning-for-eviction'] || 410,
                '20': commonPrices.rabkorovskaya13?.['cleaning-for-eviction'] || 410,
                '21': commonPrices.pobediteley107?.['cleaning-for-eviction'] || 410,
                '22': commonPrices.kiselyova61?.['cleaning-for-eviction'] || 410,
            }
        },
        'one-time-cleaning': {
            title: 'Разовая уборка',
            subTitle: 'Подойдет для выселения одного человека <br/> в середине года',
            options: content.allRU.addressesWithOptions,
            currency: ' руб.',
            prices: {
                '1.2': commonPrices.sverdlova34?.['one-time-cleaning__2-rooms'] || 190,
                '1.3': commonPrices.sverdlova34?.['one-time-cleaning__3-rooms'] || 210,
                '2': commonPrices.oktyabrskaya2?.['one-time-cleaning'] || 150,
                '4': commonPrices.churlenisa7?.['one-time-cleaning'] || 190,
                '4.1': commonPrices.churlenisa1?.['one-time-cleaning'] || 190,
                '4.2': commonPrices.churlenisa3?.['one-time-cleaning'] || 190,
                '4.3': commonPrices.churlenisa5?.['one-time-cleaning'] || 190,
                '5.1': commonPrices.oktyabrskaya4?.['one-time-cleaning'] || 50,
                '5.2': commonPrices.oktyabrskaya4?.['one-time-cleaning'] || 50,
                '6.1': commonPrices.oktyabrskaya10?.['one-time-cleaning'] || 50,
                '6.2': commonPrices.oktyabrskaya10?.['one-time-cleaning'] || 50,
                '7': commonPrices.oktyabrskaya10a?.['one-time-cleaning'] || 150,
                '11': commonPrices.dzerzhinskogo87?.['one-time-cleaning'] || 190,
                '12': commonPrices.dzerzhinskogo83_16?.['one-time-cleaning'] || 190,
                '15': commonPrices.dzerzhinskogo97?.['one-time-cleaning'] || 190,
                '16': commonPrices.vuzovskiy9_1?.['one-time-cleaning'] || 150,
                '19': commonPrices.rabkorovskaya15?.['one-time-cleaning'] || 150,
                '20': commonPrices.rabkorovskaya13?.['one-time-cleaning'] || 150,
                '21': commonPrices.pobediteley107?.['one-time-cleaning'] || 150,
                '22': commonPrices.kiselyova61?.['one-time-cleaning'] || 150,
            }
        },
        'maintenance-cleaning': {
            title: 'Поддерживающая уборка <br/> по подписке',
            subTitle: 'Больше не нужно дежурить',
            wrapperClass: 'maintenance-cleaning',
            options: content.allRU.addresses,
            currency: ' руб.',
            prices: {
                '1': commonPrices.sverdlova34?.['maintenance-cleaning__2'] || 340,
                '2': commonPrices.oktyabrskaya2?.['maintenance-cleaning__2'] || 270,
                '4': commonPrices.churlenisa7?.['maintenance-cleaning__2'] || 340,
                '4.1': commonPrices.churlenisa1?.['maintenance-cleaning__2'] || 340,
                '4.2': commonPrices.churlenisa3?.['maintenance-cleaning__2'] || 340,
                '4.3': commonPrices.churlenisa5?.['maintenance-cleaning__2'] || 340,
                '7': commonPrices.oktyabrskaya10a?.['maintenance-cleaning__2'] || 270,
                '11': commonPrices.dzerzhinskogo87?.['maintenance-cleaning__2'] || 340,
                '12': commonPrices.dzerzhinskogo83_16?.['maintenance-cleaning__2'] || 340,
                '15': commonPrices.dzerzhinskogo97?.['maintenance-cleaning__2'] || 340,
                '16': commonPrices.vuzovskiy9_1?.['maintenance-cleaning__2'] || 270,
                '19': commonPrices.rabkorovskaya15?.['maintenance-cleaning__2'] || 270,
                '20': commonPrices.rabkorovskaya13?.['maintenance-cleaning__2'] || 270,
                '21': commonPrices.pobediteley107?.['maintenance-cleaning__2'] || 270,
                '22': commonPrices.kiselyova61?.['maintenance-cleaning__2'] || 270,
            }
        },
    }), [commonPrices]);

    const firstSectionContentCN = useMemo(() => ({
        placeholder: '选择宿舍',
        price: '价格',
        'cleaning-for-eviction': {
            title: '退宿打扫清洁',
            subTitle: '我们会打扫卫生，并替你向宿管交房',
            options: content.allCN.addressesWithOptions,
            currency: ' 卢布.',
            prices: firstSectionContentRU['cleaning-for-eviction'].prices
        },
        'one-time-cleaning': {
            title: '一次性清洁',
            subTitle: '适合年中驱逐一人',
            options: content.allCN.addressesWithOptions,
            currency: ' 卢布.',
            prices: firstSectionContentRU['one-time-cleaning'].prices
        },
        'maintenance-cleaning': {
            title: '维护清洁',
            subTitle: '不再需要保洁',
            wrapperClass: 'maintenance-cleaning',
            options: content.allCN.addresses,
            currency: ' 卢布.',
            prices: firstSectionContentRU['maintenance-cleaning'].prices
        },
    }), [firstSectionContentRU]);

    // PriceCalculator контент (использует цены из firstSection)
    const priceCalculatorContentRU = useMemo(() => ({
        placeholder: 'Выберите общежитие',
        price: 'Цена',
        priceLabel: 'Выберите общежитие и узнайте цену',
        hostelsCount: {count: 9, title: 'общежитий БГУ'},
        workersCount: {count: 20, title: 'профессионалов'},
        clientsCount: {count: 1000, title: 'довольных клиентов'},
        'cleaning-for-eviction': {
            title: 'Сколько <span class="blue">стоит уборка?</span>',
            options: content.allRU.addressesWithOptions,
            currency: ' руб.',
            prices: firstSectionContentRU['cleaning-for-eviction'].prices,
        },
        'one-time-cleaning': {
            title: 'Сколько <span class="blue">стоит уборка?</span>',
            options: content.allRU.addressesWithOptions,
            currency: ' руб.',
            prices: firstSectionContentRU['one-time-cleaning'].prices,
        },
        'maintenance-cleaning': {
            title: 'Сколько <span class="blue">стоит уборка?</span>',
            options: content.allRU.addresses,
            currency: ' руб.',
            prices: firstSectionContentRU['maintenance-cleaning'].prices,
        },
    }), [firstSectionContentRU]);

    const priceCalculatorContentCN = useMemo(() => ({
        placeholder: '选择宿舍',
        price: '价格',
        priceLabel: '选择宿舍并了解价格',
        hostelsCount: {count: 9, title: '白大宿舍'},
        workersCount: {count: 20, title: '专业人士'},
        clientsCount: {count: 1000, title: '满意的顾客'},
        'cleaning-for-eviction': {
            title: '清洁费用是多少',
            options: content.allCN.addressesWithOptions,
            currency: ' 卢布.',
            prices: firstSectionContentRU['cleaning-for-eviction'].prices,
        },
        'one-time-cleaning': {
            title: '多少 <span class="blue">清洁费用?</span>',
            options: content.allCN.addressesWithOptions,
            currency: ' 卢布.',
            prices: firstSectionContentRU['one-time-cleaning'].prices,
        },
        'maintenance-cleaning': {
            title: '清洁费用是多少',
            options: content.allCN.addresses,
            currency: ' 卢布.',
            prices: firstSectionContentRU['maintenance-cleaning'].prices,
        },
    }), [firstSectionContentRU]);

    return {
        // Статичный контент (без цен)
        allRU: content.allRU,
        allCN: content.allCN,
        navigationsLinksRU: content.navigationsLinksRU,
        navigationsLinksCN: content.navigationsLinksCN,
        guideSectionContentRU: content.guideSectionContentRU,
        guideSectionContentCN: content.guideSectionContentCN,
        whatWeCleanContentRU: content.whatWeCleanContentRU,
        whatWeCleanContentCN: content.whatWeCleanContentCN,
        faqContentRU: content.faqContentRU,
        faqContentCN: content.faqContentCN,
        footerRU: content.footerRU,
        footerCN: content.footerCN,
        thankYouRU: content.thankYouRU,
        thankYouCN: content.thankYouCN,

        // Динамический контент с ценами из Redux
        firstSectionContentRU,
        firstSectionContentCN,
        priceCalculatorContentRU,
        priceCalculatorContentCN,

        // Цены для использования в других местах
        prices: commonPrices,
    };
};
