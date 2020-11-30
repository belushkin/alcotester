import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Container,
  Box
} from '@material-ui/core';

import Header from './Header';
import Form from './Form';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Grid 
        container 
        direction="column-reverse"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Header></Header>
          <Form></Form>
      </Grid>
    </Grid>
  );
}
