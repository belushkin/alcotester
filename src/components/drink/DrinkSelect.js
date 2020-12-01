import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Box,
  FormControl, 
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 130,
    margin: theme.spacing(0, 2, 3, 0),
  },
}));

export default function DrinkSelect(props) {
  const classes = useStyles();

  const deleteDrinkButton = (props.index === 0) ? "" : 
  <Button 
    variant="contained" 
    onClick={props.onDelete} 
    color="secondary"
  >Видалити напій</Button>;

  return (
    <Box component="div" mb={3}>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-drink-label">Напій</InputLabel>
        <Select
          labelId="select-drink-label"
          id="select-drink"
          value={props.drink}
          onChange={props.onChange}
        >
          <MenuItem value={0.5}>"Безалкогольне" пиво (0.5%)</MenuItem>
          <MenuItem value={0.7}>Кефір (0.7%)</MenuItem>
          <MenuItem value={0.9}>Квас (0.9%)</MenuItem>
          <MenuItem value={1.2}>Кумис (1.2%)</MenuItem>
          <MenuItem value={4.0}>Пиво легке (4%)</MenuItem>
          <MenuItem value={5.0}>Пиво звичайне / Сидр (5%)</MenuItem>
          <MenuItem value={6.0}>Пиво портер / темне (6%)</MenuItem>
          <MenuItem value={7.0}>Слабоалкогольні напої (7%)</MenuItem>
          <MenuItem value={8.0}>Пиво міцне (8%)</MenuItem>
          <MenuItem value={10.0}>Шампанське (10%)</MenuItem>
          <MenuItem value={12.0}>Вино (12%)</MenuItem>
          <MenuItem value={15.0}>Вермут (Martini...) (15%)</MenuItem>
          <MenuItem value={17.0}>М'які лікери (Baileys...) (17%)</MenuItem>
          <MenuItem value={20.0}>Портвейн (20%)</MenuItem>
          <MenuItem value={20.1}>Середні лікери (Malibu...) (20%)</MenuItem>
          <MenuItem value={30.0}>Ризькій бальзам... (30%)</MenuItem>
          <MenuItem value={35.0}>Міцні лікери (Jagermeister...) (35%)</MenuItem>
          <MenuItem value={38.0}>Текіла/Бренді/Бехеровка (38%)</MenuItem>
          <MenuItem value={39.0}>Ром/Джин (39%)</MenuItem>
          <MenuItem value={40.0}>Горілка (40%)</MenuItem>
          <MenuItem value={40.1}>Коньяк (40%)</MenuItem>
          <MenuItem value={40.2}>Віскі/Бурбон/Скотч (40%)</MenuItem>
          <MenuItem value={40.3}>Самбука (40%)</MenuItem>
          <MenuItem value={60.0}>Абсент легкий (60%)</MenuItem>
          <MenuItem value={69.0}>Абсент середній (69%)</MenuItem>
          <MenuItem value={70.0}>Настоянка глоду (70%)</MenuItem>
          <MenuItem value={80.0}>Абсент міцний (80%)</MenuItem>
          <MenuItem value={95.0}>Спирт (95%)</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <InputLabel id="select-volume-label">Об'єм (мл.):</InputLabel>
        <Select
          labelId="select-volume-label"
          id="select-volume"
          value={props.amount}
          onChange={props.onChangeDrinkAmount}
        >
          {
            Array(201).fill().map((_, i) => <MenuItem key={i} value={i*50}>{i*50}</MenuItem>)
          }
        </Select>
      </FormControl>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Button variant="contained" onClick={props.onAdd}>Додати напій</Button>
        </Grid>
        <Grid item>
          {deleteDrinkButton}
        </Grid>
      </Grid>
    </Box>
  );
}
