import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SearchKursus from "./pages/Kursus/SearchKursus"
import Silabus from "./pages/Kursus/Silabus";

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/guest/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/guest/kursus/:kursus_id/detail">
                    <Silabus></Silabus>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/reset-password/:token">
                    <ResetPassword />
                </Route>

            </Switch>
        </Router>
    );
};

export default Index;
