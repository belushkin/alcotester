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
    minWidth: 160,
  },
}));

export default function BodyWeightSelect(props) {
  const classes = useStyles();

  return (
    <Box component="div" mb={3}>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-weight-label">Маса тіла (кг):</InputLabel>
        <Select
          labelId="select-weight-label"
          id="select-weight"
          value={props.weight}
          onChange={props.onChange}
        >
          {
            Array(111).fill().map((_, i) => <MenuItem key={i} value={i+40}>{i+40} кг</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
