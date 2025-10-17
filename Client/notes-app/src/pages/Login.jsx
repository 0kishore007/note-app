import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SignUp from './SignUp'
import { Link } from 'react-router-dom'
import PasswordInput from '../components/PasswordInput'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    await e.preventDefault();

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

    // !email ? setError("Email is required") : setError("");
    // !password ? setError("Password is required") : setError("");
    // password.length < 6 ? setError("Password must be atleast 6 characters") : setError("");
    // setError("");
    console.log(email, password)
  }


  return (
    <>
      <Navbar />

      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border-[1.5px] rounded bg-white px-10 py-10 drop-shadow'>
          <form onSubmit= { handleLogin }>
            <h4 className='text-2xl mb-10 text-center'>Login</h4>

            <input 
            type='email' 
            placeholder='Email' 
            className='input-box mb-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />

            <PasswordInput value={ password }
            onChange={(e) => setPassword(e.target.value)} />

            { error && <p className='text-red-500 pb-2 text-xs'>{ error }</p>}

            <p className='mb-2 flex items-center text-gray-500 text-xs'><input type="checkbox" className='w-auto me-2'/>Remember Me</p>

            <button className='btn-primary' type='submit'>Login</button>

            <p className='text-sm justify-center items-center flex gap-2 mt-4'>Don't have an account?
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