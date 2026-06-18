import SidebarNavigation from '@/components/SidebarNavigation'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <div className='flex gap-7 pt-15 md:pt-0  md:px-0'>
        <SidebarNavigation></SidebarNavigation>
        {children}
    </div>
    </div>
  )
}

export default layout