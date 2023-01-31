import React from 'react'
import FormComponent from './FormComponent'
import Notice from './Notice'
import TestLink from './TestLink'

const Home = () => {
  return (
    <div style={{backgroundColor:"#eef2fe",paddingBottom:'20px'}}>
      <Notice></Notice>
      <div style={{margin:"auto",maxWidth:"1340px",padding:"0 30px",marginTop:"50px"}}>
      <TestLink></TestLink>
     
      <FormComponent></FormComponent>
      
     
      </div>      
     
    </div>
  )
}

export default Home