import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

import Appbar from '../Components/Header/Appbar'

const Main = () => {
  return (
    <div>
        <Appbar></Appbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main