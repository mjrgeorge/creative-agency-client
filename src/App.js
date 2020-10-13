import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Login from './components/login/Login';
import AddServices from './components/adminPages/addServices/AddServices';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/admin">
          <AddServices/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
