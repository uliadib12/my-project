import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
//icon
import { AiFillDashboard } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { MdPersonSearch } from 'react-icons/md'

function Sidebar(props) {
    const route = ["/","/home","/users","/about"] // set semua route
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
    if(location.pathname==="/"){
        if(border.home ? false : true)
            setborder({state,home:true})
    }

    if(location.pathname==="/home"){
        if(border.home ? false : true)
            setborder({state,home:true})
    }
    if(location.pathname==="/users"){
        if(border.user ? false : true)
            setborder({state,user:true})
    }
    if(location.pathname==="/about"){
        if(border.aboutus ? false : true)
            setborder({state,aboutus:true})
    }

    //handler buat ui route sidebar
    const onclickHandler = (value)=>{
        setborder({state,[value]:true})
    }

    return (
        <>
            <div className="flex flex-col border-2 left-0 h-full fixed justify-center bg-white">
                <Menubar to={"/"} text={<AiFillDashboard size={25}/>} className={border.home} onClick={()=>{onclickHandler("home")}}/>
                <Menubar to={"/users"} text={<FaUserAlt size={25}/>} className={border.user} onClick={()=>{onclickHandler("user")}}/>
                <Menubar to={"/about"} text={<MdPersonSearch size={25} />} className={border.aboutus} onClick={()=>{onclickHandler("aboutus")}}/>
            </div>
        </>
    )
}

function Menubar(props){
    return(
        <div className={`flex items-center border-r-2 w-20 justify-center cursor-pointer mb-12 hover:text-blue-400 hover:border-blue-500 ${props.className ? "border-blue-500" : "border-gray-300"}`} onClick={props.onClick}><Link to={props.to}>{props.text}</Link></div>
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