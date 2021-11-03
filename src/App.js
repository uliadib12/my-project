import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";
import { NotFound } from "./NotFound";

function App() {
  return (
    <Router>
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
