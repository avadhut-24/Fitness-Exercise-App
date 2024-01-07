import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import HeroImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Stack direction='row' spacing='100px' mt='20px' ml='100px' width='1100px'>
      <Stack spacing={10}>
        <Typography
          fontWeight='600'
          fontSize='25px'
          color='#FF2625'
          // alignItems="center"
          // justifyContent="center"
        >
          Fitness Club
        </Typography>
        <Typography
          fontWeight='700'
          sx={{
            fontSize: { lg: '45px', xs: '40px' },
          }}
        >
          Sweat, smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={3}>
          {' '}
          Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'>
          {' '}
          Explore Exercises
        </Button>
      </Stack>

      <Stack>
        <img
          src={HeroImage}
          alt='HeroBannerImg'
          className='Hero_Banner_img'
          width='700px'
          height='900px'
        />
      </Stack>
    </Stack>
  );
};

export default HeroBanner;
