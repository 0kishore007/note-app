import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex gap-3 items-center'>
        <div className='flex w-12 h-12 rounded-full bg-slate-200 text-slate-950 items-center justify-center font-medium'>
            { getInitials("Vinsmoke Sanji") }
        </div>

        <div> 
            <div className='text-sm font-medium'>Vinsmoke Sanji</div>
            <button className='btn-primary rounded-md text-sm underline text-slate-100' onClick={ onLogout }>Logout</button>    
        </div>
    </div>
  )
}

export default ProfileInfo