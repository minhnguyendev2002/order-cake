import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button'; 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  bgcolor: 'background.paper', 
  boxShadow: 24,
  borderRadius: 2.5,
  p: 4,
  minWidth:"40vw"
};

export default function TransitionsModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  return (
    <>
      <Button className={props.class}   onClick={handleOpen}>{props.icon}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            {props.content_modal}    
            <Button variant="outlined"   className="cancel mr-3 float-right close_Modal" onClick={handleClose} >{props.denyText}</Button>
           </Box>
        </Fade>
      </Modal>
    </>
  );
}
