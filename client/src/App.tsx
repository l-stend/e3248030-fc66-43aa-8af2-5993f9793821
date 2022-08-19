import React from 'react';
import './App.css';
import { useAppDispatch } from './utils/hooks';
import { getItemsArr } from './features/allItemsSlice';
import { ProductView, SearchBar, LocalProductView } from './components';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import { pbDarkTheme } from './utils/theme';

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
    <ThemeProvider theme={pbDarkTheme}>
      <Box
        id='app-wrapper'
        sx={{
          backgroundColor: 'background.default',
        }}
      >
        <SearchBar />
        {/* Keep uncommented to display the data from the API call. It can only opening the browser without CORS restrictions */}
        <ProductView />
        {/* Keep uncommented to to display data from the local .json file */}
        {/* <LocalProductView /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
