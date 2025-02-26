import React, { useEffect } from 'react';
import '../App.css';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearchBtn = useSelector(store => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        
        // Corrected: Assigned photoURL directly instead of photoURL.USER_AVATAR

        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User signed out
        
        dispatch(removeUser());
        navigate("/");
      }

      // Unsubscribe when the component unmounts
      return () => unsubscribe(); 
      
    });
  }, [dispatch]);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col  md:flex-row justify-between bg-black '>
      <img 
        className='w-44 mx-auto md:mx-0'
        src={LOGO} 
        alt="Netflix Logo" 
      />
      {user && (
        <div className='flex p-2'>
          <button className='py-2 px-4 my-2 mx-4 bg-purple-800 text-white font-bold text-lg rounded-lg' onClick={handleGptSearchClick}>{ showGptSearchBtn ? "Home page" : "Search"}</button>
          {user.photoURL ? (
            // Corrected: Display user.photoURL directly
            <img className='w-[48px] h-[48px]' src={user.photoURL} alt="User Icon" />
          ) : (
            <img className='w-[48px] h-[48px]' src="default-profile-pic-url" alt="Default Icon" />
          )}
          <button onClick={handleSignOut} className='font-bold text-white px-2'>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
