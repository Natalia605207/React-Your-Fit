import { createSlice } from '@reduxjs/toolkit';

export const garmentsSlice = createSlice({
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
export const { filterCategory } = garmentsSlice.actions;
export default garmentsSlice.reducer;