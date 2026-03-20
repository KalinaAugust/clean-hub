import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchGoogleSheetsData} from '../../services/googleSheetsService';

// Цены по умолчанию
// const defaultPrices = {
//     sverdlova34: {
//         'one-time-cleaning__2-rooms': 190,
//         'one-time-cleaning__3-rooms': 210,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-2': 695,
//         'cleaning-for-eviction-general': 520,
//     },
//     oktyabrskaya2: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     oktyabrskaya4: {
//         'one-time-cleaning': 50,
//         'cleaning-for-eviction': 160,
//         'cleaning-for-eviction-2': 120,
//     },
//     oktyabrskaya10: {
//         'one-time-cleaning': 50,
//         'cleaning-for-eviction': 160,
//         'cleaning-for-eviction-2': 120,
//     },
//     oktyabrskaya10a: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     dzerzhinskogo87: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     dzerzhinskogo83_16: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     dzerzhinskogo97: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     churlenisa7: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     churlenisa1: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     churlenisa3: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     churlenisa5: {
//         'one-time-cleaning': 190,
//         'one-time-cleaning_general_1_room': 170,
//         'maintenance-cleaning__2': 340,
//         'maintenance-cleaning__4': 645,
//         'cleaning-for-eviction': 660,
//         'cleaning-for-eviction-general': 520,
//     },
//     vuzovskiy9_1: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     rabkorovskaya15: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     rabkorovskaya13: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     pobediteley107: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
//     kiselyova61: {
//         'one-time-cleaning': 150,
//         'maintenance-cleaning__2': 270,
//         'maintenance-cleaning__4': 500,
//         'cleaning-for-eviction': 410,
//     },
// };

// Async thunk для инициализации приложения с данными из Google Sheets
export const initializeApp = createAsyncThunk(
    'app/initialize',
    async (_, { rejectWithValue }) => {
        try {
            return await fetchGoogleSheetsData();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    language: 'RU',
    // prices: defaultPrices,
    pricesData: {},
    bannerData: {},
    isLoading: false,
    isInitialized: false,
    error: null,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initializeApp.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(initializeApp.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isInitialized = true;
                state.pricesData = action.payload.pricesData;
                state.bannerData = action.payload.bannerData;
            })
            .addCase(initializeApp.rejected, (state, action) => {
                state.isLoading = false;
                state.isInitialized = true;
                state.error = action.payload;
            });
    },
});

export const { setLanguage } = appSlice.actions;

// Селектор для получения цен
// export const selectPrices = (state) => state.app.prices;
export const selectPrices = (state) => state.app.pricesData;

export default appSlice.reducer;
