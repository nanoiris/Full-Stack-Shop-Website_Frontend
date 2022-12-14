import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Logout({isLogout,closePopup,logout}) {
  
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    closePopup();
  };

  const logoutHandler = () => {
    logout();
    handleClose();
  }  
  
  React.useEffect(() => {
    setOpen(isLogout);
  }, [isLogout]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle><Typography variant="subtitle1">Are you sure to logout?</Typography></DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} >Cancel</Button>
          <Button onClick={logoutHandler}>Logout</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}