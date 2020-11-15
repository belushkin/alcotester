import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Form from './Form';

// 
// import SimpleSelect from './components/SelectDrink';
// import SimpleSelect1 from './components/SelectSnack';
// import FormPropsTextFields from './components/AmountOfDrink';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        container 
        spacing={3}
        direction="column-reverse"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Header></Header>
          <Form></Form>
        </Grid>
      </Grid>
    </div>
  );
}
