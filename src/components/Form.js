import React, { useState } from 'react';
import BodyWeightSlider from './BodyWeightSlider';
import DrinkInteractiveSliders from './drink/DrinkInteractiveSliders';

import { 
    Button, 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
  } from '@material-ui/core';

import Box from '@material-ui/core/Box';

export default function Form() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(70);

    return (
      <form>
        {/* ===========Radio group of sex selection===================== */}
        <Box component="div">
          <FormControl component="fieldset">
            <FormLabel component="legend">Оберіть свою стать:</FormLabel>
            <RadioGroup 
              onChange={e => setGender(e.target.value)} 
              value={gender}
              name="gender"
              row 
              aria-label="gender" 
            >
            <FormControlLabel
              value="male"
              control={<Radio color="primary"/>}
              label="Чоловік"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="primary"/>}
              label="Жінка"
            />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* ===========Body weight slider===================== */}
        <Box component="div" mt={3}>
          <FormControl component="fieldset">
            <BodyWeightSlider 
              value={weight} 
              onChange={(e, value) => setWeight(value)}
            ></BodyWeightSlider>
          </FormControl>
        </Box>

        {/* ===========Drink selection===================== */}
        <DrinkInteractiveSliders></DrinkInteractiveSliders>
      </form>
    );
  }

