import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailGuru from "./DetailGuru";
import DetailSiswa from "./DetailSiswa";
import DetailKursus from "./DetailKursus";
import GuruAdmin from "./GuruAdmin";
import HomeAdmin from "./HomeAdmin";
import KursusAdmin from "./KursusAdmin";
import LaporanAdmin from "./LaporanAdmin";
import SiswaAdmin from "./SiswaAdmin";
import Home from "../Home";

const IndexAdmin = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/admin/home">
                    <HomeAdmin></HomeAdmin>
                </Route>
                <Route exact path="/admin/master/guru">
                    <GuruAdmin></GuruAdmin>
                </Route>
                <Route exact path="/admin/master/guru/detail">
                    <DetailGuru></DetailGuru>
                </Route>
                <Route exact path="/admin/master/siswa">
                    <SiswaAdmin></SiswaAdmin>
                </Route>
                <Route exact path="/admin/master/siswa/detail">
                    <DetailSiswa></DetailSiswa>
                </Route>
                <Route exact path="/admin/master/kursus">
                    <KursusAdmin></KursusAdmin>
                </Route>
                <Route exact path="/admin/master/kursus/detail/:id">
                    <DetailKursus></DetailKursus>
                </Route>
                <Route exact path="/admin/master/laporan">
                    <LaporanAdmin></LaporanAdmin>
                </Route>
            </Switch>
        </Router>
    );
};

export default IndexAdmin;
