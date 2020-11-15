import React from 'react';

import BodyWeightSlider from './BodyWeightSlider';

import { 
    Button, 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel,
  } from '@material-ui/core';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: 'mail',
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <FormControl component="fieldset">
        <FormLabel component="legend">Оберіть свою стать:</FormLabel>
          <RadioGroup 
            row 
            aria-label="gender" 
            name="gender" 
            defaultValue="male" 
            onChange={this.handleInputChange}
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
          <BodyWeightSlider></BodyWeightSlider>
          {/* 
          <SimpleSelect></SimpleSelect>
          <FormPropsTextFields></FormPropsTextFields>
          <SimpleSelect1></SimpleSelect1> */}
          <Button>Розрахувати</Button>
      </FormControl>
        // <form>
        //   <label>
        //     Is going:
        //     <input
        //       name="isGoing"
        //       type="checkbox"
        //       checked={this.state.isGoing}
        //       onChange={this.handleInputChange} />
        //   </label>
        //   <br />
        //   <label>
        //     Number of guests:
        //     <input
        //       name="numberOfGuests"
        //       type="number"
        //       value={this.state.numberOfGuests}
        //       onChange={this.handleInputChange} />
        //   </label>
        // </form>
      );
    }
  }