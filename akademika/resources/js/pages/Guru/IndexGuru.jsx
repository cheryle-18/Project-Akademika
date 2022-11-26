import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailKursus from "./DetailKursus";
import DetailMateri from "./DetailMateri";
import KursusDiterbitkan from "./KursusDiterbitkan";
import KursusProses from "./KursusProses";
import ReportSiswa from "./ReportSiswa";
import TambahKuis from "./TambahKuis";
import TambahKursus from "./TambahKursus";
import TambahMateri from "./TambahMateri";

const IndexGuru = () => {
    return(
        <Router>
            <Switch>
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
                <Route exact path="/guru/kursus/materi/tambah">
                    <TambahMateri></TambahMateri>
                </Route>
                <Route exact path="/guru/kursus/materi">
                    <DetailMateri></DetailMateri>
                </Route>
                <Route exact path="/guru/kursus/kuis">
                    <TambahKuis></TambahKuis>
                </Route>
                <Route exact path="/guru/report/siswa">
                    <ReportSiswa></ReportSiswa>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexGuru
