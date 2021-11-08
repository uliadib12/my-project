const Initialstate = {
    user: null
}

export const AuthReducer = (state=Initialstate, action) => {
    switch(action.type){
        case "SET_AUTH":
            return{
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}