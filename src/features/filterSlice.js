import { createSlice } from '@reduxjs/toolkit';

const FILTER_COMPLETED = 'FILTER_COMPLETED';
const FILTER_ACTIVE = 'FILTER_ACTIVE';
const SHOW_ALL = 'SHOW_ALL';

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

export const filteredTodos = state => {
  const { filter, todos } = state;
  switch (filter) {
    case FILTER_ACTIVE:
      return todos.filter(todo => !todo.done);
    case FILTER_COMPLETED:
      return todos.filter(todo => todo.done);
    default:
      return todos;
  }
};

export default filterSlice.reducer;
