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
    gender: "mail",
    weight: 70
  };
  handleChange = e => {
    console.log(e.target)
    this.setState({ gender: e.target.value });
  };
  render() {
    const { gender, weight } = this.state;
    return (
      <FormControl component="fieldset" name="gender">
        <FormLabel component="legend">Оберіть свою стать:</FormLabel>
        <RadioGroup 
          onChange={this.handleChange} 
          value={gender}
          row 
          aria-label="gender" 
        >
        <FormControlLabel
          value="mail"
          control={<Radio color="primary"/>}
          label="Чоловік"
        />
        <FormControlLabel
          value="femail"
          control={<Radio color="primary"/>}
          label="Жінка"
        />
        </RadioGroup>
        <Box component="span" mt={3}>
          <BodyWeightSlider 
            onChange={this.handleChange}
          >
          </BodyWeightSlider>
        </Box>
        <Button variant="contained" color="primary">Розрахувати</Button>
      </FormControl>
    );
  }
}


// export default class Form extends Component {
//   state = { 
//     gender: "mail" 
//   };

//   handleChange = e => {
//     this.setState(
//       { selected: e.target.value }
//     );
//   };

//     // constructor(props) {
//     //   super(props);
//     //   this.state = {
//     //     gender: "mail",
//     //   };
  
//     //   this.handleInputChange = this.handleInputChange.bind(this);
//     // }
  
//     // handleInputChange(event) {
//     //   const target = event.target;
//     //   const value = target.type === 'checkbox' ? target.checked : target.value;
//     //   const name = target.name;
  
//     //   this.setState({
//     //     [name]: value
//     //   });
//     // }
  
//   render() {
//     const { gender } = this.state;
//     return (
//       <FormControl component="fieldset" name="gender">
//         <FormLabel component="legend">Оберіть свою стать:</FormLabel>
//         <RadioGroup 
//           // row 
//           // aria-label="gender" 
//           value={gender}
//           onChange={this.handleChange}
//         >
//           <FormControlLabel 
//             value="male" 
//             control={<Radio color="primary"/>} 
//             label="Чоловік" 
//           />
//           <FormControlLabel 
//             value="female" 
//             control={<Radio color="primary"/>} 
//             label="Жінка" 
//           />
//         </RadioGroup>
//         {/* <BodyWeightSlider></BodyWeightSlider> */}
//         {/* 
//         <SimpleSelect></SimpleSelect>
//         <FormPropsTextFields></FormPropsTextFields>
//         <SimpleSelect1></SimpleSelect1> */}
//         {/*  */}
//     </FormControl>
//       // <form>
//       //   <label>
//       //     Is going:
//       //     <input
//       //       name="isGoing"
//       //       type="checkbox"
//       //       checked={this.state.isGoing}
//       //       onChange={this.handleInputChange} />
//       //   </label>
//       //   <br />
//       //   <label>
//       //     Number of guests:
//       //     <input
//       //       name="numberOfGuests"
//       //       type="number"
//       //       value={this.state.numberOfGuests}
//       //       onChange={this.handleInputChange} />
//       //   </label>
//       // </form>
//     );
//   }
// }
