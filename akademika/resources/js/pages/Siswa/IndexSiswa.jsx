import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kuis from "./Kuis";
import PengumumanKursus from "./PengumumanKursus";
import Silabus from "./Silabus";
import Materi from "./Materi";
import NilaiKuis from "./NilaiKuis";
import KursusSaya from "./KursusSaya";

const IndexSiswa = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/siswa/kursus/pengumuman">
                    <PengumumanKursus></PengumumanKursus>
                </Route>
                <Route exact path="/siswa/kursus/detail">
                    <Silabus></Silabus>
                </Route>
                <Route exact path="/siswa/kursus">
                    <KursusSaya></KursusSaya>
                </Route>
                <Route exact path="/siswa/kursus/materi/:id">
                    <Materi></Materi>
                </Route>
                <Route exact path="/siswa/kursus/kuis">
                    <Kuis></Kuis>
                </Route>
                <Route exact path="/siswa/kursus/nilai">
                    <NilaiKuis></NilaiKuis>
                </Route>
            </Switch>
        </Router>
    );
};

export default IndexSiswa;
