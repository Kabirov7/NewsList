import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NewsList from "./Components/NewsList/NewsList";

function App() {
  return (
    <Router>
      <Route exact path={"/NewsList"}>
        <NewsList/>
      </Route>
    </Router>
  );
}

export default App;
