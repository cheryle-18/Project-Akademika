import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KursusDetail from "./KursusDetail"
import SearchKursus from "./SearchKursus"
import Silabus from "../Siswa/Silabus";

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
                <Route exact path="/kursus/:id/detail">
                    <Silabus isGuest={true}></Silabus>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexKursus
