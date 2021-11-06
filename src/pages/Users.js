import React from 'react'
import '../body.css';
import { Topbar } from '../comp/Topbar';

export function Users(props) {

    return (
        <>
          <Topbar/>
          <div className="body">
            <h2>Users</h2>
          </div>
        </>
    )
}
