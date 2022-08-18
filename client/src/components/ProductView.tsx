import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr } from '../features/allItemsSlice';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Item } from '../utils/itemTypes';
import { JsxEmit } from 'typescript';

const ProductView = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const isLoading = useAppSelector((state) => state.allItems.isLoading);
  const dispatch = useAppDispatch();
  // console.log({ allItemsArr, isLoading });

  useEffect(() => {
    (async () => {
      await dispatch(getItemsArr());
    })();
  }, []);

  return (
    <Box id='product-view-wrapper'>
      <Container id='product-list-container'>
        <h1>{isLoading}</h1>
        <Box>
          {allItemsArr?.map((item) => (
            <ItemCard key={item.asin} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProductView;
