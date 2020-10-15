import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Login from './components/login/Login';
import AddAdmin from './components/adminPages/addAdmin/AddAdmin';
import AddServices from './components/adminPages/addServices/AddServices';
import ServicesList from './components/adminPages/servicesList/ServicesList';
import ClientOrder from './components/clientPages/clientOrder/ClientOrder';
import OrderReview from './components/clientPages/orderReview/OrderReview';
import ClientFeedback from './components/clientPages/clientFeedback/ClientFeedback';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/addServices">
            <AddServices />
          </Route>
          <Route path="/servicesList">
            <ServicesList />
          </Route>
          <Route path="/clientOrder/:serviceName">
            <ClientOrder />
          </Route>
          <Route path="/clientFeedback">
            <ClientFeedback />
          </Route>
          <Route path="/orderReview">
            <OrderReview />
          </Route>
          {/* <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute path="/clientOrder/:serviceName">
            <ClientOrder />
          </PrivateRoute>
          <PrivateRoute path="/clientFeedback">
            <ClientFeedback />
          </PrivateRoute>
          <PrivateRoute path="/orderReview">
            <OrderReview />
          </PrivateRoute> */}
          <Route exact path="/">
            <Home/>
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
