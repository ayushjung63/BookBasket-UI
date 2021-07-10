import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function OrderDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>


        <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want  to order <b>{this.state.book.title}</b> by <i>{this.state.book.author}</i> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>this.orderBooks(e)} color="primary">
            Order Now
          </Button>
          <Button onClick={(e)=>this.handleClose(e)} color="secondary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

     
    </div>
  );
}