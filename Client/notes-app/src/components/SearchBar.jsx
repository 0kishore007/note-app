import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className='w-80 bg-slate-100 rounded-md px-4 flex items-center'>
      <input 
      type="text" 
      placeholder="Search Notes"  
      className='w-full rounded-md 
      bg-transparent text-xs py-[11px] outline-none' 
      value={ value } 
      onChange={ onChange }/>

      { value ? <IoMdClose 
        size={22}
        className='text-slate-500 mr-2 cursor-pointer'
        onClick={ onClearSearch }
      /> : null }

      <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' onClick={ handleSearch }/>
    </div>
  )
}

export default SearchBar