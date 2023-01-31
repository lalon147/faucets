import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
const Register = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault()
      const email=e.target.email.value;
      const password=e.target.password.value;
      const time=new Date();
      const user={email,password,time}
      console.log(email,password)
      fetch("https://faucets-server.vercel.app/users",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(user)
      }).then(res=>res.json()).then(data=>{
        if(data.acknowledged){
                navigate("/")
        }
        console.log(data)})
  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"50px auto"}}>
        <div style={{width:"400px",background:"#eef2fe",padding:"20px"}}>
         <h1>Sign Up</h1>      
         <form onSubmit={handleSubmit}>
         <p style={{marginBottom:"5px"}}>Email</p>
         <input required type="email" name="email" style={{background:"transparent",width:"100%",border:"none",borderBottom:"1px solid #b8b4b4"}} placeholder='Enter Your Email'></input>
         <p style={{margin:"30px 0 5px 0"}}>Password</p>
         <input required type="password" name="password" style={{background:"transparent",width:"100%",border:"none",borderBottom:"1px solid #b8b4b4"}} placeholder='Enter Your Email'></input>
         <Button type="submit" style={{width:"100%",marginTop:"20px",color:"white",background:"#9b1fe9"}} variant="contained">Sign Up</Button>
         </form>
         <p style={{fontWeight:"700",textAlign:"center",marginTop:"10px"}}>Already Have An Account ? <Link to="/login" style={{color:"#9b1fe9",fontWeight:"600",textDecoration:"none"}}>Login</Link></p>
         <p style={{textAlign:"center",fontWeight:"600"}}>OR</p>
          <div style={{display:"flex",justifyContent:"center"}}>
         
          <LoginSocialGoogle
        client_id={"735417446613-6f8f9l6hcn2krhhu9hrtqajsboh4813k.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
          return navigate("/")
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
       <GoogleIcon style={{marginRight:"10px",cursor:"pointer"}}></GoogleIcon>
      </LoginSocialGoogle>
          
      <LoginSocialFacebook 
          appId='5723213841109506'
          onResolve={(res)=>{
              console.log(res);
              return navigate("/")
          }}
          onReject={(error)=>{
            console.log(error)
          }}
         >

         <FacebookIcon style={{cursor:"pointer"}}></FacebookIcon>
         </LoginSocialFacebook>
          </div>
      </div>
      </div>
  )
}

export default Register