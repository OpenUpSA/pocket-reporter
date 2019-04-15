import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';

const Modal = props => {
  const { open, closeAction, title, action } = props;

  return (
    <Dialog
      {...{ open }}
      TransitionComponent={Zoom}
      onClose={closeAction}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Warning!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span>If you delete</span>
          <strong>{`' ${title} '`}</strong>
          <span>
            it will be removed from your stories. In addition you will not be able to recover it at
            a future date.
          </span>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAction}>Cancel</Button>
        <Button onClick={action} color="secondary" variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
