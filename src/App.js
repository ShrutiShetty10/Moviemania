import React from "react";
import "./App.css"
import {withRouter} from 'react-router';
import SignUpComponent from "./components/SignUpComponent";
import LogInComponent from "./components/loginComponent";

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FrontComponent from "./components/FrontComponent";
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <Router>
      <Switch>
      <Route exact path="/"  exact component={withRouter(FrontComponent)}/>
        <Route exact path='/signup'  exact component={withRouter(SignUpComponent)}/>
       <Route exact path="/login" exact component={withRouter(LogInComponent)}/>
       
      </Switch>
     </Router>
     </header>
      </div>
    
  );
}

export default App;