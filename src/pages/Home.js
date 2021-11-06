import React from 'react';
import { Redirect, useRouteMatch, Switch, Route, useHistory, useLocation } from 'react-router';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';
import { TopbarList } from '../comp/Topbar-list';
import { useState } from 'react';
import IMG from '../assets/image/avatar-placeholder.png'

export function Home(props) {
    const [monthState, setmonthState] = useState(null)
    let {path} = useRouteMatch();
    const location = useLocation().pathname;
    const history = useHistory();

    const TopBarHandler = (val) =>{
        history.push(val)
    }

    return (
    <>  
        <Sidebar/>
        <Topbar>
            {/*display route Topbar home*/}
            <Switch>
                <Route exact path={`${path}/*`}>
                    <TopbarList onClick={()=>TopBarHandler(`${path}/overview`)} text="Overview" active={location === `${path}/overview` ? true : false }/>
                    <TopbarList onClick={()=>TopBarHandler(`${path}/gallery`)} text="Gallery" active={location === `${path}/gallery` ? true : false }/>
                </Route>
            </Switch>
        </Topbar>
        <div className="bg-gray-100 pb-10 min-h-screen">
            <div className="body">
                <h2 className="relative font-bold text-lg mt-7 ml-7">
                    Member's Photos
                    <div className="absolute inline-block right-24 top-3 w-60 h-2 bg-gray-300 rounded-2xl">
                        <div className="h-2 bg-blue-500 rounded-2xl w-1/2"></div>
                    </div>
                    <div className="absolute inline-block right-14 top-0">200</div>
                    <div className="absolute inline-block right-1 top-0 font-medium">insert</div>
                </h2>
                <div className="bg-white border-2 mt-4 ml-7 p-3">
                    {/*display route mainbar home*/}
                    <Switch>
                        <Route exact path={path}>
                            <Redirect from={`${path}`} to={`${path}/overview`} />
                        </Route>
                        <Route exact path={`${path}/overview`}>
                            <div>Overview</div>
                        </Route>
                        <Route exact path={`${path}/gallery`}>
                        <div className="flex justify-center">
                            <div style={monthState === 3 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 3 ? setmonthState(prev => prev = null) : setmonthState(3)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>3 Months</div>
                            <div style={monthState === 6 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 6 ? setmonthState(prev => prev = null) : setmonthState(6)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>6 Months</div>
                            <div style={monthState === 9 ? {backgroundColor: 'rgba(96, 165, 250, 1)',  color: 'rgba(255, 255, 255, 1)'} : {} } onClick={()=>{monthState === 9 ? setmonthState(prev => prev = null) : setmonthState(9)}} className={`select-none mr-5 text-md text-gray-600 font-medium p-1 rounded-md active:bg-blue-500 hover:bg-blue-400 cursor-pointer hover:text-white`}>9 Months</div>
                        </div>
                        <div className="p-7 pt-2">
                            <div className="container grid grid-cols-3 gap-5 mx-auto">
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                                <div className="w-full rounded">
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                                        alt="image"/>
                                </div>
                            </div>
                        </div>
                        </Route>
                        <Route exact path={`${path}/*`}>
                            <Redirect to={"/NotFound404"}/>
                        </Route>
                    </Switch>
                </div>
            </div> 
        </div>
    </>
    )
}
