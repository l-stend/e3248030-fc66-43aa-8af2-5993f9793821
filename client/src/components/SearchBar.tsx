import React from 'react';
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { filterList } from '../features/allItemsSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import PageviewIcon from '@mui/icons-material/Pageview';

const SearchBar = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const dispatch = useAppDispatch();

  return (
    <AppBar position='sticky'>
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
    </AppBar>
  );
};

export default SearchBar;
