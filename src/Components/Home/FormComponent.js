import React, { useState } from 'react'

import WarningIcon from '@mui/icons-material/Warning';
import { Button } from '@mui/material';
import Table1 from './Table1';
import Table2 from './Table2';

const FormComponent = () => {
    const [table1,setTable1]=useState(true);
    const [blueColor,setBlueColor]=useState("blue");
    const [fontWhiteColor,setFontWhiteColor]=useState("white");
    const [fontBlackColor,setFontBlackColor]=useState("black");
    const [whiteColor,setWhiteColor]=useState("white")
    

    const handleWhite=()=>{
        setWhiteColor("white");
        setBlueColor("blue");
        setFontBlackColor("black");
        setFontWhiteColor("white");
        setTable1(true);
         
    }
    const handleBlue=()=>{
        setWhiteColor("blue");
        setBlueColor("white");
        setFontBlackColor("white");
        setFontWhiteColor("black");
        setTable1(false);
        
    }
    
  return (
    <div style={{border:"1px solid #eee",padding: "25px 20px"}}>
    <div style={{background:"#eef2fe",display:"flex",alignItems:"flex-start",padding:"10px"}}>
         <div><WarningIcon color={"warning"}></WarningIcon></div>
         <div style={{marginLeft:"10px"}}><p>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH</p></div>
    </div>
    <div>
      <p style={{color:"#9b1fe9",margin:"5px",fontFamily:"Varela Round",fontSize:"16px",fontWeight:'600'}}>Wallet address</p>
      <input style={{border:"1px solid #eee",width:"50%",padding:"10px",borderRadius:"3px",outline:"none"}} placeholder='Your wallet adress'></input>

    </div>    
    <div>
      <p style={{color:"#9b1fe9",margin:"5px",fontFamily:"Varela Round",fontSize:"16px",fontWeight:'600'}}>Request Type</p>
      <input style={{border:"1px solid #eee",marginRight:"5px",width:"25%",padding:"10px",borderRadius:"3px",outline:"none"}} placeholder='20 Test Link'></input>
      <input style={{border:"1px solid #eee",width:"25%",padding:"10px",borderRadius:"3px",outline:"none"}} placeholder='0.5 ETH'></input>
    </div>    
    <Button style={{marginTop:"10px",color:"white",background:"#9b1fe9"}} variant="contained">Send Request</Button>

    <div>
    <p style={{marginTop:"20px",fontFamily:"Varela Round",fontSize:"16px",fontWeight:'600'}}>Request History</p>
    <Button onClick={handleWhite} style={{marginTop:"10px",marginRight:"5px",color:`${fontWhiteColor}`,background:`${blueColor}`}} variant='contained'>ETH Transsaction History</Button>
    <Button onClick={handleBlue} style={{marginTop:"10px",color:`${fontBlackColor}`,background:`${whiteColor}`}} variant='contained'>Testlink Transsaction History</Button>
    </div>
    {
      table1 ?  <Table1></Table1> :<Table2></Table2>
        }
    </div>
  )
}

export default FormComponent