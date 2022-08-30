import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { setLocalList } from '../features/allItemsSlice';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import productsList from '../utils/products.json';

const LocalProductView: React.FC = () => {
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
