import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AddBeverage from './components/AddBeverage/AddBeverage';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import NothingFound from './components/NothingFound/NothingFound';
import About from './components/About/About';
import ManageBeverage from './components/ManageBeverage/ManageBeverage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/addBeverage">
            <AddBeverage></AddBeverage>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/manageBeverage">
            <ManageBeverage></ManageBeverage>
          </Route>
          <Route path="*">
            <NothingFound></NothingFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
