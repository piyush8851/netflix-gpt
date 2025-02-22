import React from 'react';
import '../App.css';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");

    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="Netflix Logo" 
      />
      {user && <div className='flex p-2'>
        {user && user.photoURL ? (
          <img className='w-[48px] h-[48px]' src={user.photoURL} alt="User Icon" />
        ) : (
          <img className='w-[48px] h-[48px]' src="default-profile-pic-url" alt="Default Icon" />
        )}
        <button onClick={handleSignOut} className= 'font-bold text-white px-2'>Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
