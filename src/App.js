import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Maria/Main/mainpage.js";
import Drawingpage from "./Maria/Main/Drawingpage/Drawingpage.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Main/mainpage.html">
          <Main />
        </Route>
        <Route exact path="/Main/Drawingpage/Drawingpage.html">
          <Drawingpage />
        </Route>
        <Route path="/">
          <h1>Error 404: File Not Found :(</h1>
        </Route>
      </Switch>
    </Router>
  );
}
