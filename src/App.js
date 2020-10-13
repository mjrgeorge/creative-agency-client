import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Login from './components/login/Login';
import AddAdmin from './components/adminPages/addAdmin/AddAdmin';
import AddServices from './components/adminPages/addServices/AddServices';
import ServicesList from './components/adminPages/servicesList/ServicesList';
import ClientPages from './components/clientPages/ClientPages';

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
        <Route path="/admin/addAdmin">
          <AddAdmin/>
        </Route>
        <Route path="/admin/addServices">
          <AddServices/>
        </Route>
        <Route path="/admin/servicesList">
          <ServicesList/>
        </Route>
        <Route path="/client">
          <ClientPages/>
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
