import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailKursus from "./DetailKursus";
import DetailSubbab from "./DetailSubbab";
import KursusDiterbitkan from "./KursusDiterbitkan";
import KursusProses from "./KursusProses";
import ReportSiswa from "./ReportSiswa";
import TambahKuis from "./TambahKuis";
import TambahKursus from "./TambahKursus";
import TambahSubbab from "./TambahSubbab";
import TambahPengumuman from "./TambahPengumuman";
import TambahMateri from "./TambahMateri";
import EditMateri from "./EditMateri";
import DetailDiterbitkan from "./DetailDiterbitkan";
import ProfileGuru from "./ProfileGuru";
import Home from "../Home";
const IndexGuru = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/guru/kursus/diterbitkan">
                    <KursusDiterbitkan></KursusDiterbitkan>
                </Route>
                <Route exact path="/guru/kursus/diproses">
                    <KursusProses></KursusProses>
                </Route>
                <Route exact path="/guru/kursus/tambah">
                    <TambahKursus></TambahKursus>
                </Route>
                <Route exact path="/guru/kursus/detail">
                    <DetailKursus></DetailKursus>
                </Route>
                <Route exact path="/guru/kursus/subbab/tambah">
                    <TambahSubbab></TambahSubbab>
                </Route>
                <Route exact path="/guru/kursus/subbab/detail">
                    <DetailSubbab></DetailSubbab>
                </Route>
                <Route exact path="/guru/kursus/materi/tambah">
                    <TambahMateri></TambahMateri>
                </Route>
                <Route exact path="/guru/kursus/materi">
                    <EditMateri></EditMateri>
                </Route>
                <Route exact path="/guru/kursus/kuis">
                    <TambahKuis></TambahKuis>
                </Route>
                <Route exact path="/guru/kursus/pengumuman">
                    <TambahPengumuman></TambahPengumuman>
                </Route>
                <Route exact path="/guru/report/siswa">
                    <ReportSiswa></ReportSiswa>
                </Route>
                <Route exact path="/guru/profile">
                    <ProfileGuru></ProfileGuru>
                </Route>
                <Route exact path="/guru/kursus/home">
                    <DetailDiterbitkan></DetailDiterbitkan>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexGuru
