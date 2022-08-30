import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr } from '../features/allItemsSlice';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ProductView: React.FC = () => {
  const allItemsArr = useAppSelector((state) => state.allItems.allItemsArr);
  const isLoading = useAppSelector((state) => state.allItems.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getItemsArr());
    })();
  }, []);

  return (
    <Box id='product-view-wrapper'>
      {isLoading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', marginX: '50vw' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box id='product-list-container'>
          <Box>
            {allItemsArr?.map((item) => (
              <ItemCard key={item.asin} item={item} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductView;
