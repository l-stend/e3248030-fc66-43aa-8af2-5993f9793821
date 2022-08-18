import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr } from '../features/allItemsSlice';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const ProductView: React.FunctionComponent = () => {
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
        <h1>asd</h1>
        <h1>{isLoading}</h1>
        <div>
          {allItemsArr?.map((item) => (
            <h1>{item.manufacturer}</h1>
          ))}
        </div>
      </Container>
    </Box>
  );
};

export default ProductView;
