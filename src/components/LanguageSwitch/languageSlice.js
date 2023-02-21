import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 'en',    
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,    
    reducers: {
        changeLang: (state) => {                    
            let newLang = state.value === "en" ? "es" : "en";    
            state.value = newLang;            
        },
    },    
});

export const { changeLang } = languageSlice.actions;

export const selectLang = (state) => state.language.value;

export default languageSlice.reducer;