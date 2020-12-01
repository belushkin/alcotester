import React, { useState } from 'react';
import BodyWeightSelect from './weight/BodyWeightSelect';
import DrinkSelect from './drink/DrinkSelect';
import SnackSelect from './snack/SnackSelect';
import DurationDrinkSelect from './duration/DurationDrinkSelect';
import TimePassedSelect from './time/TimePassedSelect';
import Result from './result/Result';

import { 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
    Divider,
    Button,
    Container,
    Box,
  } from '@material-ui/core';

export default function Form() {
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(87);
  const [drinks, setDrinks] = useState([{
    drink:4.0,
    amount:500
  }]);
  const [snack, setSnack] = useState(20);
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
    <Box component="div">
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
            <BodyWeightSelect 
              weight={weight} 
              onChange={(e, value) => setWeight(value.props.value)}
            ></BodyWeightSelect>
          </FormControl>
        </Box>

        {drinks.map((item, index) => (
          <DrinkSelect 
            key={index}
            index={index}
            drink={item['drink']} 
            amount={item['amount']} 
            onChange={(e, value) => onChangeDrink(e, value, index)}
            onDelete={(e, value) => onDeleteDrink(e, value, index)}
            onAdd={() => onAddDrink()}
            onChangeDrinkAmount={(e, value) => onChangeDrinkAmount(e, value.props.value, index)}
          ></DrinkSelect>
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
            <DurationDrinkSelect 
              value={duration} 
              onChange={(e, value) => setDuration(value.props.value)}
            ></DurationDrinkSelect>
          </FormControl>
        </Box>

        <Box component="div" mt={2}>
          <FormControl component="fieldset">
            <TimePassedSelect 
              value={time} 
              onChange={(e, value) => setTime(value.props.value)}
            ></TimePassedSelect>
          </FormControl>
        </Box>

        <Result
          gender={gender}
          weight={weight}
          drinks={drinks}
          snack={snack}
          duration={duration}
          time={time}
        ></Result>
      </form>
    </Box>
  );
}
