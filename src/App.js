import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Sidebar } from "./comp/SideBar";

function App() {
  const [SideBar, setSideBar] = useState(true)

  return (
    <Router>
      {SideBar && <Sidebar/>}
      <Switch>
        <Route path="/about" component={()=><About/>} >
        </Route>
        <Route path="/users" component={()=><Users/>}>
        </Route>
        <Route exact path="/" component={()=><Home/>}>
        </Route>
        <Route path="*" component={()=><NotFound setbar={setSideBar}/>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
