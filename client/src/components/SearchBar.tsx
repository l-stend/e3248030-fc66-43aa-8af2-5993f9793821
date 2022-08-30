import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { filterList } from '../features/allItemsSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchBar: React.FC = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const dispatch = useAppDispatch();

  return (
    <AppBar position='sticky' sx={{ borderRadius: '4px' }}>
      <Box
        id='searchbar-and-logo'
        sx={{
          display: 'flex',
          flexDirection: 'rows',
          justifyContent: 'evenly',
          alignItems: 'center',
          paddingLeft: '2em',
        }}
      >
        <img
          src='https://raw.githubusercontent.com/l-stend/e3248030-fc66-43aa-8af2-5993f9793821/main/client/src/assets/c23f2bc8_fbec_48a0_a2a8_472253857803.jpg'
          alt='pb-logo'
          height='50px'
          width='50px'
        />
        <Autocomplete
          id='navbar-search-bar'
          sx={{
            width: '40vw',
            marginY: '.5em',
            marginLeft: '3em',
            color: 'white',
          }}
          renderInput={(params) => (
            <TextField {...params} label='Search for ASIN' />
          )}
          options={allItemsArr}
          getOptionLabel={(item) => item.asin}
          renderOption={(props, item) => (
            <Box component='li' {...props} key={item.asin}>
              {item.asin}
            </Box>
          )}
          onInputChange={(e: any) => dispatch(filterList(e.target.value))}
          noOptionsText='No ASIN matches your search'
        />
      </Box>
    </AppBar>
  );
};

export default SearchBar;
