import React from 'react'
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);   

  const handleSignUp = async (e) => {
    await e.preventDefault();

    if(!name) {
      setError("Name is required");
      return;
    }
    
    if(!email){
      setError("Email is required");
      return;
    }

    if(!password){
      setError("Password is required");
      return;
    }

    if(password.length < 6){
      setError("Password must be atleast 6 characters");
      return;
    }

    setError(null);

    console.log(name, email, password)
  }

  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border-[1.5px] rounded bg-white px-10 py-10 drop-shadow'>
          <form onSubmit= { handleSignUp }>
            <h4 className='text-2xl mb-10 text-center'>SignUp</h4>
            <input 
            type='text' 
            placeholder='Name' 
            className='input-box mb-3'
            value={name}
            onChange={(e) => setName(e.target.value)} />

            <input 
            type='email' 
            placeholder='Email' 
            className='input-box mb-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <PasswordInput value={ password }
            onChange={(e) => setPassword(e.target.value)} />

            { error && <p className='text-red-500 pb-2 text-xs'>{ error }</p>}

            <button className='btn-primary' type='submit'>Sign Up</button>

            <p className='text-sm justify-center items-center flex gap-2 mt-4'>Already have an account?
            <Link to='/login' className='text-primary'>
              SignIn
            </Link> 
            </p>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default SignUp