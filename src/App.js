import './App.css';
import { 
    Button, 
    FormControl, 
    Radio, 
    FormLabel, 
    RadioGroup, 
    FormControlLabel
} from '@material-ui/core';

import DiscreteSlider from './components/Slider';
import SimpleSelect from './components/SelectDrink';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <p>Алкотестер онлайн</p>
        </header>

        <FormControl component="fieldset">
            <FormLabel component="legend">Оберіть свою стать:</FormLabel>
            <RadioGroup row aria-label="gender" name="gender">
                <FormControlLabel 
                    value="female" 
                    control={<Radio />} 
                    label="Жінка" 
                />
                <FormControlLabel 
                    value="male" 
                    control={<Radio />} 
                    label="Чоловік" 
                />
            </RadioGroup>
            <DiscreteSlider></DiscreteSlider>
            <SimpleSelect></SimpleSelect>
            <Button>Розрахувати</Button>
        </FormControl>
    </div>
  );
}

export default App;
