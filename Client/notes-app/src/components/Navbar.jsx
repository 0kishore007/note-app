import React from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login');
  }

  return (
    <div className='bg-white flex items-center justify-between py-5 px-7 drop-shadow'>
        <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

        <ProfileInfo onLogout={ onLogout} />
    </div>
  )
}

export default Navbar