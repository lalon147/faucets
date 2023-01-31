import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectCurrency = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
    <FormControl  sx={{ m: 1, minWidth: 140, padding:"10px 12px" }}>
        <Select
          style={{fontFamily:"Varela Round",fontSize:"14px",cursor:"pointer"}}
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >

          <MenuItem value={"Arbitrum Rinkeby"}> <img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}}  src="https://i.ibb.co/T04ncRn/1-2.png" alt=""/>  Arbitrum Rinkeby</MenuItem>
          <MenuItem value={"Avalanche Fuji"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/qmbYRp7/2.png" alt=""/>Avalanche Fuji</MenuItem>
          <MenuItem value={"BNB Chain Testnet"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/r3mT5XB/3.png" alt=""/> BNB Chain Testnet</MenuItem>
          <MenuItem value={"Etherium Rinkeby"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/T04ncRn/1-2.png" alt=""/> Etherium Rinkeby</MenuItem>
          <MenuItem value={"Fantom Testnet"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/C1Q0pSC/5.png" alt=""/> Fantom Testnet</MenuItem>
          <MenuItem value={"Harmony Test"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/jZkK177/6.jpg" alt=""/> Harmony Test</MenuItem>
          <MenuItem value={"POA Network Sokol"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/ZhzjH1n/8.png" alt=""/> POA Network Sokol</MenuItem>
          <MenuItem value={"Polygon Mumbai"}><img style={{height: "15px",marginBottom: "-2px",marginRight: "8px",width: "15px"}} src="https://i.ibb.co/0nZdSvv/9.png" alt=""/> Polygon Mumbai</MenuItem>
          
        </Select>
      </FormControl>
  </div>
  )
  
}

export default SelectCurrency

