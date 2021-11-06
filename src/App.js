import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home" component={()=><Home/>}>
        </Route>
        <Route path="/users" component={()=><Users/>}>
        </Route>
        <Route path="/about" component={()=><About/>} >
        </Route>
        <Route path="*" component={()=><NotFound/>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
