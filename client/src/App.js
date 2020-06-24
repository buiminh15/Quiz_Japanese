import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import HeaderTop from "./components/layout/Navbar.layout";
import Footer from "./components/layout/Footer.layout";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <HeaderTop />


          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
