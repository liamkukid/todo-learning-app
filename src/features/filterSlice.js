import { createSlice } from '@reduxjs/toolkit';

import { SHOW_ALL, FILTER_COMPLETED, FILTER_ACTIVE } from '../globalConst';

const filterSlice = createSlice({
  name: 'filter',
  initialState: SHOW_ALL,
  reducers: {
    filterCompleted: () => FILTER_COMPLETED,
    filterActive: () => FILTER_ACTIVE,
    showAll: () => SHOW_ALL,
  },
});

export const { filterActive, showAll, filterCompleted } = filterSlice.actions;

export default filterSlice.reducer;
