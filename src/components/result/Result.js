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
    const [open, setOpenBackdrop] = React.useState(false);
    const [openSnack, setOpenSnack] = React.useState(false);

    const handleCloseBackdrop = () => {
      setOpenBackdrop(false);
    };
    const handleOpenBackdrop = () => {
      setOpenBackdrop(true);
      setOpenSnack(false);
      setTimeout(handleClickSnack, 1000);
    };
  
    const handleClickSnack = () => {
      setOpenSnack(true);
      setOpenBackdrop(false);
    };
  
    const handleCloseSnack = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnack(false);
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
            <Alert onClose={handleCloseSnack} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
      </Box>
    );
}
