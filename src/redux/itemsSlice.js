import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
    name: 'garments',
    initialState: {
        selectedCategory: "ALL"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.garments.selectedCategory;
export const { filterCategory } = itemsSlice.actions;
export default itemsSlice.reducer;