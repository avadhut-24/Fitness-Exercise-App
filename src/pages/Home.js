import React from 'react';
import { Stack } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from 'react';

const Home = () => {
  const [exercises, setExercises] = useState('all');
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <Stack>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises />
    </Stack>
  );
};

export default Home;
