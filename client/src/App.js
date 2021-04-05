
import './css/App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Music from './music';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/about">
            <About />    
          </Route>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route exact path = "/signUp">
            <SignUp />
          </Route>
          <Route exact path="/music">
            <Music />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
