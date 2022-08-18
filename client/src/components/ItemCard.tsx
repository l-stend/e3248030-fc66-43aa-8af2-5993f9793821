import React, { useState } from 'react';
import { Item } from '../utils/itemTypes';
import CardSlideShow from './CardSlideShow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import FactoryIcon from '@mui/icons-material/Factory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

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
        maxHeight: 'auto',
        // width: '86vw',
        marginTop: '2vh',
        marginX: '7vw',
        padding: '1em',
      }}
    >
      <Box
        id='card-wrapper'
        sx={{
          // height: '30vh',
          // width: '85vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* //////// IMAGE AND INFO ///////// */}
        <Box
          id='image-and-info'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {/* ///// images ////// */}
          <Box id='image-wrapper'>
            <CardSlideShow imagesCSV={item.imagesCSV} />
          </Box>
          {/* ///// info ////// */}
          <Box
            id='info-wrapper'
            sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingX: '2em',
              // justifyContent: 'center',
              // alignItems: 'space-between',
            }}
          >
            {/* asin */}
            <Tooltip title='ASIN' placement='top-start' arrow>
              <Box
                id='info-asin'
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <QrCode2Icon
                  fontSize='medium'
                  color='primary'
                  sx={{ paddingRight: '.7em' }}
                />
                <Typography variant='h6' sx={{ marginY: '1.2em' }}>
                  {item.asin}
                </Typography>
              </Box>
            </Tooltip>
            {/* product name */}
            <Tooltip title='Product name' placement='top-start' arrow>
              <Box
                id='info-asin'
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <ShoppingBagIcon
                  fontSize='medium'
                  color='primary'
                  sx={{ paddingRight: '.7em' }}
                />
                <Typography variant='subtitle2' sx={{ marginY: '1.2em' }}>
                  {item.title}
                </Typography>
              </Box>
            </Tooltip>
            {/* manufacturer */}
            <Tooltip title='Manufacturer' placement='top-start' arrow>
              <Box
                id='info-asin'
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <FactoryIcon
                  fontSize='medium'
                  color='primary'
                  sx={{ paddingRight: '.7em' }}
                />
                <Typography variant='subtitle1' sx={{ marginY: '1.2em' }}>
                  {item.manufacturer}
                </Typography>
              </Box>
            </Tooltip>
            {/* categories */}
            <Box
              id='info-categories'
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginY: '1.5em',
              }}
            >
              {item.categoryTree.map((category) => (
                <Tooltip title='Category' placement='top-start' arrow>
                  <Chip
                    key={category.name}
                    label={category.name}
                    color='primary'
                  />
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* //////// SHOW MORE BUTTON ///////// */}
      <Box id='show-more-button-wrapper'>
        {!isDescriptionOpen && (
          <Button onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            Show Description
          </Button>
        )}
      </Box>
      {/* //////// DESCRIPTION ///////// */}
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
