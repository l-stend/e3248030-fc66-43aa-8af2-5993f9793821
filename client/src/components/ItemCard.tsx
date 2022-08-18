import React from 'react';
import { Item } from '../utils/itemTypes';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ItemCard: React.FunctionComponent<Item> = (props) => {
  return (
    <Paper id='item-card'>
      <Box
        id='card-wrapper'
        sx={{
          heigth: '30vh',
          width: '85vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          id='image-and-info'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Box id='image-wrapper'>
            <img
              src='https://raw.githubusercontent.com/l-stend/e3248030-fc66-43aa-8af2-5993f9793821/main/client/public/logo512.png'
              alt=''
              height='25vh'
              width='25vw'
            />
          </Box>
          <Box id='info-wrapper'>
            <Typography>{props.asin}</Typography>
            <Typography>{props.title}</Typography>
            <Typography>{props.manufacturer}</Typography>
          </Box>
        </Box>
        <Box id='show-more-button-wrapper'>
          <Button>Show More</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ItemCard;
