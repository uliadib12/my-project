import React from 'react'
import '../body.css';
import { Topbar } from '../comp/Topbar';

export function About(props) {

    return (
        <>
            <Topbar/>
            <div className="body">
                <h2>About</h2>
            </div>
        </>
    )
}
