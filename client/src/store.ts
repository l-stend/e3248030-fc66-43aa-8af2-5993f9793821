import { configureStore } from '@reduxjs/toolkit';
import allItemsSlice from './features/allItemsSlice';

export const store = configureStore({
  reducer: {
    allItems: allItemsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
