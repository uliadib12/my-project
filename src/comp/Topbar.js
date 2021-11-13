import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../config-firebase'
import avatar from '../assets/image/avatar-placeholder.png'
import { getAuth } from 'firebase/auth'
import { doc ,getDoc } from 'firebase/firestore'
import { firestore } from "../config-firebase"

export function Topbar(props) {
    const history = useHistory()
    const [firebaseAvatar, setfirebaseAvatar] = useState(false)
    const [imgurl, setimgurl] = useState("")

    const HandlerLogOut = ()=>{
        auth.signOut()
        history.push("/login")
    }
    
    useEffect(()=>{
    const auth = getAuth();
    const user = auth.currentUser;
    const docRef = doc(firestore, `${user.uid}`, "avatar");
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        setimgurl(`${docSnap.data().url}`)
        setfirebaseAvatar(true)
      }
    })

    },[])

    return (
        <>
            <div className="flex items-center justify-center absolute w-full border-2 bg-white h-14">{props.children}
            <div onClick={HandlerLogOut} className ="block absolute right-5 cursor-pointer hover:text-red-400">LogOut</div>
            <div onClick={()=>{history.push("/users")}} className ={`block overflow-hidden rounded-full absolute left-5 cursor-pointer bg-gray-600 ${firebaseAvatar === true ? "" : "animate-pulse"}`}>
                <img className="w-9 h-9" src={firebaseAvatar === true ? imgurl : avatar}/>
                </div>
            </div>
        </>
    )
}
