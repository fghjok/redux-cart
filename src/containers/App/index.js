import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import Home from "../Home";
import Compare from "../Compare";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
    <ThemeProvider>
        <Router>
            <Switch>
                <Route  exact path="/compare/:ids"  render = {(props) => <Compare {...props}/> }/>
                <Route  path="/" render = {(props) => <Home {...props}/> }/>
            </Switch>
        </Router>
    </ThemeProvider>
);
export default App;
