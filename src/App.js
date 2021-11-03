import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Sidebar } from "./comp/SideBar";

function App() {
  return (
    <Router>
      <Sidebar/> {/* sidebar */}
      <Switch>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/users" component={Users}>
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
        <Route path="*" component={NotFound}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
