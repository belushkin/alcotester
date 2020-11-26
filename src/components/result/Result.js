import React from 'react';
import { 
  Backdrop,
  Button,
  CircularProgress,
  Box,
  Snackbar,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Result(props) {
    const classes = useStyles();

    const Messages = Object.freeze({
      NATURAL:              "Природний рівень алкоголю в організмі, кількість промілє алкоголю в крові: %s ‰, за руль можна вже!",
      MINOR_INTOXICATION:   "Алкоголь має незначний вплив, кількість промілє алкоголю в крові: %s ‰, за руль можна через %e годин!",
      SLIGHT_INTOXICATION:  "Легке сп'яніння, кількість промілє алкоголю в крові: %s ‰, за руль можна через %e годин!",
      MODERATE_INTOXICATION:  "Сп'яніння середнього ступеню, кількість промілє алкоголю в крові: %s ‰, за руль можна через %e годин!",
      SEVERE_INTOXICATION:  "Стан сильного сп'яніння, кількість промілє алкоголю в крові: %s ‰, за руль можна через %e годин!",
      CRITICAL_CONDITION:  "Алкогольне отруєння, критичний стан, кількість промілє алкоголю в крові: %s ‰, за руль можна через %e годин!",
    });

    const Severities = Object.freeze({
      ERROR:    "error",
      WARNING:  "warning",
      INFO:     "info",
      SUCCESS:  "success"
    });

    const [open, setOpenBackdrop] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [message, setMessage] = React.useState(Messages.NATURAL);
    const [severity, setSeverity] = React.useState(Severities.SUCCESS);

    const handleCloseBackdrop = () => {
      setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
      setOpenBackdrop(true);
      setOpenSnack(false);
      setTimeout(handleClickSnack, 1000);
    };
  
    const handleClickSnack = () => {
      calcAlco(props);
      setOpenBackdrop(false);
      setOpenSnack(true);
    };
  
    const handleCloseSnack = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnack(false);
    };

    const calcAlco = (props) => {
      console.log(props)
      
      let etanol = 0;
      props.drinks.forEach(drink => etanol += (drink.amount*(drink.drink/100)));
      
      // resorbsion
      etanol -= etanol*(props.snack/100)

      let vidmarkDistribution = (props.gender === "male") ? 0.7 : 0.6;
      let c = etanol/(props.weight * vidmarkDistribution);

      // elimination
      c -= (props.time + props.duration) * 0.15;

      c = (c < 0) ? 0 : c;

      let timeLeft = Math.ceil(c / 0.15);      

      if (c <= 0) {
        setMessage(Messages.NATURAL.replace("%s", (c).toFixed(2)));
        setSeverity(Severities.SUCCESS);
      } else if (c > 0 && c <= 0.3) {
        setMessage(Messages.MINOR_INTOXICATION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.INFO);
      } else if (c > 0.3 && c <= 0.5) {
        setMessage(Messages.MINOR_INTOXICATION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.INFO);
      } else if (c > 0.5 && c <= 1.5) {
        setMessage(Messages.SLIGHT_INTOXICATION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.INFO);
      } else if (c > 1.5 && c <= 2.5) {
        setMessage(Messages.MODERATE_INTOXICATION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.WARNING);
      } else if (c > 2.5 && c <= 3.0) {
        setMessage(Messages.SEVERE_INTOXICATION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.WARNING);
      } else if (c > 3.0) {
        setMessage(Messages.CRITICAL_CONDITION.replace("%s", (c).toFixed(2)).replace("%e", timeLeft));
        setSeverity(Severities.ERROR);
      }
    };

    return (
      <Box component="div" mt={1} className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleOpenBackdrop}>
            Розрахувати
          </Button>
          <Backdrop className={classes.backdrop} open={open} onClick={handleCloseBackdrop}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Snackbar 
            open={openSnack} 
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            autoHideDuration={6000} 
            onClose={handleCloseSnack}
          >
            <Alert onClose={handleCloseSnack} severity={severity}>
              {message}
            </Alert>
          </Snackbar>
      </Box>
    );
}
