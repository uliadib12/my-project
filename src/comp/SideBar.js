import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';

function Sidebar(props) {
    const route = ["/","/users","/about"] // set semua route
    const state = {home:false,user:false,aboutus:false} //state all false
    const [border, setborder] = useState(state) // state current sidebare
    const location = useLocation()

    //check kalo user masukin path sembarang
    if(!(route.includes(location.pathname))){
        props.setDisplayfalse()
    }
    if(route.includes(location.pathname)){
        props.setDisplaytrue()
    }
    
    //Check kalo user masukin path manual
    if(location.pathname=="/"){
        if(border.home ? false : true)
            setborder({state,["home"]:true})
    }
    if(location.pathname=="/users"){
        if(border.user ? false : true)
            setborder({state,["user"]:true})
    }
    if(location.pathname=="/about"){
        if(border.aboutus ? false : true)
            setborder({state,["aboutus"]:true})
    }

    //handler buat ui route sidebar
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
        <div className={`flex items-center border-r-4 w-20 justify-center cursor-pointer mb-12 hover:text-blue-400 hover:border-blue-500 ${props.className ? "border-blue-500" : "border-gray-300"}`} onClick={props.onClick}><Link to={props.to}>{props.text}</Link></div>
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