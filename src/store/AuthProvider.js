import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { auth } from '../config-firebase'
import { onAuthStateChanged } from "firebase/auth"

export function Authprovider(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
       const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch({type:"SET_AUTH",payload: user})
                console.log(user)
            } else {
                dispatch({type:"SET_AUTH",payload: null})
            }
          });
        return unsubcribe
    },[])
    
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    )
}
