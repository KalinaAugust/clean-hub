// commonPrices теперь берутся из Redux (см. src/store/slices/appSlice.js)
// Контент с динамическими ценами генерируется в usePageContent хуке

// All
export const allRU = {
    make_order: 'Оформить заказ',
    addressesWithOptions: [
        {value: '1.2', label: '№1 БГУ, ул. Свердлова, 34. 2-х комнатная'},
        {value: '1.3', label: '№1 БГУ, ул. Свердлова, 34. 3-х комнатная'},
        {value: '2', label: '№2 БГУ, ул. Октябрьская, 2'},
        {value: '4', label: '№4 БГУ, ул. Чюрлениса, 7'},
        {value: '4.1', label: '№9 БГЭУ, ул. Чюрлениса, 1'},
        {value: '4.2', label: '№8 БГПУ, ул. Чюрлениса, 3'},
        {value: '4.3', label: '№1 МГЛУ, ул.Чюрлениса, 5'},
        {value: '5.1', label: '№5 БГУ, ул. Октябрьская, 4. c холодильником'},
        {value: '5.2', label: '№5 БГУ, ул. Октябрьская, 4. без холодильника'},
        {value: '6', label: '№6 БГУ, ул. Октябрьская, 10'},
        {value: '6.1', label: '№6 БГУ, ул. Октябрьская, 10. c холодильником'},
        {value: '6.2', label: '№6 БГУ, ул. Октябрьская, 10. без холодильника'},
        {value: '7', label: '№7 БГУ, ул. Октябрьская, 10/a'},
        {value: '11', label: '№11 БГУ, ул. пр-т Дзержинского, 87'},
        {value: '12', label: '№18 БНТУ, пр-т Дзержинского, 83/16'},
        {value: '15', label: '№4 МГЛУ, пр-т Дзержинского, 97'},
        {value: '16', label: '№ 5 БГПУ, пер.Вузовский, 9/1'},
        {value: '19', label: '№ 1 БГКИ - ул. Рабкоровская, 15'},
        {value: '20', label: '№ 2 БГУКИ - ул. Рабкоровская, 13'},
        {value: '21', label: '№ 1 БГУФК - пр. Победителей, 107'},
        {value: '22', label: '№ 1 БГАМ - ул. Киселёва, 61'}
    ],
    addresses: [
        {value: '1', label: '№1 БГУ, ул. Свердлова, 34'},
        {value: '2', label: '№2 БГУ, ул. Октябрьская, 2'},
        {value: '4', label: '№4 БГУ, ул. Чюрлениса, 7'},
        {value: '4.1', label: '№9 БГЭУ, ул. Чюрлениса, 1'},
        {value: '4.2', label: '№8 БГПУ, ул. Чюрлениса, 3'},
        {value: '4.3', label: '№1 МГЛУ, ул.Чюрлениса, 5'},
        {value: '5', label: '№5 БГУ, ул. Октябрьская, 4'},
        {value: '6', label: '№6 БГУ, ул. Октябрьская, 10'},
        {value: '7', label: '№7 БГУ, ул. Октябрьская, 10/a'},
        {value: '11', label: '№11 БГУ, ул. пр-т Дзержинского, 87'},
        {value: '12', label: '№18 БНТУ, пр-т Дзержинского, 83/16'},
        {value: '15', label: '№4 МГЛУ, пр-т Дзержинского, 97'},
        {value: '16', label: '№ 5 БГПУ, пер.Вузовский, 9/1'},
        {value: '19', label: '№ 1 БГКИ - ул. Рабкоровская, 15'},
        {value: '20', label: '№ 2 БГУКИ - ул. Рабкоровская, 13'},
        {value: '21', label: '№ 1 БГУФК - пр. Победителей, 107'},
        {value: '22', label: '№ 1 БГАМ - ул. Киселёва, 61'}
    ],
    currency: 'руб.',
    back: 'Назад',
};

export const allCN = {
    make_order: '下订单',
    addressesWithOptions: [
        {value: '1.2', label: '白大1宿，地址, ул. Свердлова, 34. 两房式'},
        {value: '1.3', label: '白大1宿，地址, ул. Свердлова, 34. 三房'},
        {value: '2', label: '白大2宿，地址, ул. Октябрьская, 2'},
        {value: '4', label: '白大4宿，地址, ул. Чюрлениса, 7'},
        {value: '4.1', label: '9号BSEU, ул. Чюрлениса, 1'},
        {value: '4.2', label: '第 8 名 MSLU, ул. Чюрлениса, 3'},
        {value: '4.3', label: '白大1宿，地址, ул. Чюрлениса, 5'},
        {value: '5.1', label: '№5 БГУ, ул. Октябрьская, 4. 带冰箱'},
        {value: '5.2', label: '№5 БГУ, ул. Октябрьская, 4. 没有冰箱'},
        {value: '6.1', label: '白大6宿，地址, ул. Октябрьская, 10. 带冰箱'},
        {value: '6.2', label: '白大6宿，地址, ул. Октябрьская, 10. 没有冰箱'},
        {value: '7', label: '白大7宿，地址, ул. Октябрьская, 10/a'},
        {value: '11', label: '白大11宿，地址, ул. пр-т Дзержинского, 87'},
        {value: '12', label: '18号班图, пр-т Дзержинского, 83/16'},
        {value: '15', label: '4号MSLU, пр-т Дзержинского, 97'},
        {value: '16', label: '5号BSPU, пер.Вузовский, 9/1'},
        {value: '19', label: '№ 1 БГКИ - ул. Рабкоровская, 15'},
        {value: '20', label: '№ 2 БГУКИ - ул. Рабкоровская, 13'},
        {value: '21', label: '№ 1 БГУФК - пр. Победителей, 107'},
        {value: '22', label: '№ 1 БГАМ - ул. Киселёва, 61'}
    ],
    addresses: [
        {value: '1', label: '白大1宿，地址, ул. Свердлова, 34'},
        {value: '2', label: '白大2宿，地址, ул. Октябрьская, 2'},
        {value: '4', label: '白大4宿，地址, ул. Чюрлениса, 7'},
        {value: '4.1', label: '9号BSEU, ул. Чюрлениса, 1'},
        {value: '4.2', label: '第 8 名 MSLU, ул. Чюрлениса, 3'},
        {value: '4.3', label: '白大1宿，地址, ул. Чюрлениса, 5'},
        {value: '5', label: '白大5宿，地址, ул. Октябрьская, 4'},
        {value: '6', label: '白大6宿，地址, ул. Октябрьская, 10'},
        {value: '7', label: '白大7宿，地址, ул. Октябрьская, 10/a'},
        {value: '11', label: '白大11宿，地址, ул. пр-т Дзержинского, 87'},
        {value: '12', label: '18号班图, пр-т Дзержинского, 83/16'},
        {value: '15', label: '4号MSLU, пр-т Дзержинского, 97'},
        {value: '16', label: '5号BSPU, пер.Вузовский, 9/1'},
        {value: '19', label: '№ 1 БГКИ - ул. Рабкоровская, 15'},
        {value: '20', label: '№ 2 БГУКИ - ул. Рабкоровская, 13'},
        {value: '21', label: '№ 1 БГУФК - пр. Победителей, 107'},
        {value: '22', label: '№ 1 БГАМ - ул. Киселёва, 61'}
    ],
    currency: '卢布.',
    back: '后退',
};


