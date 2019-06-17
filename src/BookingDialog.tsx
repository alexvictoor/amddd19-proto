import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog, { WithMobileDialog } from '@material-ui/core/withMobileDialog';
import { Suggestion } from './BookingApp';

export interface BookingDialog extends WithMobileDialog {
    suggestion: Suggestion;
    bookAction: () => void;
    cancelBooking: () => void;
}

function ResponsiveDialog(props: BookingDialog) {
  const { fullScreen } = props;

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={props.cancelBooking}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">BOOKING CONFIRMATION</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you confirm booking of seats {props.suggestion.seats.join(', ')} for a total price of {props.suggestion.totalPrice}€ ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.cancelBooking} color="primary">
            No
          </Button>
          <Button onClick={props.bookAction} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withMobileDialog()(ResponsiveDialog);