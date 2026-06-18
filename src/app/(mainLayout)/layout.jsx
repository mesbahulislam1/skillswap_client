import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='max-w-[1250px] mx-auto'>
        <Navbar></Navbar>
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer></Footer>
    </div>
  )
}

export default layout