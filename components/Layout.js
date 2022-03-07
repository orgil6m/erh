import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
const Layout =({children})=> {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout;