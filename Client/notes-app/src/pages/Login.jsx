import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);


  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border-[1.5px] rounded bg-white px-10 py-10 drop-shadow'>
          <form onSubmit= { () => {} }>
            <h4 className='text-2xl mb-10 text-center'>Login</h4>

            <input 
            type='text' 
            placeholder='Email' 
            className='input-box mb-5'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <PasswordInput value={ password }
            onChange={(e) => setPassword(e.target.value)} />
            <p className='mb-5'><input type="checkbox" className='w-auto me-2'/>Remember Me</p>

            <button className='btn-primary' type='submit'>Login</button>

            <p className='text-sm justify-center items-center flex gap-2 mt-5'>Don't have an account?
            <Link to='/signup' className='text-primary underline'>
              SignUp
            </Link> 
            </p>          
          </form>
        </div>
      </div>
    </>
  )
}

export default Login