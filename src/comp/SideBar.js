import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Sidebar(props) {
    const state = {home:false,user:false,aboutus:false}
    const [border, setborder] = useState(state)


    const onclickHandler = (value)=>{
        setborder({state,[value]:true})
    }

    return (
        <>
            <div className="flex flex-col border-2 left-0 h-full fixed justify-center">
                <Link to="/"><Menubar text={"Home"} className={border.home} onClick={()=>{onclickHandler("home")}}/></Link>
                <Link to="/users"><Menubar text={"User"} className={border.user} onClick={()=>{onclickHandler("user")}}/></Link>
                <Link to="/about"><Menubar text={"About Us"} className={border.aboutus} onClick={()=>{onclickHandler("aboutus")}}/></Link>
            </div>
        </>
    )
}

function Menubar(props){
    return(
        <div className={`flex items-center border-r-4 w-20 justify-center cursor-pointer mb-10 hover:border-blue-500 ${props.className ? "border-blue-500" : "border-gray-300"}`} onClick={props.onClick}>{props.text}</div>
    )
}
