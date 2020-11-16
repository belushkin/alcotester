import React, { useState } from 'react';
import { Component } from "react";
import BodyWeightSlider from './BodyWeightSlider';
import { 
    Button, 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
    InputLabel,
    Select,
    MenuItem,
  } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
        {/* <Box component="div" mt={3}>
          <FormControl component="fieldset">
            <InputLabel component="legend" id="select-drink-label">Напій</InputLabel>
            <Select
              labelId="select-drink-label"
              id="select-drink"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={0.5}>"Безалкогольне" пиво (0.5%)</MenuItem>
              <MenuItem value={0.7}>Кефір (0.7%)</MenuItem>
              <MenuItem value={0.9}>Квас (0.9%)</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

          {/* <Box component="span" mt={3}>
            <BodyWeightSlider value={weight} onChange={this.handleChange}></BodyWeightSlider>
          </Box>
          <Box component="span" mt={3}>
            
          </Box>
          <Button variant="contained" color="primary">Розрахувати</Button> */}
        

        

      </form>
    );
  }

