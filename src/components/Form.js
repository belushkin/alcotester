import { Component } from "react";
import BodyWeightSlider from './BodyWeightSlider';
import { 
    Button, 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
  } from '@material-ui/core';

import Box from '@material-ui/core/Box';

export default class Form extends Component {
  state = { 
    gender: "male",
    weight: 70
  };
  
  handleChange = (event, value) => {
    const name = event.target.name === undefined ? 'weight' : event.target.name;
    this.setState({[name]: value});
  };

  render() {
    const { gender, weight } = this.state;
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Оберіть свою стать:</FormLabel>
        <RadioGroup 
          onChange={this.handleChange} 
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
        <Box component="span" mt={3}>
          <BodyWeightSlider 
            value={weight}
            onChange={this.handleChange}
          >
          </BodyWeightSlider>
        </Box>
        <Button variant="contained" color="primary">Розрахувати</Button>
      </FormControl>
    );
  }
}
