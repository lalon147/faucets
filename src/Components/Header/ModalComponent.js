import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius:"3px",
  boxShadow: 24,
  p: 4,
  padding:"14px 28px"
};

const ModalComponent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{color:"#9b1fe9",border:"2px solid #9b1fe9"}} onClick={handleOpen} variant="outlined"> <AccountBalanceWalletRoundedIcon></AccountBalanceWalletRoundedIcon>  Connect Wallet</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography fontSize={"1.5rem"} fontFamily={"Varela Round"} fontWeight={600} id="modal-modal-title" variant="h6" component="h2">
            Connect your wallet
          </Typography>
           <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
           <div style={{cursor:"pointer",backgroundColor:"whitesmoke",margin:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",width:"50%"}} >
           <img width={"100px"} height={"100px"} src="https://i.ibb.co/Fnvy5Kf/MetaMask.png" alt="MetaMask" border="0"/>
           <Typography color={"#9b1fe9"} fontSize={"18px"} fontFamily={"Varela Round"} fontWeight={600} id="modal-modal-title" variant="h6" component="h2">
            MetaMask
          </Typography>
          </div>
          <div style={{cursor:"pointer",backgroundColor:"whitesmoke",margin:"10px",padding:"20px",display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",width:"50%"}}>
          <img width={"100px"} height={"100px"} src="https://i.ibb.co/pPNy5sS/Wallet-Connect.png" alt="Wallet-Connect" border="0"/>
          <Typography color={"#9b1fe9"} fontSize={"18px"} fontFamily={"Varela Round"} fontWeight={600} id="modal-modal-title" variant="h6" component="h2">
            WalletConnect
          </Typography>
          </div>
           </div>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent