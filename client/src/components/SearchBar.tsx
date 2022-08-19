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
          src='https://image-cache.xingcdn.com/images/attachments/263/737/595/original/c23f2bc8_fbec_48a0_a2a8_472253857803.jpg?Expires=1660912226&Signature=P8zsIsjBlFixCWpb8arRbLZbXj9JtAx6sORCuA4O1BlU2rGjdpaR369Uz3rsUYKP6sHErhUWjlQLoGIHPnGyVKnZDopUcUVXgvKp27wyv5x4GNHdUl2RrzbFXkJp0-11M8p07-gQjpnDZ9dVwxxIil3Qfy1qe~M1TbS3W6rR4DBY2TJA54kOCD1vnq4Wje2N1Kr4MnexommNlpYy0urNWqJBGwn9JPjMw7w6s26pSvRu98uuT66Zb2zcEFEIeGnhmFdL3P1A~0IgNorZZACkMOiM0h6~spflCsT0D4Y2s38~nm9p1772ESPr1fWpspb0D785Tee4Iae5gXg4FP7V0Q__&Key-Pair-Id=APKAJ7DHXHPGL3QFZP4Q'
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
