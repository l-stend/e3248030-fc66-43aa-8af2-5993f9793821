import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr } from '../features/allItemsSlice';
import ItemCard from './ItemCard';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { Item } from '../utils/itemTypes';
import { JsxEmit } from 'typescript';

const ProductView = () => {
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
        <Box sx={{ display: 'flex', alignItems: 'center', margin: '10em' }}>
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

//  <Box id='product-view-wrapper'>
//       <Container id='product-list-container'>
//         <Box>
//           {allItemsArr?.map((item) => (
//             <ItemCard key={item.asin} item={item} />
//           ))}
//         </Box>
//       </Container>
//     </Box>
