import React, { useState } from 'react';
import { Item } from '../utils/itemTypes';
import CardSlideShow from './CardSlideShow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);

  return (
    <Paper
      id='item-card'
      elevation={7}
      sx={{
        height: '45vh',
        width: '85vw',
        marginTop: '2vh',
      }}
    >
      <Box
        id='card-wrapper'
        sx={{
          // height: '30vh',
          // width: '85vw',
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
            <CardSlideShow imagesCSV={item.imagesCSV} />
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
                <Chip
                  key={category.name}
                  label={category.name}
                  color='primary'
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box id='show-more-button-wrapper'>
          {!isDescriptionOpen && (
            <Button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
              Show Description
            </Button>
          )}
        </Box>
      </Box>
      <Box id='collapse-wrapper'>
        {isDescriptionOpen && (
          <Collapse
            id='description-and-show-less-button'
            in={isDescriptionOpen}
            timeout='auto'
            unmountOnExit
          >
            <Typography>{item.description}</Typography>
            <Button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
              Hide Description
            </Button>
          </Collapse>
        )}
      </Box>
    </Paper>
  );
};

export default ItemCard;
