import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr, setLocalList } from '../features/allItemsSlice';
import { Item } from '../utils/itemTypes';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { JsxEmit } from 'typescript';
import productsList from '../utils/products.json';

const LocalProductView = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const dispatch = useAppDispatch();
  const localItemsList: any = productsList;

  useEffect(() => {
    dispatch(setLocalList(localItemsList));
  }, []);

  return (
    <Box id='product-view-wrapper'>
      <Box id='product-list-container'>
        <Box>
          {allItemsArr?.map((item) => (
            <ItemCard key={item.asin} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LocalProductView;
