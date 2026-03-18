
const GOOGLE_SHEETS_API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY || '';
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID || '';
const RANGE = process.env.REACT_APP_SHEET_RANGE || 'Sheet1!A1:Z100';

/**
 * Получает данные из Google Sheets
 * @returns {Promise<Object>} Данные из таблицы
 */
export const fetchGoogleSheetsData = async () => {
    // Если API ключ или ID таблицы не заданы, возвращаем пустые данные
    if (!GOOGLE_SHEETS_API_KEY || !SPREADSHEET_ID) {
        console.warn('Google Sheets API key or Spreadsheet ID not configured');
        return {
            configured: false,
            data: null,
        };
    }

    try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${GOOGLE_SHEETS_API_KEY}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch Google Sheets data: ${response.statusText}`);
        }

        const result = await response.json();

        // Преобразуем данные из формата [[col1, col2, ...], [val1, val2, ...]]
        // в более удобный формат [{col1: val1, col2: val2, ...}, ...]
        const rows = result.values || [];

        if (rows.length === 0) {
            return {
                configured: true,
                data: [],
            };
        }

        const headers = rows[0];
        const data = rows.slice(1).map(row => {
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = row[index] || '';
            });
            return obj;
        });

        return {
            configured: true,
            data,
            rawData: result,
        };
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        throw error;
    }
};
