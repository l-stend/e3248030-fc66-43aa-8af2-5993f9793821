import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getItemsArr } from '../features/allItemsSlice';

const ProductView: React.FC = () => {
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
    <div>
      <h1>asd</h1>
      <h1>{isLoading}</h1>
      <div>
        {allItemsArr?.map((item) => (
          <h1>{item.manufacturer}</h1>
        ))}
      </div>
    </div>
  );
};

export default ProductView;
