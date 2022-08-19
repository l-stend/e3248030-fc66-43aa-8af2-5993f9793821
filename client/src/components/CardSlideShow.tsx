import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CardSlideShowProps {
  imagesCSV: string;
}

const CardSlideShow = ({ imagesCSV }: CardSlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [picsArr, setPicsArr] = useState<string[] | null>(null);

  useEffect(() => {
    setPicsArr(imagesCSV.split(','));
  }, [imagesCSV]);

  const handleForwardClick = () => {
    picsArr &&
      (currentIndex <= picsArr.length - 1
        ? setCurrentIndex(currentIndex + 1)
        : setCurrentIndex(0));
  };

  const handleBackClick = () => {
    picsArr &&
      (currentIndex >= picsArr.length - 1
        ? setCurrentIndex(currentIndex + -1)
        : setCurrentIndex(picsArr.length - 1));
  };

  return (
    <Box
      id='slide-wrapper'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxHeight: '35vh',
        maxWidth: '30vw',
        margin: '1.5em',
        paddingX: '1em',
      }}
    >
      <IconButton onClick={() => handleBackClick()}>
        <ArrowBackIosIcon />
      </IconButton>
      <img
        src={`https://m.media-amazon.com/images/I/${
          picsArr ? picsArr[currentIndex] : ''
        }`}
        alt='Ooops, image not found'
        style={{
          objectFit: 'fill',
          maxHeight: '35vw',
          maxWidth: '30vw',
          borderRadius: '4px',
        }}
      />
      <IconButton onClick={() => handleForwardClick()}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CardSlideShow;
