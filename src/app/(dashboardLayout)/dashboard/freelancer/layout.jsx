import { ProctetedRole } from '@/lib/api/user/session';
import React from 'react'

const FreeProctetlayout = async({children}) => {
    await ProctetedRole("freelancer")
  return children;
}

export default FreeProctetlayout