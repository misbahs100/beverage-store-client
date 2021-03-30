import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddBeverage from './components/AddBeverage/AddBeverage';
import Header from './components/Header/Header';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route path="/addBeverage">
          <AddBeverage></AddBeverage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
