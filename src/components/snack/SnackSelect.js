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

export default function SnackSelect(props) {
  const classes = useStyles();

  return (
    <Box component="div" mt={2}>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-snack-label">Чи була закуска?</InputLabel>
        <Select
          labelId="select-snack-label"
          id="select-snack"
          value={props.snack}
          onChange={props.onChange}
        >
          <MenuItem value={0}>Ні, не було</MenuItem>
          <MenuItem value={1}>Так, середня</MenuItem>
          <MenuItem value={2}>Так, добряча</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
