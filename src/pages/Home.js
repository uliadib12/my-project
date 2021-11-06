import React from 'react';
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';

export function Home(props) {
    return (
    <>  
        <Sidebar/>
        <Topbar>
            <div className="flex items-center hover:border-blue-500 cursor-pointer mr-8 border-b-2 h-full">Overview</div>
            <div className="flex items-center hover:border-blue-500 cursor-pointer mr-8 border-b-2 h-full">Gallery</div>
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
                        <div className="mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white">3 Months</div>
                        <div className="mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white">6 Months</div>
                        <div className="mr-5 text-sm text-gray-600 font-medium p-1 rounded-md hover:bg-blue-400 cursor-pointer hover:text-white">9 Months</div>
                    </div>
                </div>
            </div> 
        </div>
    </>
    )
}