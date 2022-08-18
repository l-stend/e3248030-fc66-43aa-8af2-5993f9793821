import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { filterList } from '../features/allItemsSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const dispatch = useAppDispatch();

  return (
    <AppBar position='sticky'>
      <Autocomplete
        id='navbar-search-bar'
        sx={{ width: '40vw' }}
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
      />
    </AppBar>
  );
};

export default SearchBar;
