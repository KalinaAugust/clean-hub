
/**
 * Парсит CSV текст в массив объектов
 * @param {string} text CSV текст
 * @returns {Array<Object>} Массив объектов
 */
const parseCSV = (text) => {
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];

    const header = lines[0];
    const dataLines = lines.slice(1);
    const keys = header.split(',').map(key => key.trim());

    return dataLines.map(line => {
        const values = line.split(',').map(value => value.trim());
        return Object.fromEntries(
            keys.map((key, i) => [key, values[i]])
        );
    });
};

function normalizePrices(obj) {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([_, value]) => value !== "" && value != null)
            .map(([key, value]) => [key, Number(value)])
            .filter(([_, value]) => !Number.isNaN(value))
    );
}

/**
 * Получает данные из Google Sheets
 * @returns {Promise<Object>} Данные из таблицы
 */
export const fetchGoogleSheetsData = async () => {
    try {
        const pricesUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRfXTNr48PHVBs47dr4d4yQ1fGsCKkFbSKuyzuwY7GKuF9R76V-hLNb8uo2c5UFJW4PyLdhVrw2l66M/pub?output=csv';
        const bannerUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQPYnq1bkQyPR0PrIPwWTkN6udlN8HlzhJfdLrUtO_YHk55ewfJlYon7IAIU-G4D2Pgmk0lailwW3S5/pub?output=csv';

        const [pricesResponse, bannerResponse] = await Promise.all([
            fetch(pricesUrl),
            fetch(bannerUrl)
        ]);

        if (!pricesResponse.ok) {
            throw new Error(`Failed to fetch Prices data: ${pricesResponse.statusText}`);
        }
        if (!bannerResponse.ok) {
            throw new Error(`Failed to fetch Banner data: ${bannerResponse.statusText}`);
        }

        const pricesText = await pricesResponse.text();
        const bannerText = await bannerResponse.text();

        const pricesData = parseCSV(pricesText);
        const bannerData = parseCSV(bannerText);

        const formattedPricesData = pricesData.reduce((acc, item) => {
            const { dorm, ...itemWithoutDorm } = item;
            acc[item.dorm] = normalizePrices(itemWithoutDorm);
            return acc;
        }, {});
        console.log(formattedPricesData);
        return {
            pricesData: formattedPricesData,
            bannerData: bannerData.map((item) => ({...item, show: item.show === 'TRUE'}))
        };
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        throw error;
    }
};
