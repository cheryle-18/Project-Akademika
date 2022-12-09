import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KursusDetail from "./KursusDetail"
import SearchKursus from "./SearchKursus"
import Silabus from "../Kursus/Silabus";

const IndexKursus = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/guest/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/guest/kursus/detail">
                    <KursusDetail></KursusDetail>
                </Route>
                <Route exact path="/guest/kursus/:kursus_id/detail">
                    <Silabus isGuest={true}></Silabus>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexKursus
