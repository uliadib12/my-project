const Initialstate = {
    sidebarDisplay:true
}

export const SidebarReducer = (state=Initialstate, action) => {
    switch(action.type){
        case "SET_SIDEBAR_TRUE":
            return{
                ...state,
                sidebarDisplay:true
            }
        case "SET_SIDEBAR_FALSE":
            return{
                ...state,
                sidebarDisplay:false
            }
        default:
            return state
    }
}