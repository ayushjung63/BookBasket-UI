import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Logout extends Component {

	state={
		open:''
	}
	handleLogout=(e)=>{
        e.preventDefault();
        localStorage.clear();
        window.location.href='/'
    }

     handleClickOpen = (e) => {
    e.preventDefault();
  this.setState({open:true})
  };
   handleClose = (e) => {
    e.preventDefault();
       this.setState({open:false})
  };

	render() {
		return (
			<div>
				<Button  variant="contained" color="secondary" onClick={(e)=>this.handleClickOpen(e)}>Logout</Button>

				 <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='lg'
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want  Logout ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e)=>this.handleLogout(e)} color="secondary">
           Logout
          </Button>
          <Button onClick={(e)=>this.handleClose(e)} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
			</div>
		);
	}
}
