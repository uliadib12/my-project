import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import Sidebar from "./comp/SideBar";


function App(props) {
  return (
    <Router>
      {props.displaybar && <Sidebar/>} {/*Display Sidebar eather is true of false*/}
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

const mapStateToProps = state => ({displaybar: state.sidebarDisplay})

export default connect(mapStateToProps)(App);
