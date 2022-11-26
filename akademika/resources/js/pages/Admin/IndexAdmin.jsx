import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GuruAdmin from "./GuruAdmin";
import HomeAdmin from "./HomeAdmin";
import KursusAdmin from "./KursusAdmin";
import LaporanAdmin from "./LaporanAdmin";
import SiswaAdmin from "./SiswaAdmin";

const IndexAdmin = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/admin/home">
                    <HomeAdmin></HomeAdmin>
                </Route>
                <Route exact path="/admin/master/guru">
                    <GuruAdmin></GuruAdmin>
                </Route>
                <Route exact path="/admin/master/siswa">
                    <SiswaAdmin></SiswaAdmin>
                </Route>
                <Route exact path="/admin/master/kursus">
                    <KursusAdmin></KursusAdmin>
                </Route>
                <Route exact path="/admin/master/laporan">
                    <LaporanAdmin></LaporanAdmin>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexAdmin
