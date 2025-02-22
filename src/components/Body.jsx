import React, { useEffect } from 'react'
import Login from './login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firbase'
import {useDispatch} from "react-redux"
import {addUser, removeUser} from "../utils/userSlice"


const Body = () => {
  const dispatch = useDispatch(); 

    const appRouter = createBrowserRouter([
        {
          path:'/',
          element: <Login />
        },{
          path:'/browse',
          element: <Browse />
        }
      ]);
      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          } else {
            // user Signed Out
            dispatch(removeUser());
          }
          
        });
      },[dispatch]);
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
