import React from 'react';
import { Redirect, useRouteMatch, Switch, Route, useHistory, useLocation } from 'react-router';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';
import { TopbarList } from '../comp/Topbar-list';
import { useState } from 'react';

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
        <div className="bg-gray-100 h-screen">
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
                    <div className="flex justify-center items-center">
                        {/*display route mainbar home*/}
                        <Switch>
                            <Route exact path={path}>
                                <Redirect from={`${path}`} to={`${path}/overview`} />
                            </Route>
                            <Route exact path={`${path}/overview`}>
                                <div>Overview</div>
                            </Route>
                            <Route exact path={`${path}/gallery`}>
                                <div onClick={()=>setmonthState(3)} className={`mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white ${monthState === 3 ? "bg-gray-300" : ""}`}>3 Months</div>
                                <div onClick={()=>setmonthState(6)} className={`mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white ${monthState === 6 ? "bg-gray-300" : ""}`}>6 Months</div>
                                <div onClick={()=>setmonthState(9)} className={`mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white ${monthState === 9 ? "bg-gray-300" : ""}`}>9 Months</div>
                            </Route>
                            <Route exact path={`${path}/*`}>
                                <Redirect to={"/NotFound404"}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div> 
        </div>
    </>
    )
}