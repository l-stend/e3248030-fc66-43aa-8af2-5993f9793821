import { createSlice, current } from '@reduxjs/toolkit';
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Item } from '../utils/itemTypes';
import customFetch from '../utils/axios';

interface AllItemsState {
  allItemsArr: Item[] | [];
  allItemsBackUp: Item[] | [];
  isLoading: boolean;
}

const initialState: AllItemsState = {
  allItemsArr: [],
  allItemsBackUp: [],
  isLoading: false,
};

export const getItemsArr = createAsyncThunk<Item[]>(
  'itemsArr/fetch',
  async (_, thunkAPI) => {
    try {
      const res = await customFetch.get<Item[]>('');
      return res.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const allItemsSlice = createSlice({
  name: 'allItems',
  initialState,
  reducers: {
    filterList: (state, action: PayloadAction<string>) => {
      state.allItemsArr = current(state.allItemsBackUp);
      state.allItemsArr = state.allItemsArr.filter((item) =>
        item.asin.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    //It sets the state for the local version
    setLocalList: (state, action: PayloadAction<Item[]>) => {
      state.allItemsArr = action.payload;
      state.allItemsBackUp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsArr.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getItemsArr.fulfilled,
      (state, action: PayloadAction<Item[]>) => {
        state.isLoading = false;
        state.allItemsArr = action.payload;
        state.allItemsBackUp = action.payload;
      }
    );
    builder.addCase(getItemsArr.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log({ payload });
    });
  },
});

export const selectorAllItemsArr = (state: RootState) =>
  state.allItems.allItemsArr;

export const selectorIsLoading = (state: RootState) => state.allItems.isLoading;

export const { filterList, setLocalList } = allItemsSlice.actions;

export default allItemsSlice.reducer;
