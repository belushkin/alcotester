import { makeStyles } from '@material-ui/core/styles';
import { 
  Box,
  FormControl, 
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 230,
  },
}));

export default function DurationDrinkSlider(props) {
  const classes = useStyles();

  return (
    <Box component="div" mb={3}>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-duration-label">Як довго пили?</InputLabel>
        <Select
          labelId="select-duration-label"
          id="select-duration"
          value={props.value}
          onChange={props.onChange}
        >
          {
            Array(25).fill().map((_, i) => <MenuItem key={i} value={i}>{i} годин</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
