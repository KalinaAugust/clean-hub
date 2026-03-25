import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectPrices } from '../store/slices/appSlice';
import * as content from '../content/pageContent';

const getOrderRU = (reduxPrices) => ({
    title: 'Оформление заказа',
    placeholder: 'Выберите общежитие',
    errorMessage: 'Пожалуйста, заполните обязательные поля.',
    addresses: content.allRU.addresses,
    services: {
        // '1' '№1 БГУ, ул. Свердлова, 34'
        '1': [
            {
                title: 'Разовая уборка (2 комнаты)',
                price: reduxPrices.sverdlova34?.['one-time-cleaning__2-rooms'],
                name: 'one-time-cleaning__2-rooms',
                active: true,
            },
            {
                title: 'Разовая уборка (3 комнаты)',
                price: reduxPrices.sverdlova34?.['one-time-cleaning__3-rooms'],
                name: 'one-time-cleaning__3-rooms',
                active: false,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.sverdlova34?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.sverdlova34?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.sverdlova34?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения (2 комнатная)',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (3 комнатная)',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '2' '№2 БГУ, ул. Октябрьская, 2'
        '2': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.oktyabrskaya2?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.oktyabrskaya2?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.oktyabrskaya2?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.oktyabrskaya2?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '4', '№4 БГУ, ул. Чюрлениса, 7'
        '4': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.churlenisa7?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa7?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.churlenisa7?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.churlenisa7?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.churlenisa7?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.churlenisa7?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.1', '№9 БГЭУ, ул. Чюрлениса, 1'
        '4.1': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.churlenisa1?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa1?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.churlenisa1?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.churlenisa1?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.churlenisa1?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.churlenisa1?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.2', '№1 МГЛУ, ул. Чюрлениса, 3'
        '4.2': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.churlenisa3?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa3?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.churlenisa3?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.churlenisa3?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.churlenisa3?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.churlenisa3?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.3', '№4 БГУ, ул. Чюрлениса, 5'
        '4.3': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.churlenisa5?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa5?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.churlenisa5?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.churlenisa5?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.churlenisa5?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.churlenisa5?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '5', '№5 БГУ, ул. Октябрьская, 4'
        '5': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.oktyabrskaya4?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Уборка для выселения (с холодильником)',
                price: reduxPrices.oktyabrskaya4?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (без холодильника)',
                price: reduxPrices.oktyabrskaya4?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '6', '№6 БГУ, ул. Октябрьская, 10'
        '6': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.oktyabrskaya10?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Уборка для выселения (с холодильником)',
                price: reduxPrices.oktyabrskaya10?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (без холодильника)',
                price: reduxPrices.oktyabrskaya10?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '7', '№7 БГУ, ул. Октябрьская, 10/a'
        '7': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.oktyabrskaya10a?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.oktyabrskaya10a?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.oktyabrskaya10a?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.oktyabrskaya10a?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '11', '№11 БГУ, ул. пр-т Дзержинского, 87'
        '11': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo87?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo87?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo87?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo87?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo87?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.dzerzhinskogo87?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '12', '№18 БНТУ, пр-т Дзержинского, 83/16'
        '12': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo83_16?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo83_16?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo83_16?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo83_16?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo83_16?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.dzerzhinskogo83_16?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '15', '№4 МГЛУ, пр-т Дзержинского, 97'
        '15': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo97?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo97?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo97?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo97?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo97?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.dzerzhinskogo97?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '16', '№ 5 БГПУ, пер.Вузовский, 9/1'
        '16': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.vuzovskiy9_1?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.vuzovskiy9_1?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.vuzovskiy9_1?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.vuzovskiy9_1?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 19,  № 1 БГКИ - ул. Рабкоровская, 15
        '19': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.rabkorovskaya15?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.rabkorovskaya15?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.rabkorovskaya15?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.rabkorovskaya15?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 20,  № 2 БГУКИ - ул. Рабкоровская, 13
        '20': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.rabkorovskaya13?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.rabkorovskaya13?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.rabkorovskaya13?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.rabkorovskaya13?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 21,  № 1 БГУФК - пр. Победителей, 107
        '21': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.pobediteley107?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.pobediteley107?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.pobediteley107?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.pobediteley107?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 22,  № 1 БГАМ - ул. Киселёва, 61
        '22': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.kiselyova61?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.kiselyova61?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.kiselyova61?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.kiselyova61?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 23, № 10 БГМУ - пр-т Дзержинского, 93
        '23': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo_93?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo_93?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_93?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_93?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo_93?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: reduxPrices.dzerzhinskogo_93?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // 24, № 5 БГМУ - пр-т Дзержинского, 83/6
        '24': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo_83_6?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_6?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_6?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo_83_6?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 25, № 6 БГМУ - пр-т Дзержинского, 83/7
        '25': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo_83_7?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_7?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_7?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo_83_7?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 26, № 7 БГМУ - пр-т Дзержинского, 83/8
        '26': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.dzerzhinskogo_83_8?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_8?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.dzerzhinskogo_83_8?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.dzerzhinskogo_83_8?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 27, № 4 БГТУ - ул. Белорусская, 19
        '27': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.belorusskaya_19?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.belorusskaya_19?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.belorusskaya_19?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.belorusskaya_19?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 28, № 21 БГТУ - ул. Белорусская, 21
        '28': [
            {
                title: 'Разовая уборка (всего блока)',
                price: reduxPrices.belorusskaya_21?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: reduxPrices.belorusskaya_21?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: reduxPrices.belorusskaya_21?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: reduxPrices.belorusskaya_21?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
    },
    processingPersonalData: 'Даю согласие на обработку моих персональных данных в маркетинговых целях.',
    step: 'ШАГ',
    step1: 'Выберите общежитие и комнату',
    step2: 'Выберите услуги',
    step3: 'Введите личные данные',
    asideButtonText: 'Заказать на сумму',
    buttonText: 'Оформить заказ на сумму',
    room: 'Введите номер комнаты',
    price: reduxPrices.kiselyova61?.['Имя*'],
    name: 'Имя*',
    surName: 'Фамилия*',
    phone: 'Номер телефона*',
    email: 'Email*',
    socialConnect: 'Связаться со мной в Telegram, Viber или Wechat',
    textareaPlaceholder: 'Если есть, что добавить...',
    roomValidationMessage: 'Введите номер комнаты',
    nameValidationMessage: 'Введите как минимум 1 символ.',
    surNameValidationMessage: 'Введите как минимум 1 символ.',
    phoneValidationMessage: 'Неверный номер телефона.',
    emailValidationMessage: 'Неверный Email.',
});

const getOrderCN = (reduxPrices) => ({
    title: '正在下单',
    placeholder: '选择旅舍',
    errorMessage: '请填写必填字段',
    addresses: content.allCN.addresses,
    services: {
        // '1' '№1 БГУ, ул. Свердлова, 34'
        '1': [
            {
                title: '一次性清洁（每月 2 次清洁）',
                price: reduxPrices.sverdlova34?.['one-time-cleaning__2-rooms'],
                name: 'one-time-cleaning__2-rooms',
                active: true,
            },
            {
                title: '一次性清洁（每月 3 次清洁）',
                price: reduxPrices.sverdlova34?.['one-time-cleaning__3-rooms'],
                name: 'one-time-cleaning__3-rooms',
                active: false,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.sverdlova34?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.sverdlova34?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.sverdlova34?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐清洁（2个房间）',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐清洁（3个房间）',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.sverdlova34?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '2' '№2 БГУ, ул. Октябрьская, 2'
        '2': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.oktyabrskaya2?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.oktyabrskaya2?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.oktyabrskaya2?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.oktyabrskaya2?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '4', '№4 БГУ, ул. Чюрлениса, 7'
        '4': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.churlenisa7?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa7?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.churlenisa7?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.churlenisa7?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.churlenisa7?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.churlenisa7?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.1', '№9 БГЭУ, ул. Чюрлениса, 1'
        '4.1': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.churlenisa1?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa1?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.churlenisa1?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.churlenisa1?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.churlenisa1?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.churlenisa1?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.2', '№1 МГЛУ, ул. Чюрлениса, 3'
        '4.2': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.churlenisa3?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa3?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.churlenisa3?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.churlenisa3?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.churlenisa3?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.churlenisa3?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.3', '№4 БГУ, ул. Чюрлениса, 5'
        '4.3': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.churlenisa5?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.churlenisa5?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.churlenisa5?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.churlenisa5?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.churlenisa5?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.churlenisa5?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '5', '№5 БГУ, ул. Октябрьская, 4'
        '5': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.oktyabrskaya4?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '驱逐前清洁 (с холодильником)',
                price: reduxPrices.oktyabrskaya4?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐前清洁 (без холодильника)',
                price: reduxPrices.oktyabrskaya4?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '6', '№6 БГУ, ул. Октябрьская, 10'
        '6': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.oktyabrskaya10?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '驱逐前清洁 (с холодильником)',
                price: reduxPrices.oktyabrskaya10?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐前清洁 (без холодильника)',
                price: reduxPrices.oktyabrskaya10?.['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '7', '№7 БГУ, ул. Октябрьская, 10/a'
        '7': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.oktyabrskaya10a?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.oktyabrskaya10a?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.oktyabrskaya10a?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.oktyabrskaya10a?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '11', '№11 БГУ, ул. пр-т Дзержинского, 87'
        '11': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo87?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo87?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo87?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo87?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo87?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.dzerzhinskogo87?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '12', '№18 БНТУ, пр-т Дзержинского, 83/16'
        '12': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo83_16?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo83_16?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo83_16?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo83_16?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo83_16?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.dzerzhinskogo83_16?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '15', '№4 МГЛУ, пр-т Дзержинского, 97'
        '15': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo97?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo97?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo97?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo97?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo97?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.dzerzhinskogo97?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '16', '№ 5 БГПУ, пер.Вузовский, 9/1'
        '16': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.vuzovskiy9_1?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.vuzovskiy9_1?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.vuzovskiy9_1?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.vuzovskiy9_1?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 19,  № 1 БГКИ - ул. Рабкоровская, 15
        '19': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.rabkorovskaya15?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.rabkorovskaya15?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.rabkorovskaya15?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.rabkorovskaya15?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 20,  № 2 БГУКИ - ул. Рабкоровская, 13
        '20': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.rabkorovskaya13?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.rabkorovskaya13?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.rabkorovskaya13?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.rabkorovskaya13?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 21,  № 1 БГУФК - пр. Победителей, 107
        '21': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.pobediteley107?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.pobediteley107?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.pobediteley107?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.pobediteley107?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 22,  № 1 БГАМ - ул. Киселёва, 61
        '22': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.kiselyova61?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.kiselyova61?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.kiselyova61?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.kiselyova61?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 23, № 10 БГМУ - пр-т Дзержинского, 93
        '23': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo_93?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: reduxPrices.dzerzhinskogo_93?.['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo_93?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo_93?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo_93?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: reduxPrices.dzerzhinskogo_93?.['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // 24, № 5 БГМУ - пр-т Дзержинского, 83/6
        '24': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo_83_6?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_6?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_6?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo_83_6?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 25, № 6 БГМУ - пр-т Дзержинского, 83/7
        '25': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo_83_7?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_7?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_7?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo_83_7?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 26, № 7 БГМУ - пр-т Дзержинского, 83/8
        '26': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.dzerzhinskogo_83_8?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_8?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.dzerzhinskogo_83_8?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.dzerzhinskogo_83_8?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 27, № 4 БГТУ - ул. Белорусская, 19
        '27': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.belorusskaya_19?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.belorusskaya_19?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.belorusskaya_19?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.belorusskaya_19?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 28, № 21 БГТУ - ул. Белорусская, 21
        '28': [
            {
                title: '一次性清洁（整机）',
                price: reduxPrices.belorusskaya_21?.['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: reduxPrices.belorusskaya_21?.['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: reduxPrices.belorusskaya_21?.['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: reduxPrices.belorusskaya_21?.['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
    },
    processingPersonalData: '我同意出于营销目的处理我的个人数据。',
    step: '步',
    step1: '选择宿舍和房间',
    step2: '选择服务',
    step3: '输入个人信息',
    asideButtonText: '订购金额',
    buttonText: '下订单金额',
    room: '输入房间号',
    price: reduxPrices.kiselyova61?.['姓名*'],
    name: '姓名*',
    surName: '姓*',
    phone: '电话号码*',
    email: '电子邮件*',
    socialConnect: '联系我： Telegram, Viber 或者 wechat',
    textareaPlaceholder: '如果您有什么要补充的...',
    roomValidationMessage: '输入房间号',
    nameValidationMessage: '输入至少2个字符.',
    surNameValidationMessage: '输入至少2个字符.',
    phoneValidationMessage: '电话号码错误.',
    emailValidationMessage: '不合规电邮.',
});

// Хук для получения контента с ценами из Redux
export const usePageContent = () => {
    const prices = useSelector(selectPrices);
    console.log(prices);
    // Создаём reduxPrices из Redux prices
    const reduxPrices = useMemo(() => prices, [prices]);

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
                '1.2': reduxPrices.sverdlova34?.['cleaning-for-eviction'],
                '1.3': reduxPrices.sverdlova34?.['cleaning-for-eviction-2'],
                '2': reduxPrices.oktyabrskaya2?.['cleaning-for-eviction'],
                '4': reduxPrices.churlenisa7?.['cleaning-for-eviction'],
                '4.1': reduxPrices.churlenisa1?.['cleaning-for-eviction'],
                '4.2': reduxPrices.churlenisa3?.['cleaning-for-eviction'],
                '4.3': reduxPrices.churlenisa5?.['cleaning-for-eviction'],
                '5.1': reduxPrices.oktyabrskaya4?.['cleaning-for-eviction'],
                '5.2': reduxPrices.oktyabrskaya4?.['cleaning-for-eviction-2'],
                '6.1': reduxPrices.oktyabrskaya10?.['cleaning-for-eviction'],
                '6.2': reduxPrices.oktyabrskaya10?.['cleaning-for-eviction-2'],
                '7': reduxPrices.oktyabrskaya10a?.['cleaning-for-eviction'],
                '11': reduxPrices.dzerzhinskogo87?.['cleaning-for-eviction'],
                '12': reduxPrices.dzerzhinskogo83_16?.['cleaning-for-eviction'],
                '15': reduxPrices.dzerzhinskogo97?.['cleaning-for-eviction'],
                '16': reduxPrices.vuzovskiy9_1?.['cleaning-for-eviction'],
                '19': reduxPrices.rabkorovskaya15?.['cleaning-for-eviction'],
                '20': reduxPrices.rabkorovskaya13?.['cleaning-for-eviction'],
                '21': reduxPrices.pobediteley107?.['cleaning-for-eviction'],
                '22': reduxPrices.kiselyova61?.['cleaning-for-eviction'],
                '23': reduxPrices.dzerzhinskogo_93?.['cleaning-for-eviction'],
                '24': reduxPrices.dzerzhinskogo_83_6?.['cleaning-for-eviction'],
                '25': reduxPrices.dzerzhinskogo_83_7?.['cleaning-for-eviction'],
                '26': reduxPrices.dzerzhinskogo_83_8?.['cleaning-for-eviction'],
                '27': reduxPrices.belorusskaya_19?.['cleaning-for-eviction'],
                '28': reduxPrices.belorusskaya_21?.['cleaning-for-eviction'],
            }
        },
        'one-time-cleaning': {
            title: 'Разовая уборка',
            subTitle: 'Подойдет для выселения одного человека <br/> в середине года',
            options: content.allRU.addressesWithOptions,
            currency: ' руб.',
            prices: {
                '1.2': reduxPrices.sverdlova34?.['one-time-cleaning__2-rooms'],
                '1.3': reduxPrices.sverdlova34?.['one-time-cleaning__3-rooms'],
                '2': reduxPrices.oktyabrskaya2?.['one-time-cleaning'],
                '4': reduxPrices.churlenisa7?.['one-time-cleaning'],
                '4.1': reduxPrices.churlenisa1?.['one-time-cleaning'],
                '4.2': reduxPrices.churlenisa3?.['one-time-cleaning'],
                '4.3': reduxPrices.churlenisa5?.['one-time-cleaning'],
                '5.1': reduxPrices.oktyabrskaya4?.['one-time-cleaning'],
                '5.2': reduxPrices.oktyabrskaya4?.['one-time-cleaning'],
                '6.1': reduxPrices.oktyabrskaya10?.['one-time-cleaning'],
                '6.2': reduxPrices.oktyabrskaya10?.['one-time-cleaning'],
                '7': reduxPrices.oktyabrskaya10a?.['one-time-cleaning'],
                '11': reduxPrices.dzerzhinskogo87?.['one-time-cleaning'],
                '12': reduxPrices.dzerzhinskogo83_16?.['one-time-cleaning'],
                '15': reduxPrices.dzerzhinskogo97?.['one-time-cleaning'],
                '16': reduxPrices.vuzovskiy9_1?.['one-time-cleaning'],
                '19': reduxPrices.rabkorovskaya15?.['one-time-cleaning'],
                '20': reduxPrices.rabkorovskaya13?.['one-time-cleaning'],
                '21': reduxPrices.pobediteley107?.['one-time-cleaning'],
                '22': reduxPrices.kiselyova61?.['one-time-cleaning'],
                '23': reduxPrices.dzerzhinskogo_93?.['one-time-cleaning'],
                '24': reduxPrices.dzerzhinskogo_83_6?.['one-time-cleaning'],
                '25': reduxPrices.dzerzhinskogo_83_7?.['one-time-cleaning'],
                '26': reduxPrices.dzerzhinskogo_83_8?.['one-time-cleaning'],
                '27': reduxPrices.belorusskaya_19?.['one-time-cleaning'],
                '28': reduxPrices.belorusskaya_21?.['one-time-cleaning'],
            }
        },
        'maintenance-cleaning': {
            title: 'Поддерживающая уборка <br/> по подписке',
            subTitle: 'Больше не нужно дежурить',
            wrapperClass: 'maintenance-cleaning',
            options: content.allRU.addresses,
            currency: ' руб.',
            prices: {
                '1': reduxPrices.sverdlova34?.['maintenance-cleaning__2'],
                '2': reduxPrices.oktyabrskaya2?.['maintenance-cleaning__2'],
                '4': reduxPrices.churlenisa7?.['maintenance-cleaning__2'],
                '4.1': reduxPrices.churlenisa1?.['maintenance-cleaning__2'],
                '4.2': reduxPrices.churlenisa3?.['maintenance-cleaning__2'],
                '4.3': reduxPrices.churlenisa5?.['maintenance-cleaning__2'],
                '5': reduxPrices.oktyabrskaya4?.['maintenance-cleaning__2'],
                '6': reduxPrices.oktyabrskaya10?.['maintenance-cleaning__2'],
                '7': reduxPrices.oktyabrskaya10a?.['maintenance-cleaning__2'],
                '11': reduxPrices.dzerzhinskogo87?.['maintenance-cleaning__2'],
                '12': reduxPrices.dzerzhinskogo83_16?.['maintenance-cleaning__2'],
                '15': reduxPrices.dzerzhinskogo97?.['maintenance-cleaning__2'],
                '16': reduxPrices.vuzovskiy9_1?.['maintenance-cleaning__2'],
                '19': reduxPrices.rabkorovskaya15?.['maintenance-cleaning__2'],
                '20': reduxPrices.rabkorovskaya13?.['maintenance-cleaning__2'],
                '21': reduxPrices.pobediteley107?.['maintenance-cleaning__2'],
                '22': reduxPrices.kiselyova61?.['maintenance-cleaning__2'],
                '23': reduxPrices.dzerzhinskogo_93?.['maintenance-cleaning__2'],
                '24': reduxPrices.dzerzhinskogo_83_6?.['maintenance-cleaning__2'],
                '25': reduxPrices.dzerzhinskogo_83_7?.['maintenance-cleaning__2'],
                '26': reduxPrices.dzerzhinskogo_83_8?.['maintenance-cleaning__2'],
                '27': reduxPrices.belorusskaya_19?.['maintenance-cleaning__2'],
                '28': reduxPrices.belorusskaya_21?.['maintenance-cleaning__2'],
            }
        },
    }), [reduxPrices]);

    const orderRU = useMemo(() => getOrderRU(reduxPrices), [reduxPrices]);
    const orderCN = useMemo(() => getOrderCN(reduxPrices), [reduxPrices]);

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
        orderRU,
        orderCN,

        // Цены для использования в других местах
        prices: reduxPrices,
    };
};
