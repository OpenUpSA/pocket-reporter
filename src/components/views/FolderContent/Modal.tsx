import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Zoom from '@material-ui/core/Zoom';

import { GreenButton } from './styled';

const Modal = props => {
  const { inputRef, open, closeAction, createAction } = props;

  return (
    <Dialog
      {...{ open }}
      fullWidth
      TransitionComponent={Zoom}
      onClose={closeAction}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Create a story</DialogTitle>
      <DialogContent>
        <DialogContentText>Please enter a title for your story:</DialogContentText>
        <TextField
          {...{ inputRef }}
          autoFocus
          fullWidth
          multiline
          margin="normal"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeAction}>Cancel</Button>
        <GreenButton onClick={createAction} variant="contained">
          Create
        </GreenButton>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
