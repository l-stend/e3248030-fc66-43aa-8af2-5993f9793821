import React from 'react';
import { Item } from '../utils/itemTypes';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Paper id='item-card' elevation={7}>
      <Box
        id='card-wrapper'
        sx={{
          height: '30vh',
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
              height='100%'
              width='35%'
            />
          </Box>
          <Box id='info-wrapper'>
            <Typography>{item.asin}</Typography>
            <Typography>{item.title}</Typography>
            <Typography>{item.manufacturer}</Typography>
            <Box
              id='info-categories'
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              {item.categoryTree.map((category) => (
                <Chip label={category.name} color='primary' />
              ))}
            </Box>
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
