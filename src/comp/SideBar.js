import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { useEffect } from 'react';

function Sidebar(props) {
    const route = ["/","/users","/about"]
    const state = {home:false,user:false,aboutus:false}
    const [border, setborder] = useState(state)
    const location = useLocation()
    

        if(!(route.includes(location.pathname))){
            props.setDisplayfalse()
        }
        else if(route.includes(location.pathname)){
            props.setDisplaytrue()
        }


    const onclickHandler = (value)=>{
        setborder({state,[value]:true})
    }

    return (
        <>
            <div className="flex flex-col border-2 left-0 h-full fixed justify-center">
                <Menubar to={"/"} text={"Home"} className={border.home} onClick={()=>{onclickHandler("home")}}/>
                <Menubar to={"/users"} text={"User"} className={border.user} onClick={()=>{onclickHandler("user")}}/>
                <Menubar to={"/about"} text={"About Us"} className={border.aboutus} onClick={()=>{onclickHandler("aboutus")}}/>
            </div>
        </>
    )
}

function Menubar(props){
    return(
        <div className={`flex items-center border-r-4 w-20 justify-center cursor-pointer mb-12 hover:border-blue-500 ${props.className ? "border-blue-500" : "border-gray-300"}`} onClick={props.onClick}><Link to={props.to}>{props.text}</Link></div>
    )
}

const mapStateToProps = state => ({display: state.sidebarDisplay})

const mapDispatchToProps = (dispatch) => {
    return {
      setDisplaytrue: () => dispatch({type: "SET_SIDEBAR_TRUE"}),
      setDisplayfalse: () => dispatch({type: "SET_SIDEBAR_FALSE"})
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)