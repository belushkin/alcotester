import { makeStyles } from '@material-ui/core/styles';
import { 
  FormLabel, 
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function BodyWeightSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormLabel component="legend">Маса тіла (кг):</FormLabel>
      <Slider
        defaultValue={70}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="on"
        step={1}
        marks
        min={40}
        max={150}
      />
    </div>
  );
}
