import { ProctetedRole } from '@/lib/api/user/session'
import React from 'react'

const Proctetlayout = async({children}) => {
    await ProctetedRole('client')
  return children
}

export default Proctetlayout