import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kuis from "./Kuis";
import PengumumanKursus from "./PengumumanKursus";
import Silabus from "./Silabus";

const IndexSiswa = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/siswa/kursus/pengumuman">
                    <PengumumanKursus></PengumumanKursus>
                </Route>
                <Route exact path="/siswa/kursus/detail">
                    <Silabus></Silabus>
                </Route>
                <Route exact path="/siswa/kursus/kuis">
                    <Kuis></Kuis>
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexSiswa
