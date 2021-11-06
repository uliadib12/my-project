import React from 'react'
import { useState } from 'react'
import {Link , useLocation} from 'react-router-dom'
//icon
import { AiFillDashboard } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { MdPersonSearch } from 'react-icons/md'

function Sidebar(props) {
    const state = {home:false,users:false,about:false} //state all false
    const [border, setborder] = useState(state) // state current sidebare
    const location = useLocation() // lokasi

    //handler buat ui route sidebar
    const onclickHandler = (value)=>
        setborder({state,[value]:true})

    //handler jika user input url manual
    if(location.pathname.includes("/home")){
        if(!(border.home))
        setborder({state,home:true})
    }
    if(location.pathname.includes("/users")){
        if(!(border.users))
        setborder({state,users:true})
    }
    if(location.pathname.includes("/about")){
        if(!(border.about))
        setborder({state,about:true})
    }

    return (
        <>
            <div className="flex flex-col border-2 left-0 h-full fixed justify-center bg-white">
                <Menubar to={"/home"} text={<AiFillDashboard size={25} className="w-20"/>} select={border.home} onClick={()=>{onclickHandler("home")}}/>
                <Menubar to={"/users"} text={<FaUserAlt size={25} className="w-20"/>} select={border.users} onClick={()=>{onclickHandler("users")}}/>
                <Menubar to={"/about"} text={<MdPersonSearch size={25} className="w-20"/>} select={border.about} onClick={()=>{onclickHandler("about")}}/>
            </div>
        </>
    )
}

function Menubar(props){
    return(
        <div className={`flex items-center border-r-2 w-20 justify-center cursor-pointer mb-12 hover:text-blue-400 hover:border-blue-500 ${props.select ? "border-blue-500" : "border-gray-300"} ${props.className}`} onClick={props.onClick}><Link to={props.to}>{props.text}</Link></div>
    )
}

export default Sidebar