import { createSlice, current } from '@reduxjs/toolkit';
import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Item } from '../utils/itemTypes';
import customFetch from '../utils/axios';
import { AxiosResponse } from 'axios';
import axios from 'axios';

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
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

// export const getItemsArr = createAsyncThunk<Item[]>(
//   'itemsArr/fetch',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get<Item[]>('https://pastebin.com/raw/eNPBe2Pk', {
//         headers: {
//           Accept: 'application/json',
//         },
//       });
//       return res.data;
//     } catch (error: any) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.response.data.msg);
//     }
//   }
// );

// export const getItemsArr = createAsyncThunk(
//   'itemsArr/fetch',
//   async (_, thunkAPI) => {
//     try {
//       let res = await fetch('https://pastebin.com/raw/eNPBe2Pk', {
//         method: 'GET',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       let data = await res.json();
//       console.log(data);

//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

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
  },
  extraReducers: (builder) => {
    builder.addCase(getItemsArr.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getItemsArr.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allItemsArr = payload;
      state.allItemsBackUp = payload;
    });
    builder.addCase(getItemsArr.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log({ payload });
    });

    // [getItemsArr.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [getItemsArr.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.allItemsArr = payload
    // },
    // [getItemsArr.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    // },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectorAllItemsArr = (state: RootState) =>
  state.allItems.allItemsArr;

export const selectorIsLoading = (state: RootState) => state.allItems.isLoading;

export const { filterList } = allItemsSlice.actions;

export default allItemsSlice.reducer;
