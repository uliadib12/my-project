import { SidebarReducer } from "./Reducer/sidebar-reducer";
import { createStore } from 'redux'

const store = createStore(SidebarReducer)

export default store