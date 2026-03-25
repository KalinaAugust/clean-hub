import { fetchGoogleSheetsData } from './googleSheetsService';

// ---------------------------------------------------------------------------
// Helpers — expose private functions via the module itself by re-testing
// them through fetchGoogleSheetsData, or test indirectly via integration.
// We also test parseCSV / normalizePrices indirectly via fetchGoogleSheetsData.
// ---------------------------------------------------------------------------

const makeFetchResponse = (text) => ({
    ok: true,
    statusText: 'OK',
    text: () => Promise.resolve(text),
});

const PRICES_CSV = `dorm,one-time-cleaning,maintenance-cleaning__2,cleaning-for-eviction
sverdlova34,190,340,660
oktyabrskaya2,150,270,410`;

const BANNER_CSV = `text,show,color
Discount 20%,TRUE,red
Old banner,FALSE,blue`;

beforeEach(() => {
    global.fetch = jest.fn();
});

afterEach(() => {
    jest.resetAllMocks();
});

// ---------------------------------------------------------------------------
// fetchGoogleSheetsData — happy path
// ---------------------------------------------------------------------------

describe('fetchGoogleSheetsData', () => {
    it('returns formatted pricesData keyed by dorm name', async () => {
        global.fetch.mockResolvedValue(makeFetchResponse(PRICES_CSV));
        // Second call (banner) needs separate mock
        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(PRICES_CSV))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();

        expect(result.pricesData).toHaveProperty('sverdlova34');
        expect(result.pricesData.sverdlova34['one-time-cleaning']).toBe(190);
        expect(result.pricesData.sverdlova34['maintenance-cleaning__2']).toBe(340);
        expect(result.pricesData.oktyabrskaya2['cleaning-for-eviction']).toBe(410);
    });

    it('converts price values to numbers', async () => {
        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(PRICES_CSV))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        const prices = result.pricesData.sverdlova34;

        Object.values(prices).forEach((val) => {
            expect(typeof val).toBe('number');
        });
    });

    it('does not include the dorm field as a price key', async () => {
        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(PRICES_CSV))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        expect(result.pricesData.sverdlova34).not.toHaveProperty('dorm');
    });

    it('parses banner show field as boolean', async () => {
        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(PRICES_CSV))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        expect(result.bannerData[0].show).toBe(true);
        expect(result.bannerData[1].show).toBe(false);
    });

    it('returns bannerData as array', async () => {
        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(PRICES_CSV))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        expect(Array.isArray(result.bannerData)).toBe(true);
        expect(result.bannerData).toHaveLength(2);
    });
});

// ---------------------------------------------------------------------------
// normalizePrices — tested indirectly via fetchGoogleSheetsData
// Empty / null values should be filtered out
// ---------------------------------------------------------------------------

describe('normalizePrices (via fetchGoogleSheetsData)', () => {
    it('filters out empty string values', async () => {
        const csvWithEmpty = `dorm,service-a,service-b
testDorm,100,`;

        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(csvWithEmpty))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        expect(result.pricesData.testDorm).toHaveProperty('service-a', 100);
        expect(result.pricesData.testDorm).not.toHaveProperty('service-b');
    });

    it('filters out non-numeric values', async () => {
        const csvWithText = `dorm,service-a,service-b
testDorm,150,N/A`;

        global.fetch
            .mockResolvedValueOnce(makeFetchResponse(csvWithText))
            .mockResolvedValueOnce(makeFetchResponse(BANNER_CSV));

        const result = await fetchGoogleSheetsData();
        expect(result.pricesData.testDorm).not.toHaveProperty('service-b');
    });
});

// ---------------------------------------------------------------------------
// Error handling
// ---------------------------------------------------------------------------

describe('fetchGoogleSheetsData — errors', () => {
    it('throws when fetch rejects', async () => {
        global.fetch.mockRejectedValue(new Error('Network failure'));

        await expect(fetchGoogleSheetsData()).rejects.toThrow('Network failure');
    });
});
