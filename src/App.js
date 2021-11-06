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
        <Route exact path="/home" component={()=><Home/>}>
        </Route>
        <Route exact path="/users" component={()=><Users/>}>
        </Route>
        <Route exact path="/about" component={()=><About/>} >
        </Route>
        <Route exact path="*" component={()=><NotFound/>}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
