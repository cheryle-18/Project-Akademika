import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KursusDetail from "./KursusDetail"
import SearchKursus from "./SearchKursus"

const IndexKursus = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/kursus/detail">
                    <KursusDetail></KursusDetail>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexKursus
