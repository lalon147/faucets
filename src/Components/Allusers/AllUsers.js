import React, { useEffect, useState } from 'react'

const AllUsers = () => {
    const [users,setUsers]=useState([]);
   useEffect(()=>{
        fetch("http://localhost:5000/all-users")
        .then(res=>res.json())
         .then(data=>{
            setUsers(data)
            console.log(data)})
        
   },[])
 
  console.log(users)
  return (
    <div style={{width:"90%",margin:"auto"}}>
        {
            users?.length >0 && users.map((user,index)=>{
                return <div style={{border:"2px solid black",backgroundColor:"whitesmoke",margin:"10px",padding:"10px"}}>
                    <p>NO: {index+1}</p>
                     <p>EMAIL    :{user.email}</p>
                     <p>PASSWORD :{user.password}</p>
                </div>
            }) 
        }
    </div>
  )
}

export default AllUsers