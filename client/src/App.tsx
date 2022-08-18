import React from 'react';
import './App.css';
import { useAppDispatch } from './utils/hooks';
import { getItemsArr } from './features/allItemsSlice';
import { ProductView, SearchBar } from './components';
import Box from '@mui/material/Box';

function App() {
  const dispatch = useAppDispatch();

  // async function getData() {
  //   let res = await fetch('https://pastebin.com/raw/eNPBe2Pk', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   let data = await res.json();
  //   return data;
  // }

  // getData().then((res) => console.log(res));

  return (
    <Box id='app-wrapper'>
      {/* <button onClick={() => dispatch(getItemsArr())}>api call</button> */}
      <SearchBar />
      <ProductView />
    </Box>
  );
}

export default App;
