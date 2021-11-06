import React from 'react'
import '../body.css';
import Sidebar from '../comp/SideBar';
import { Topbar } from '../comp/Topbar';

export function Users(props) {

    return (
        <>
          <Sidebar/>
          <Topbar/>
          <div className="body">
            <h2>Users</h2>
          </div>
        </>
    )
}
