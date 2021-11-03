import React from 'react'

export function Sidebar(props) {
    

    return (
        <>
            <div className="border-2 left-0 h-full fixed py-3">
                <Menubar/>
            </div>
        </>
    )
}

function Menubar(props){
    return(
        <div className="flex border-r-4 border-blue-500 w-20 justify-center">Menu</div>
    )
}