// navigations links
export const navigationsLinksRU = {
    'maintenance-cleaning': 'Поддерживающая уборка по подписке',
    'one-time-cleaning': 'Разовая уборка',
    'cleaning-for-eviction': 'Уборка для выселения',
    'wallpaper': 'Поклейка обоев',
    'mold-removal': 'Устранение плесени',
    'wall-repair': 'Ремонт стен',
};
export const navigationsLinksCN = {
    'maintenance-cleaning': '清洁维护',
    'one-time-cleaning': '一次性清洁',
    'cleaning-for-eviction': '退宿打扫清洁',
    'wallpaper': '贴墙纸',
    'mold-removal': '除霉菌',
    'wall-repair': '墙壁修补',
};

// Эти цены используются как fallback если Redux не загружен
// Реальные цены берутся из Redux через usePageContent хук
const commonPrices = {
    sverdlova34: { 'cleaning-for-eviction': 660, 'cleaning-for-eviction-2': 695, 'one-time-cleaning__2-rooms': 190, 'one-time-cleaning__3-rooms': 210, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction-general': 520 },
    oktyabrskaya2: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    oktyabrskaya4: { 'one-time-cleaning': 50, 'cleaning-for-eviction': 160, 'cleaning-for-eviction-2': 120 },
    oktyabrskaya10: { 'one-time-cleaning': 50, 'cleaning-for-eviction': 160, 'cleaning-for-eviction-2': 120 },
    oktyabrskaya10a: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    dzerzhinskogo87: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    dzerzhinskogo83_16: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    dzerzhinskogo97: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    churlenisa7: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    churlenisa1: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    churlenisa3: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    churlenisa5: { 'one-time-cleaning': 190, 'one-time-cleaning_general_1_room': 170, 'maintenance-cleaning__2': 340, 'maintenance-cleaning__4': 645, 'cleaning-for-eviction': 660, 'cleaning-for-eviction-general': 520 },
    vuzovskiy9_1: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    rabkorovskaya15: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    rabkorovskaya13: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    pobediteley107: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
    kiselyova61: { 'one-time-cleaning': 150, 'maintenance-cleaning__2': 270, 'maintenance-cleaning__4': 500, 'cleaning-for-eviction': 410 },
};

// firstSection
export const firstSectionContentRU = {
    placeholder: 'Выберите общежитие',
    price: 'Цена',
    'cleaning-for-eviction': {
        title: 'Уборка для выселения <br/> из общежития',
        subTitle: 'Мы сделаем уборку и сдадим блок <br/> администрации вместо тебя',
        options: allRU.addressesWithOptions,
        currency: ' руб.',
        prices: {
            '1.2': commonPrices.sverdlova34['cleaning-for-eviction'],
            '1.3': commonPrices.sverdlova34['cleaning-for-eviction-2'],
            '2': commonPrices.oktyabrskaya2['cleaning-for-eviction'],
            '4': commonPrices.churlenisa7['cleaning-for-eviction'],
            '4.1': commonPrices.churlenisa1['cleaning-for-eviction'],
            '4.2': commonPrices.churlenisa3['cleaning-for-eviction'],
            '4.3': commonPrices.churlenisa5['cleaning-for-eviction'],
            '5.1': commonPrices.oktyabrskaya4['cleaning-for-eviction'],
            '5.2': commonPrices.oktyabrskaya4['cleaning-for-eviction-2'],
            '6.1': commonPrices.oktyabrskaya10['cleaning-for-eviction'],
            '6.2': commonPrices.oktyabrskaya4['cleaning-for-eviction-2'],
            '7': commonPrices.oktyabrskaya10a['cleaning-for-eviction'],
            '11': commonPrices.dzerzhinskogo87['cleaning-for-eviction'],
            '12': commonPrices.dzerzhinskogo83_16['cleaning-for-eviction'],
            '15': commonPrices.dzerzhinskogo97['cleaning-for-eviction'],
            '16': commonPrices.vuzovskiy9_1['cleaning-for-eviction'],
            '19': commonPrices.rabkorovskaya15['cleaning-for-eviction'],
            '20': commonPrices.rabkorovskaya13['cleaning-for-eviction'],
            '21': commonPrices.pobediteley107['cleaning-for-eviction'],
            '22': commonPrices.kiselyova61['cleaning-for-eviction'],
        }
    },
    'one-time-cleaning': {
        title: 'Разовая уборка',
        subTitle: 'Подойдет для выселения одного человека <br/> в середине года',
        options: allRU.addressesWithOptions,
        currency: ' руб.',
        prices: {
            '1.2': commonPrices.sverdlova34['one-time-cleaning__2-rooms'], // Свердлова, 34. 2-х комнатная
            '1.3': commonPrices.sverdlova34['one-time-cleaning__3-rooms'], // Свердлова, 34. 3-х комнатная
            '2': commonPrices.oktyabrskaya2['one-time-cleaning'], // Октябрьская, 2
            '4': commonPrices.churlenisa7['one-time-cleaning'], // Чюрлениса, 7
            '4.1': commonPrices.churlenisa1['one-time-cleaning'], // Чюрлениса, 1
            '4.2': commonPrices.churlenisa3['one-time-cleaning'], // Чюрлениса, 3
            '4.3': commonPrices.churlenisa5['one-time-cleaning'], // ул.Чюрлениса, 5
            '5.1': commonPrices.oktyabrskaya4['one-time-cleaning'], // ул. Октябрьская, 4
            '5.2': commonPrices.oktyabrskaya4['one-time-cleaning'], // ул. Октябрьская, 4
            '6.1': commonPrices.oktyabrskaya10['one-time-cleaning'], // ул. Октябрьская, 10
            '6.2': commonPrices.oktyabrskaya10['one-time-cleaning'], // ул. Октябрьская, 10
            '7': commonPrices.oktyabrskaya10a['one-time-cleaning'], // ул. Октябрьская, 10/a
            '11': commonPrices.dzerzhinskogo87['one-time-cleaning'], // ул. пр-т Дзержинского, 87
            '12': commonPrices.dzerzhinskogo83_16['one-time-cleaning'], // пр-т Дзержинского, 83/16
            '15': commonPrices.dzerzhinskogo97['one-time-cleaning'], // пр-т Дзержинского, 97
            '16': commonPrices.vuzovskiy9_1['one-time-cleaning'], // пер.Вузовский, 9/1
            '19': commonPrices.rabkorovskaya15['one-time-cleaning'], // ул. Рабкоровская, 15
            '20': commonPrices.rabkorovskaya13['one-time-cleaning'], // ул. Рабкоровская, 13
            '21': commonPrices.pobediteley107['one-time-cleaning'], // пр. Победителей, 107
            '22': commonPrices.kiselyova61['one-time-cleaning'], // ул. Киселёва, 61
        }
    },
    'maintenance-cleaning': {
        title: 'Поддерживающая уборка <br/> по подписке',
        subTitle: 'Больше не нужно дежурить',
        wrapperClass: 'maintenance-cleaning',
        options: allRU.addresses,
        currency: ' руб.',
        prices: {
            '1': commonPrices.sverdlova34['maintenance-cleaning__2'], // ул. Свердлова, 34
            '2': commonPrices.oktyabrskaya2['maintenance-cleaning__2'], // Октябрьская, 2
            '4': commonPrices.churlenisa7['maintenance-cleaning__2'], // Чюрлениса, 7
            '4.1': commonPrices.churlenisa1['maintenance-cleaning__2'], // Чюрлениса, 1
            '4.2': commonPrices.churlenisa3['maintenance-cleaning__2'], // Чюрлениса, 3
            '4.3': commonPrices.churlenisa5['maintenance-cleaning__2'], // Чюрлениса, 5
            '7': commonPrices.oktyabrskaya10a['maintenance-cleaning__2'], // ул. Октябрьская, 10/a
            '11': commonPrices.dzerzhinskogo87['maintenance-cleaning__2'], // ул. пр-т Дзержинского, 87
            '12': commonPrices.dzerzhinskogo83_16['maintenance-cleaning__2'], // пр-т Дзержинского, 83/16
            '15': commonPrices.dzerzhinskogo97['maintenance-cleaning__2'], // пр-т Дзержинского, 97
            '16': commonPrices.vuzovskiy9_1['maintenance-cleaning__2'], // пер.Вузовский, 9/1
            '19': commonPrices.rabkorovskaya15['maintenance-cleaning__2'], // ул. Рабкоровская, 15
            '20': commonPrices.rabkorovskaya13['maintenance-cleaning__2'], // ул. Рабкоровская, 13
            '21': commonPrices.pobediteley107['maintenance-cleaning__2'], // пр. Победителей, 107
            '22': commonPrices.kiselyova61['maintenance-cleaning__2'], // ул. Киселёва, 61
        }
    },
};
export const firstSectionContentCN = {
    placeholder: '选择宿舍',
    price: '价格',
    'cleaning-for-eviction': {
        title: '退宿打扫清洁',
        subTitle: '我们会打扫卫生，并替你向宿管交房',
        options: allCN.addressesWithOptions,
        currency: ' 卢布.',
        prices: firstSectionContentRU['cleaning-for-eviction'].prices
    },
    'one-time-cleaning': {
        title: '一次性清洁',
        subTitle: '适合年中驱逐一人',
        options: allCN.addressesWithOptions,
        currency: ' 卢布.',
        prices: firstSectionContentRU['one-time-cleaning'].prices
    },
    'maintenance-cleaning': {
        title: '维护清洁',
        subTitle: '不再需要保洁',
        wrapperClass: 'maintenance-cleaning',
        options: allCN.addresses,
        currency: ' 卢布.',
        prices: firstSectionContentRU['maintenance-cleaning'].prices
    },
};

// guideSection
export const guideSectionContentRU = {
    'cleaning-for-eviction': {
        title: 'Хочу заказать, что делать?',
        subTitle: '',
        cards: [
            {
                icon: 'papers',
                title: 'Оформите договор на уборку',
                text: 'Вы заказываете услугу любым удобным для вас способом, онлайн/лично у менеджера CleanHub',
            },
            {
                icon: 'connection',
                title: 'Передайте договор администрации',
                text: 'Первый, кто выселяется, передает копию договора администрации',
            },
            {
                icon: 'teamwork',
                title: 'Сообщите нам, когда все выселяться',
                text: 'После того как все уедут из комнаты, мы проводим уборку',
            },
        ],
    },
    'maintenance-cleaning': {
        title: 'Почему стоит заказывать уборку по подписке',
        subTitle: '',
        cards: [
            {
                icon: 'bucket',
                title: 'Подписка выгоднее',
                text: 'Цена одной уборки значительно меньше, чем цена разовой',
            },
            {
                icon: 'price-tag',
                title: 'Можно выбрать тариф',
                text: '2 или 4 уборки в месяц',
            },
            {
                icon: 'done',
                title: 'Теперь не нужно составлять графики для дежурства',
                text: 'Уборка с нами будет регулярной ',
            },
        ],
    },
};
export const guideSectionContentCN = {
    'cleaning-for-eviction': {
        title: '我想下单，该怎么做呢',
        subTitle: '订购服务只需要几个简单的步骤',
        cards: [
            {
                icon: 'papers',
                title: '签订清洁合同',
                text: '您可以通过线上或者线下订购方式找 CleanHub 经理下单',
            },
            {
                icon: 'connection',
                title: '将合同提交给管理员',
                text: '第一，退宿者复印一份合同给管理员',
            },
            {
                icon: 'teamwork',
                title: '退宿时请提前通知我们',
                text: '所有人退宿后，我们将打扫房间',
            },
        ],
    },
    'maintenance-cleaning': {
        title: '为什么您应该通过订阅订购清洁服务',
        subTitle: '',
        cards: [
            {
                icon: 'bucket',
                title: '订阅更有利可图',
                text: '一次清洁的价格明显低于一次性清洁的价格',
            },
            {
                icon: 'price-tag',
                title: '您可以选择资费',
                text: '每月 2 或 4 次清洁',
            },
            {
                icon: 'done',
                title: '现在您无需创建值班计划',
                text: '我们将定期进行清洁 ',
            },
        ],
    },
};

// whatWeClean
export const whatWeCleanContentRU = {
    'cleaning-for-eviction': {
        title: 'Что мы <span class="blue">убираем</span>',
        tabs: [
            {
                text: 'КОМНАТА',
                id: 'room',
            },
            {
                text: 'КУХНЯ',
                id: 'kitchen',
            },
            {
                text: 'КОРИДОР',
                id: 'corridor',
            },
            {
                text: 'ТУАЛЕТ',
                id: 'toilet',
            },
            {
                text: 'ВАННАЯ',
                id: 'bathroom',
            },
        ],
        tabsContent: {
            'room': {
                title: 'В комнате',
                listItems: [
                    'моем окна с 2-ух сторон',
                    'убираем все поверхности (подоконник, полки, тумбочки, стол, кровать, каркас стульев)',
                    'обеспыливаем полки в шкафу',
                    'моем дверь ручки, выключател и розетки',
                    'моем пол и плинтус по периметру комнаты',
                ]
            },
            'kitchen': {
                title: 'В кухне',
                listItems: [
                    'убираем в кухонных шкафчиках и полках',
                    'размораживаем и моем холодильник',
                    'моем кухонный фартук и плиту',
                    'моем столешницу и другие поверхности (стол, подоконник, каркасы стульев)',
                    'моем окна с двух с 2-ух сторон',
                    'моем мусорное ведро и вентиляционную решетку',
                    'моем пол (+ устраняем сильные загрязнения)',
                    'моем дверь, ручки, выключатели и розетки',
                ]
            },
            'corridor': {
                title: 'В коридоре',
                listItems: [
                    'убираем пыль со всех поверхностей',
                    'моем двери и зеркало',
                    'моем пол',
                    'холодильник при наличии',
                ]
            },
            'toilet': {
                title: 'В туалете',
                listItems: [
                    'выносим мусор',
                    'чистим раковину и унитаз ',
                    'чистим смеситель',
                    'обеспыливаем все поверхности',
                    'моем зеркало и тумбочку под раковиной',
                    'моем вентиляционную решетку',
                    'моем пол',
                ]
            },
            'bathroom': {
                title: 'В ванной',
                listItems: [
                    'чистим раковину, настенную плитку и душ (ванну)',
                    'чистим смесители',
                    'моем зеркало и тумбочку под раковиной',
                    'обеспыливаем все поверхности',
                    'моем пол',
                ]
            },
        }
    },
    'maintenance-cleaning': {
        title: 'Что мы <span class="blue">убираем</span>',
        tabs: [
            {
                text: 'КОМНАТА',
                id: 'room',
            },
            {
                text: 'КУХНЯ',
                id: 'kitchen',
            },
            {
                text: 'КОРИДОР',
                id: 'corridor',
            },
            {
                text: 'ТУАЛЕТ',
                id: 'toilet',
            },
            {
                text: 'ВАННАЯ',
                id: 'bathroom',
            },
        ],
        tabsContent: {
            'room': {
                title: 'В комнате',
                listItems: [
                    'обеспыливаем доступные поверхности',
                    'выносим мусор',
                    'моем пол',
                ]
            },
            'kitchen': {
                title: 'В кухне',
                listItems: [
                    'моем кухонный фартук и плиту',
                    'моем доступные поверхности (столешницу, подоконник)',
                    'выносим мусор и меняем мусорный мешок',
                    'моем пол',
                    'протираем фасады шкафчиков и ручки',
                ]
            },
            'corridor': {
                title: 'В коридоре',
                listItems: [
                    'убираем пыль со всех поверхностей',
                    'моем зеркало зеркало',
                    'моем пол',
                ]
            },
            'toilet': {
                title: 'В туалете',
                listItems: [
                    'выносим мусор и меняем  мусорный мешок',
                    'моем раковину, смеситель и унитаз',
                    'обеспыливаем все поверхности',
                    'моем зеркало',
                    'моем пол',
                ]
            },
            'bathroom': {
                title: 'В ванной',
                listItems: [
                    'моем раковину и смесители',
                    'моем зеркало',
                    'обеспыливаем все поверхности',
                    'моем пол',
                ]
            },
        }
    },
};
export const whatWeCleanContentCN = {
    'cleaning-for-eviction': {
        title: '我们打扫的区域',
        tabs: [
            {
                text: '房间',
                id: 'room',
            },
            {
                text: '厨房',
                id: 'kitchen',
            },
            {
                text: '走廊',
                id: 'corridor',
            },
            {
                text: '厕所',
                id: 'toilet',
            },
            {
                text: '浴室',
                id: 'bathroom',
            },
        ],
        tabsContent: {
            'room': {
                title: '在房间里',
                listItems: [
                    '窗户双面清洗',
                    '擦拭清洁（窗台，架子，床头柜，桌子，椅子，床）',
                    '擦拭清洁柜橱上的灰尘',
                    '清洗门把手，开关和插座',
                    '清洁地板和墙壁',
                ]
            },
            'kitchen': {
                title: '在厨房里',
                listItems: [
                    '清洁橱柜和架子',
                    '解冻和清洁冰箱',
                    '清洁厨房围裙和灶具',
                    '清洗台面和其他表面（桌子，窗台，椅子）',
                    '窗户双面清洗',
                    '清洗垃圾箱和通风口',
                    '清洗地板（+清除重度脏污）',
                    '清洗门、把手、开关和插座',
                ]
            },
            'corridor': {
                title: '在走廊里',
                listItems: [
                    '擦洗所有灰尘',
                    '擦洗门和镜子',
                    '清洁地板',
                    '清洁冰箱（如果有的情况下）',
                ]
            },
            'toilet': {
                title: '在厕所里',
                listItems: [
                    '清洁垃圾桶',
                    '清洁马桶和水槽',
                    '清洁水龙头',
                    '擦拭清洁灰尘',
                    '清洁柜子和水槽下的柜子',
                    '清洁通风口',
                    '清洗地板',
                ]
            },
            'bathroom': {
                title: '在浴室里',
                listItems: [
                    '清洁水槽，墙面和淋浴（浴缸）',
                    '清洁水龙头',
                    '清洁镜子和梳妆台',
                    '擦拭清洁灰尘',
                    '清洗地板',
                ]
            },
        }
    },
    'maintenance-cleaning': {
        title: '我们什么 <span class="blue">消除</span>',
        tabs: [
            {
                text: '房间',
                id: 'room',
            },
            {
                text: '厨房',
                id: 'kitchen',
            },
            {
                text: '走廊',
                id: 'corridor',
            },
            {
                text: '厕所',
                id: 'toilet',
            },
            {
                text: '浴室',
                id: 'bathroom',
            },
        ],
        tabsContent: {
            'room': {
                title: '在房间',
                listItems: [
                    '擦拭清洁灰尘',
                    '清洁垃圾',
                    '清洁地板',
                ]
            },
            'kitchen': {
                title: '在厨房',
                listItems: [
                    '清洗围裙和炉灶',
                    '清洗擦拭灰尘（桌面、窗台）',
                    '倒垃圾和更换垃圾袋',
                    '清洁地板',
                    '擦洗橱柜及把手',
                ]
            },
            'corridor': {
                title: '在走廊',
                listItems: [
                    '清洗所有灰尘',
                    '清洗镜子',
                    '清洁地板',
                ]
            },
            'toilet': {
                title: '在厕所',
                listItems: [
                    '倒垃圾和更换垃圾袋',
                    '清洗水槽、水龙头和马桶',
                    '清洗擦拭所有灰尘',
                    '擦洗镜子',
                    '清洁地板',
                ]
            },
            'bathroom': {
                title: '在浴室',
                listItems: [
                    '清洗水槽和水龙头',
                    '清洗镜子',
                    '清洗擦拭所有灰尘',
                    '清洁地板',
                ]
            },
        }
    },
};


// FAQ
export const faqContentRU = {
    'cleaning-for-eviction': {
        title: 'Часто задаваемые <span class="blue">вопросы</span>',
        accordions: [
            {
                title: 'Я заключил договор на выселение, когда вы придете убирать?',
                content: 'Мы делаем уборку после выселения последнего студента из блока.',
                id: 1
            },
            {
                title: 'Если мы заключили договор, мы сможем выселиться в этот же день?',
                content: 'Да, вы предоставляете копию своего договора администрации общежития и выселяетесь, а мы согласовываем время уборки вашей комнаты с администрацией.',
                id: 2
            },
            {
                title: 'Я живу в общежитии, которого нет в списке, вы можете убрать у нас?',
                content: 'Мы работаем и в других университетах. Если вашего общежития нет в списке, необходимо обратиться к менеджеру <a href="https://t.me/cleanhubby" class="blue">CleanHub</a>.',
                id: 3
            },
            {
                title: 'Я выселяюсь сегодня, а остальные  через 2 недели, как нам быть?',
                content: 'Вы можете оплатить все вместе полную уборку блока сейчас, предоставить копию договора администрации и выезжать в любое время. Мы проводим уборку после выселения последнего студента из блока.',
                id: 4
            },
            {
                title: 'Можно ли заказать уборку только одной кухни или сан. узла?',
                content: 'Да, можно. Для оформления такого заказа необходимо связаться с нашим менеджером по телефону или мессенджерах.',
                id: 5
            },
            {
                title: ' Если я выселяюсь один, а другие останутся проживать еще несколько месяцев, что делать с уборкой?',
                content: 'Вы можете заказать Разовую уборку, которая подойдет для вашего выселения. Во время такой уборки мы убираем места общего пользования и ваше койко-место.',
                id: 6
            },
        ],
    },
    'maintenance-cleaning': {
        title: 'Часто задаваемые <span class="blue">вопросы</span>',
        accordions: [
            {
                title: 'Как происходит оплата услуг?',
                content: 'Вы заключаете договор и заранее оплачиваете нужное количество уборок.',
                id: 1
            },
            {
                title: 'Если я заказал уборку по подписке, то мне нужно платить за это целый год?',
                content: 'Нет, уборку по подписке можно отменить в любой момент',
                id: 2
            },
            {
                title: 'Договор подписывается с человеком или с блоком?',
                content: 'Договор подписывается с 1 человеком, проживающим в блоке. Срок действия договора- 1 месяц',
                id: 3
            },
            {
                title: 'Если человек, который заключал договор, выселится, что делать? ',
                content: 'Срок действия заключенного договора- 1 месяц. Мы выполним все условия договора, а в следующем месяце заключим с другим проживающим',
                id: 4
            },
            {
                title: 'Мне 17 лет, я могу заключить договор?',
                content: 'К сожалению, нет, договор можно заключить только с 18 лет.',
                id: 5
            },
            {
                title: 'Нужно ли всегда присутствовать во время уборки?',
                content: 'Нет, это не обязательно, после окончания уборки, клинер закроет дверь и оставит ключ на вахте.',
                id: 6
            },
            {
                title: 'Как будет происходить согласование времени уборки?',
                content: 'При оформлении договора вы указываете дни уборки. Наш менеджер предварительно связывается с вами для согласования времени в выбранные дни.',
                id: 7
            },
        ],
    },
};
export const faqContentCN = {
    'cleaning-for-eviction': {
        title: '常见问题',
        accordions: [
            {
                title: '我签订了退宿合同后，你们什么时候来打扫？',
                content: '我们在最后一名学生搬出套间后进行清洁。',
                id: 1
            },
            {
                title: '如果我们签了合同，可以当天搬出吗？',
                content: '可以，您可以将合同复印件交给宿管，然后搬出，我们会与宿管安排时间打扫您的房间。',
                id: 2
            },
            {
                title: '我住的宿舍不在名单上，你们能帮我们打扫吗？',
                content: '我们也在其他大学工作。如果您的宿舍不在名单上，请联系 <a href="https://t.me/cleanhubby" class="blue">CleanHub</a> 经理。',
                id: 3
            },
            {
                title: '我今天要搬走，其他人两周后也要搬走，怎么办？',
                content: '你们可以现在一起支付整个房间的清洁费用，并给宿管提供合同复印件，然后随时搬出。我们会在最后一名学生搬出套间后进行清洁。',
                id: 4
            },
            {
                title: '是否可以要求只清洁一个厨房或浴室？',
                content: '可以。如果要下这样的订单，您必须通过电话或发信息联系我们的经理。',
                id: 5
            },
            {
                title: '如果我一个人搬出去，其他人要再住几个月，清洁工作怎么做？',
                content: '您可以订购适合您搬出的支持性清洁服务。在清洁期间，我们会打扫公共区域和您的指定位置。',
                id: 6
            },
        ],
    },
    'maintenance-cleaning': {
        title: '常见问题',
        accordions: [
            {
                title: '您如何支付服务费用？?',
                content: '您签订协议并提前支付所需清洁次数的费用。',
                id: 1
            },
            {
                title: '如果我通过订阅订购清洁服务，我是否需要支付一整年的费用？',
                content: '不，订阅清理可以随时取消',
                id: 2
            },
            {
                title: '协议是与人签署还是与区块签署？',
                content: '合同是与该街区的 1 名居住者签订的。合同期限 - 1 个月',
                id: 3
            },
            {
                title: '如果签订合同的人驱逐，我该怎么办？ ',
                content: '所签订协议的有效期为1个月。我们将履行合同的所有条款，下个月我们将与另一位居民签订合同',
                id: 4
            },
            {
                title: '我今年17岁了，可以签合同吗？',
                content: '不幸的是，不行，只有年满 18 岁才能签订合同。',
                id: 5
            },
            {
                title: '清洁期间我需要一直在场吗？',
                content: '不，这不是必须的，清洁工完成清洁后，会关上门并留下钥匙值班。',
                id: 6
            },
            {
                title: '如何协调清洁时间？',
                content: '签订合同时，您应注明清洁日期。我们的经理将提前与您联系以商定所选日期的时间.',
                id: 7
            },
        ],
    },
};

// priceCalculator
export const priceCalculatorContentRU = {
    placeholder: 'Выберите общежитие',
    price: 'Цена',
    priceLabel: 'Выберите общежитие и узнайте цену',
    hostelsCount: {count: 9, title: 'общежитий БГУ'},
    workersCount: {count: 20, title: 'профессионалов'},
    clientsCount: {count: 1000, title: 'довольных клиентов'},
    'cleaning-for-eviction': {
        title: 'Сколько <span class="blue">стоит уборка?</span>',
        options: allRU.addressesWithOptions,
        currency: ' руб.',
        prices: firstSectionContentRU['cleaning-for-eviction'].prices,
    },
    'one-time-cleaning': {
        title: 'Сколько <span class="blue">стоит уборка?</span>',
        options: allRU.addressesWithOptions,
        currency: ' руб.',
        prices: firstSectionContentRU['one-time-cleaning'].prices,
    },
    'maintenance-cleaning': {
        title: 'Сколько <span class="blue">стоит уборка?</span>',
        options: allRU.addresses,
        currency: ' руб.',
        prices: firstSectionContentRU['maintenance-cleaning'].prices,
    },
};

export const priceCalculatorContentCN = {
    placeholder: '选择宿舍',
    price: '价格',
    priceLabel: '选择宿舍并了解价格',
    hostelsCount: {count: 9, title: '白大宿舍'},
    workersCount: {count: 20, title: '专业人士'},
    clientsCount: {count: 1000, title: '满意的顾客'},
    'cleaning-for-eviction': {
        title: '清洁费用是多少',
        options: allCN.addressesWithOptions,
        currency: ' 卢布.',
        prices: firstSectionContentRU['cleaning-for-eviction'].prices,
    },
    'one-time-cleaning': {
        title: '多少 <span class="blue">清洁费用?</span>',
        options: allCN.addressesWithOptions,
        currency: ' 卢布.',
        prices: firstSectionContentRU['one-time-cleaning'].prices,
    },
    'maintenance-cleaning': {
        title: '清洁费用是多少',
        options: allCN.addresses,
        currency: ' 卢布.',
        prices: firstSectionContentRU['maintenance-cleaning'].prices,
    },
};

export const footerRU = {
    social_text: 'Присоединяйся к нашим социальным сетям! В них мы публикуем новости, а также <span class="orange">скидки и акции</span>',
    data: 'ООО "Эрфарунг" Свидетельство о государственной регистрации №193400527 от 17.03.2020 220045 г.Минск, ул. Чюрлениса, 7 пом. 202',
    job: 'Работа в',
    job_wage: 'от <span class="footer__job-wage">1000</span>',
    job_currency: 'руб. в месяц',
};

export const footerCN = {
    social_text: '加入我们的社交软件！我们在社交软件上发布新闻、折扣和促销信息',
    data: 'Erfarung 开放式有限公司 国家注册执照2020年3月17日 №193400527, 220045 Minsk, Churlenis 大街，202房间。',
    job: '招聘',
    job_wage: '从<span class="footer__job-wage">1000</span>',
    job_currency: '白俄卢布一个月',
};

export const thankYouRU = {
    thankYou: 'Спасибо!',
    text: 'Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.',
    button: 'Вернуться на главную',
};

export const thankYouCN = {
    thankYou: '谢谢!',
    text: '您的订单已成功完成。我们会尽快与您联系。',
    button: '返回主页',
};

export const orderRU = {
    title: 'Оформление заказа',
    placeholder: 'Выберите общежитие',
    errorMessage: 'Пожалуйста, заполните обязательные поля.',
    addresses: allRU.addresses,
    services: {
        // '1' '№1 БГУ, ул. Свердлова, 34'
        '1': [
            {
                title: 'Разовая уборка (2 комнаты)',
                price: commonPrices.sverdlova34['one-time-cleaning__2-rooms'],
                name: 'one-time-cleaning__2-rooms',
                active: true,
            },
            {
                title: 'Разовая уборка (3 комнаты)',
                price: commonPrices.sverdlova34['one-time-cleaning__3-rooms'],
                name: 'one-time-cleaning__3-rooms',
                active: false,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.sverdlova34['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.sverdlova34['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.sverdlova34['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения (2 комнатная)',
                price: commonPrices.sverdlova34['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (3 комнатная)',
                price: commonPrices.sverdlova34['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.sverdlova34['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '2' '№2 БГУ, ул. Октябрьская, 2'
        '2': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.oktyabrskaya2['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price:  commonPrices.oktyabrskaya2['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.oktyabrskaya2['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.oktyabrskaya2['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '4', '№4 БГУ, ул. Чюрлениса, 7'
        '4': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.churlenisa7['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa7['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.churlenisa7['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.churlenisa7['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.churlenisa7['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.churlenisa7['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.1', '№9 БГЭУ, ул. Чюрлениса, 1'
        '4.1': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.churlenisa1['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa1['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.churlenisa1['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.churlenisa1['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.churlenisa1['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.churlenisa1['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.2', '№1 МГЛУ, ул. Чюрлениса, 3'
        '4.2': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.churlenisa3['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa3['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.churlenisa3['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.churlenisa3['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.churlenisa3['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.churlenisa3['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.3', '№4 БГУ, ул. Чюрлениса, 5'
        '4.3': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.churlenisa5['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa5['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.churlenisa5['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.churlenisa5['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.churlenisa5['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.churlenisa5['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '5', '№5 БГУ, ул. Октябрьская, 4'
        '5': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.oktyabrskaya4['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Уборка для выселения (с холодильником)',
                price: commonPrices.oktyabrskaya4['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (без холодильника)',
                price: commonPrices.oktyabrskaya4['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '6', '№6 БГУ, ул. Октябрьская, 10'
        '6': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.oktyabrskaya10['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Уборка для выселения (с холодильником)',
                price: commonPrices.oktyabrskaya10['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка для выселения (без холодильника)',
                price: commonPrices.oktyabrskaya10['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '7', '№7 БГУ, ул. Октябрьская, 10/a'
        '7': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.oktyabrskaya10a['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.oktyabrskaya10a['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.oktyabrskaya10a['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.oktyabrskaya10a['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '11', '№11 БГУ, ул. пр-т Дзержинского, 87'
        '11': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.dzerzhinskogo87['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo87['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.dzerzhinskogo87['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.dzerzhinskogo87['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.dzerzhinskogo87['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.dzerzhinskogo87['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '12', '№18 БНТУ, пр-т Дзержинского, 83/16'
        '12': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.dzerzhinskogo83_16['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo83_16['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.dzerzhinskogo83_16['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.dzerzhinskogo83_16['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.dzerzhinskogo83_16['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.dzerzhinskogo83_16['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '15', '№4 МГЛУ, пр-т Дзержинского, 97'
        '15': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.dzerzhinskogo97['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo97['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.dzerzhinskogo97['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.dzerzhinskogo97['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.dzerzhinskogo97['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: 'Уборка мест общего пользования для выселения',
                price: commonPrices.dzerzhinskogo97['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '16', '№ 5 БГПУ, пер.Вузовский, 9/1'
        '16': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.vuzovskiy9_1['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.vuzovskiy9_1['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.vuzovskiy9_1['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.vuzovskiy9_1['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 19,  № 1 БГКИ - ул. Рабкоровская, 15
        '19': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.rabkorovskaya15['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.rabkorovskaya15['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.rabkorovskaya15['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.rabkorovskaya15['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 20,  № 2 БГУКИ - ул. Рабкоровская, 13
        '20': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.rabkorovskaya13['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.rabkorovskaya13['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.rabkorovskaya13['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.rabkorovskaya13['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 21,  № 1 БГУФК - пр. Победителей, 107
        '21': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.pobediteley107['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.pobediteley107['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.pobediteley107['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.pobediteley107['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 22,  № 1 БГАМ - ул. Киселёва, 61
        '22': [
            {
                title: 'Разовая уборка (всего блока)',
                price: commonPrices.kiselyova61['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Поддерживающая уборка по подписке (2 уборки в месяц)',
                price: commonPrices.kiselyova61['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: 'Поддерживающая уборка по подписке (4 уборки в месяц)',
                price: commonPrices.kiselyova61['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: 'Уборка для выселения',
                price: commonPrices.kiselyova61['cleaning-for-eviction'],
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
};

export const orderCN = {
    title: '正在下单',
    placeholder: '选择旅舍',
    errorMessage: '请填写必填字段',
    addresses: allCN.addresses,
    services: {
        // '1' '№1 БГУ, ул. Свердлова, 34'
        '1': [
            {
                title: '一次性清洁（每月 2 次清洁）',
                price: commonPrices.sverdlova34['one-time-cleaning__2-rooms'],
                name: 'one-time-cleaning__2-rooms',
                active: true,
            },
            {
                title: '一次性清洁（每月 3 次清洁）',
                price: commonPrices.sverdlova34['one-time-cleaning__3-rooms'],
                name: 'one-time-cleaning__3-rooms',
                active: false,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.sverdlova34['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.sverdlova34['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.sverdlova34['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐清洁（2个房间）',
                price: commonPrices.sverdlova34['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐清洁（3个房间）',
                price: commonPrices.sverdlova34['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.sverdlova34['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '2' '№2 БГУ, ул. Октябрьская, 2'
        '2': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.oktyabrskaya2['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.oktyabrskaya2['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.oktyabrskaya2['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.oktyabrskaya2['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '4', '№4 БГУ, ул. Чюрлениса, 7'
        '4': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.churlenisa7['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa7['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.churlenisa7['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.churlenisa7['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.churlenisa7['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.churlenisa7['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.1', '№9 БГЭУ, ул. Чюрлениса, 1'
        '4.1': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.churlenisa1['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa1['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.churlenisa1['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.churlenisa1['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.churlenisa1['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.churlenisa1['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.2', '№1 МГЛУ, ул. Чюрлениса, 3'
        '4.2': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.churlenisa3['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa3['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.churlenisa3['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.churlenisa3['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.churlenisa3['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.churlenisa3['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '4.3', '№4 БГУ, ул. Чюрлениса, 5'
        '4.3': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.churlenisa5['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.churlenisa5['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.churlenisa5['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.churlenisa5['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.churlenisa5['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.churlenisa5['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '5', '№5 БГУ, ул. Октябрьская, 4'
        '5': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.oktyabrskaya4['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '驱逐前清洁 (с холодильником)',
                price: commonPrices.oktyabrskaya4['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐前清洁 (без холодильника)',
                price: commonPrices.oktyabrskaya4['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '6', '№6 БГУ, ул. Октябрьская, 10'
        '6': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.oktyabrskaya10['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '驱逐前清洁 (с холодильником)',
                price: commonPrices.oktyabrskaya10['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '驱逐前清洁 (без холодильника)',
                price: commonPrices.oktyabrskaya10['cleaning-for-eviction-2'],
                name: 'cleaning-for-eviction-2',
                active: false,
            },
        ],
        // '7', '№7 БГУ, ул. Октябрьская, 10/a'
        '7': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.oktyabrskaya10a['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.oktyabrskaya10a['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.oktyabrskaya10a['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.oktyabrskaya10a['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // '11', '№11 БГУ, ул. пр-т Дзержинского, 87'
        '11': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.dzerzhinskogo87['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo87['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.dzerzhinskogo87['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.dzerzhinskogo87['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.churlenisa7['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.dzerzhinskogo87['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '12', '№18 БНТУ, пр-т Дзержинского, 83/16'
        '12': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.dzerzhinskogo83_16['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo83_16['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.dzerzhinskogo83_16['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.dzerzhinskogo83_16['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.dzerzhinskogo83_16['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.dzerzhinskogo83_16['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '15', '№4 МГЛУ, пр-т Дзержинского, 97'
        '15': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.dzerzhinskogo97['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: 'Разовая уборка (места общего пользования + 1 жилая комната)',
                price: commonPrices.dzerzhinskogo97['one-time-cleaning_general_1_room'],
                name: 'one-time-cleaning_general_1_room',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.dzerzhinskogo97['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.dzerzhinskogo97['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.dzerzhinskogo97['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
            {
                title: '清洁驱逐公共区域',
                price: commonPrices.dzerzhinskogo97['cleaning-for-eviction-general'],
                name: 'cleaning-for-eviction-general',
                active: false,
            },
        ],
        // '16', '№ 5 БГПУ, пер.Вузовский, 9/1'
        '16': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.vuzovskiy9_1['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.vuzovskiy9_1['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.vuzovskiy9_1['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.vuzovskiy9_1['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 19,  № 1 БГКИ - ул. Рабкоровская, 15
        '19': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.rabkorovskaya15['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.rabkorovskaya15['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.rabkorovskaya15['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.rabkorovskaya15['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 20,  № 2 БГУКИ - ул. Рабкоровская, 13
        '20': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.rabkorovskaya13['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.rabkorovskaya13['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.rabkorovskaya13['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.rabkorovskaya13['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 21,  № 1 БГУФК - пр. Победителей, 107
        '21': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.pobediteley107['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.pobediteley107['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.pobediteley107['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.pobediteley107['cleaning-for-eviction'],
                name: 'cleaning-for-eviction',
                active: false,
            },
        ],
        // 22,  № 1 БГАМ - ул. Киселёва, 61
        '22': [
            {
                title: '一次性清洁（整机）',
                price: commonPrices.kiselyova61['one-time-cleaning'],
                name: 'one-time-cleaning',
                active: true,
            },
            {
                title: '订阅维护清洁（每月 2 次清洁）',
                price: commonPrices.kiselyova61['maintenance-cleaning__2'],
                name: 'maintenance-cleaning__2',
                active: false,
            },
            {
                title: '订阅维护清洁（每月 4 次清洁）',
                price: commonPrices.kiselyova61['maintenance-cleaning__4'],
                name: 'maintenance-cleaning__4',
                active: false,
            },
            {
                title: '驱逐前清洁',
                price: commonPrices.kiselyova61['cleaning-for-eviction'],
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
};


