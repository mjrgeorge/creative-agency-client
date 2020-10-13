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
import ClientOrder from './components/clientPages/clientOrder/ClientOrder';
import OrderReview from './components/clientPages/orderReview/OrderReview';
import ClientFeedback from './components/clientPages/clientFeedback/ClientFeedback';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute path="/client">
            <ClientPages />
          </PrivateRoute>
          <PrivateRoute path="/clientOrder">
            <ClientOrder />
          </PrivateRoute>
          <PrivateRoute path="/clientFeedback">
            <ClientFeedback />
          </PrivateRoute>
          <PrivateRoute path="/orderReview">
            <OrderReview />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
