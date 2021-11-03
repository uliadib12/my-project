import React, { useEffect } from 'react'
import '../body.css';

export function NotFound(props) {
    useEffect(()=>{props.setbar(false)}
    ,[])
    return (
        <>
            <div className="body">
                <h1>Not Found 404</h1>  
            </div>
        </>
    )
}
