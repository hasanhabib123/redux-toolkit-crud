import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTaskLoading: (state) => {
      state.loading = true;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.loading = false;
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.loading = false;
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { getTasks, addTask, deleteTask, getTaskLoading } =
  tasksSlice.actions;

export default tasksSlice.reducer;
