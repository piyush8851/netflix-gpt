import React,{useState} from 'react'
import Header from './header'

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const toggleSingInForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-cache-19j6xtr"></img>
        </div>
        <form className='w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-50 absolute rounded-lg '>
            <h1 className='font-bold text-3xl text-white py-4'>{ isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && (<input className='py-2 w-full my-4 bg-gray-700 input-box' type="text" placeholder='Name'/>)}
            <input className='py-2 w-full my-4 bg-gray-700 input-box' type="text" placeholder='EmailAddress'/>
            <input className='py-2 my-4 w-full bg-gray-700' type="text" placeholder='password'/>
            <button className='py-4 my-6 bg-red-700 text-white rounded-lg w-full'>{ isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 text-white cursor-pointer' onClick={toggleSingInForm}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login
