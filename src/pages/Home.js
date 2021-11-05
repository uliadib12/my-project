import React from 'react';
import '../body.css';
import { Topbar } from '../comp/Topbar';

export function Home(props) {

    return (
    <>  
        <Topbar>
            <div className="flex items-center hover:border-blue-500 cursor-pointer mr-8 border-b-2 h-full">Overview</div>
            <div className="flex items-center hover:border-blue-500 cursor-pointer mr-8 border-b-2 h-full">Gallery</div>
        </Topbar>
        <div className="body">
            <h2 className>Home</h2>
        </div> 
    </>
    )
}