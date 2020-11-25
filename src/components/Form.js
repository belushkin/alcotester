import React, { useState } from 'react';
import BodyWeightSlider from './weight/BodyWeightSlider';
import DrinkSelectAndSlider from './drink/DrinkSelectAndSlider';
import SnackSelect from './snack/SnackSelect';
import DurationDrinkSlider from './duration/DurationDrinkSlider';
import TimePassedSlider from './time/TimePassedSlider';

import { 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
    Divider,
    Button,
  } from '@material-ui/core';

import Box from '@material-ui/core/Box';

export default function Form() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(70);
  const [drinks, setDrinks] = useState([{
    drink:4.0,
    amount:500
  }]);
  const [snack, setSnack] = useState(1);
  const [duration, setDuration] = useState(3);
  const [time, setTime] = useState(12);

  let onAddDrink = () => {
    setDrinks([...drinks, {
      drink:4.0,
      amount:500
    }]);
  }

  // https://stackoverflow.com/questions/29537299/react-how-to-update-state-item1-in-state-using-setstate
  let onChangeDrink = (e, value, i) => {
    let _drinks = [...drinks];
    let drink = {..._drinks[i]};
    drink.drink = value.props.value;
    _drinks[i] = drink;
    setDrinks(_drinks);
  }

  let onChangeDrinkAmount = (e, value, i) => {
    let _drinks = [...drinks];
    let drink = {..._drinks[i]};
    drink.amount = value;
    _drinks[i] = drink;
    setDrinks(_drinks);
  }

  let onDeleteDrink = (e, value, i) => {
    let _drinks = [...drinks];
    _drinks.splice(i, 1);
    setDrinks(_drinks);
  }

  return (
    <form>
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

      <Box component="div" mt={3}>
        <FormControl component="fieldset">
          <BodyWeightSlider 
            value={weight} 
            onChange={(e, value) => setWeight(value)}
          ></BodyWeightSlider>
        </FormControl>
      </Box>

      {drinks.map((item, index) => (
        <DrinkSelectAndSlider 
          key={index}
          index={index}
          drink={item['drink']} 
          amount={item['amount']} 
          onChange={(e, value) => onChangeDrink(e, value, index)}
          onDelete={(e, value) => onDeleteDrink(e, value, index)}
          onAdd={() => onAddDrink()}
          onChangeDrinkAmount={(e, value) => onChangeDrinkAmount(e, value, index)}
        ></DrinkSelectAndSlider>
      ))}

      <Box component="div" mt={4}>
        <Divider />
      </Box>

      <SnackSelect
        snack={snack} 
        onChange={e => setSnack(e.target.value)}
      ></SnackSelect>
      
      <Box component="div" mt={4}>
        <FormControl component="fieldset">
          <DurationDrinkSlider 
            value={duration} 
            onChange={(e, value) => setDuration(value)}
          ></DurationDrinkSlider>
        </FormControl>
      </Box>

      <Box component="div" mt={2}>
        <FormControl component="fieldset">
          <TimePassedSlider 
            value={time} 
            onChange={(e, value) => setTime(value)}
          ></TimePassedSlider>
        </FormControl>
      </Box>

      <Box component="div" mt={1}>
        <Button variant="contained" color="primary">Розрахувати</Button>
      </Box>
    </form>
  );
}
