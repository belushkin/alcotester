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

export default function TimePassedSelect(props) {
  const classes = useStyles();

  return (
    <Box component="div" mb={3}>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-time-label">Скільки пройшло часу після?</InputLabel>
        <Select
          labelId="select-time-label"
          id="select-time"
          value={props.value}
          onChange={props.onChange}
        >
          {
            Array(37).fill().map((_, i) => <MenuItem key={i} value={i}>{i} годин</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
