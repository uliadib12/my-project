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
import SingUp from "./pages/SingUp";
import { Login } from "./pages/LogIn";
import { AuthProvider } from "./store/AuthContext";
import { PrivateRoute } from "./comp/PriviteRoute";

function App(props) {
  return (
  <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Redirect to="/home"/>
        </PrivateRoute>
        <Route path="/login" component={()=><Login/>}>
        </Route>
        <Route path="/singup" component={()=><SingUp/>}>
        </Route>
        <PrivateRoute path="/home" component={()=><Home/>}>
        </PrivateRoute>
        <PrivateRoute path="/users" component={()=><Users/>}>
        </PrivateRoute>
        <PrivateRoute path="/about" component={()=><About/>} >
        </PrivateRoute>
        <Route path="*" component={()=><NotFound/>}>
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
  );
}

export default App;
