import { ProctetedRole } from '@/lib/api/user/session'
import React from 'react'

const AdminLayoutProtect = async({children}) => {
   await ProctetedRole("admin")
  return children
}

export default AdminLayoutProtect