import React from 'react'

export function TopbarList(props) {
    return (
        <>
            <div className={`flex items-center hover:border-blue-500 cursor-pointer mr-8 border-b-2 h-full ${props.active ? "border-blue-500" : ""} ${props.className}`}>{props.text}</div>
        </>
    )
}
