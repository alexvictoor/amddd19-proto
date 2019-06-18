import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
      
    },
    notification: {
      backgroundColor: green[600],
    }
  }),
);

interface ConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export default function Confirmation(props: ConfirmationProps) {
  const classes = useStyles();

  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }
    props.onClose();
  }

  return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.open}
        autoHideDuration={2000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
          classes: {
            root: classes.notification
          }
        }}
        message={<span id="message-id" className={classes.notification}>Booking CONFIRMED!</span>}
        className={classes.notification}
        classes={{
          root: classes.close
        }}
        style={{ backgroundColor: green[600] }}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
  );
}