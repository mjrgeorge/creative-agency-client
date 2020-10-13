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
        <Route path="/addAdmin">
          <AddAdmin/>
        </Route>
        <Route path="/addServices">
          <AddServices/>
        </Route>
        <Route path="/servicesList">
          <ServicesList/>
        </Route>
        <Route path="/client">
          <ClientPages/>
        </Route>
        <Route path="/clientOrder">
          <ClientOrder/>
        </Route>
        <Route path="/clientFeedback">
          <ClientFeedback/>
        </Route>
        <Route path="/orderReview">
          <OrderReview/>
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
