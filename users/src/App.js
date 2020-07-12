import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddUser from "./components/pages/users/AddUser";
import EditUser from "./components/pages/users/EditUser";
import User from "./components/pages/users/User";

function App() {
  return (
    <div>
      <Router>

      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/users/add" exact component={AddUser}></Route>
        <Route path="/users/edit/:id" exact component={EditUser}></Route>
        <Route path="/users/:id" exact component={User}></Route>
      </Switch>
    
      </Router>
    </div>
  );
}

export default App;
