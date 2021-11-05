import React, { Children } from 'react'

export function Topbar(props) {
    

    return (
        <>
            <div className="flex items-center justify-center absolute w-full border-2 bg-white h-14">{props.children}</div>
        </>
    )
}
