import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SearchKursus from "./pages/Kursus/SearchKursus"

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/reset-password/:token">
                    <ResetPassword />
                </Route>
                <Route exact path="/kursus/search">
                  <SearchKursus></SearchKursus>
                </Route>
            </Switch>
        </Router>
    );
};

export default Index;
