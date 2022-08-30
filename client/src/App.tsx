import React from 'react';
import './App.css';
import { ProductView, SearchBar, LocalProductView } from './components';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import { pbDarkTheme } from './utils/theme';

function App() {
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
        {/* <ProductView /> */}
        {/* Keep uncommented to to display data from the local .json file */}
        <LocalProductView />
      </Box>
    </ThemeProvider>
  );
}

export default App;
