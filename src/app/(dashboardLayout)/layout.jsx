import SidebarNavigation from '@/components/SidebarNavigation'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-7'>
        <SidebarNavigation></SidebarNavigation>
        {children}
    </div>
  )
}

export default layout