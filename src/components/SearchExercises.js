import React, { useState, useEffect } from 'react';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState(' ');

  useEffect(async () => {
    const bodyPartList = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exerciseOptions
    );
    setBodyPart(['all', ...bodyPartList]);
  }, []);

  async function handleSearch() {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='30px'
      // ml="100px"
      // p="10px"
      width='1100px'
    >
      <Typography fontSize='30px' fontWeight={700} color='red' borderBottom={5}>
        Awesome Exercises You should know
      </Typography>
      <Box mt='40px'>
        <TextField
          sx={{
            input: {
              width: '500px',
              height: '5px',
              border: 'none',
              borderColor: 'black',
              borderRadius: '5px',
              //color: "white",
            },
          }}
          //height="5px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          className='search_btn'
          variant='contained'
          color='error'
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollbar
          data={bodyPart}
          // bodyPart={bodyPart}
          // setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
