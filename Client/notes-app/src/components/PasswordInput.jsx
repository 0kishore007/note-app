import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const PasswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className='flex border bg-transparent rounded px-5 mb-3 items-center'>
            <input 
            type={ isShowPassword ? 'text' : 'password' }
            value={ value }
            onChange={ onChange }
            placeholder={ placeholder || 'Password' }
            className='w-full outline-none py-3 text-sm bg-transparent'
            />

            { isShowPassword ? <FaRegEye
                size={22}
                className='text-primary cursor-pointer'
                onClick={() => toggleShowPassword()}
            /> : <FaRegEyeSlash 
                size={22}
                className='text-primary cursor-pointer'
                onClick={() => toggleShowPassword()}    
            />
            }
        </div>

        
    )
}

export default PasswordInput