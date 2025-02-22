import React,{useState, useRef} from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firbase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage]  =useState();
  const dispatch = useDispatch();

  const toggleSingInForm = () => {
    setIsSignIn(!isSignIn);
  }
  const handleButtonClick = () => {
    //Validate form
    const msg = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(msg);
    if(msg) return;

    //Sign In / Sign Up

    if(!isSignIn){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/154680315?v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        }).catch((error) => {
          // An error occurred
          // ...
          setErrorMessage(error.message);
        });
        
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage);
    });
    }else{
      // sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
      const user = userCredential.user;
      
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }

  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-50 absolute rounded-lg '>
            <h1 className='font-bold text-3xl text-white py-4'>{ isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input ref={name} className='py-2 w-full my-4 bg-gray-700 input-box' type="text" placeholder='Name'/>)}
            {errorMessage != "Email ID is not vaild" ? "" : <p className='text-red-700 font-bold text-lg'>{errorMessage}</p>}
            <input ref={email} className='py-2 w-full my-4 bg-gray-700 input-box' type="text" placeholder='EmailAddress'/>
            {errorMessage != "Password is not vaild" ? "" : <p className='text-red-700 font-bold text-lg'>{errorMessage}</p>}
            <input ref={password} className='py-2 my-4 w-full bg-gray-700' type="password" placeholder='password'/>
            {errorMessage && errorMessage !== "Password is not vaild" && errorMessage !== "Email ID is not vaild" && <p className='font-bold text-lg text-red-700'>{errorMessage}</p>}
            <button className='py-4 my-6 bg-red-700 text-white rounded-lg w-full' onClick={handleButtonClick}>{ isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-white cursor-pointer' onClick={toggleSingInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
