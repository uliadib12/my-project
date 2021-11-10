import React from 'react'
import { useHistory } from 'react-router'
import { auth } from '../config-firebase'

export function Topbar(props) {
    const history = useHistory()

    const HandlerLogOut = ()=>{
        auth.signOut()
        history.push("/login")
    }
    

    return (
        <>
            <div className="flex items-center justify-center absolute w-full border-2 bg-white h-14">{props.children}
            <div onClick={HandlerLogOut} className ="block absolute right-5 cursor-pointer hover:text-red-400">LogOut</div>
            </div>
        </>
    )
}
