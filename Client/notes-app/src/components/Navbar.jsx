import React from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar';

const Navbar = () => {

  const [searchValue, setSearchValue] = React.useState('');

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login');
  }

  const handleSearch = () => {
    
  }

  const onClearSearch = () => {
    setSearchValue(''); 
  }

  return (
    <div className='bg-white flex items-center justify-between py-5 px-7 drop-shadow'>
        <h1 className='text-xl font-medium text-black py-2'>Notes</h1>

        <SearchBar 
        value= { searchValue }
        onChange={ (e) => setSearchValue(e.target.value) }
        handleSearch={ handleSearch }
        onClearSearch={ onClearSearch }/>

        <ProfileInfo onLogout={ onLogout} />
    </div>
  )
}

export default Navbar