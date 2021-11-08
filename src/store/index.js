import { AuthReducer } from "./Reducer/AuthReducer";
import { createStore } from 'redux'

const store = createStore(AuthReducer)

export default store