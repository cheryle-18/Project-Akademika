import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Kuis from "./Kuis";
import PengumumanKursus from "./PengumumanKursus";
import Silabus from "./Silabus";
import Materi from "./Materi";
import NilaiKuis from "./NilaiKuis";
import KursusSaya from "./KursusSaya";
import SearchKursus from "../Kursus/SearchKursus";
import ProfileSiswa from "./ProfileSiswa";
import Home from "../Home";
const IndexSiswa = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/siswa/kursus/search">
                    <SearchKursus isSiswa={true}></SearchKursus>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/pengumuman">
                    <PengumumanKursus></PengumumanKursus>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/detail">
                    <Silabus></Silabus>
                </Route>
                <Route exact path="/siswa/kursus">
                    <KursusSaya></KursusSaya>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/materi/:id">
                    <Materi></Materi>
                </Route>
                <Route exact path="/siswa/kursus/kuis">
                    <Kuis></Kuis>
                </Route>
                <Route exact path="/siswa/kursus/kuis/nilai">
                    <NilaiKuis></NilaiKuis>
                </Route>
                <Route exact path="/siswa/profile">
                    <ProfileSiswa></ProfileSiswa>
                </Route>
            </Switch>
        </Router>
    );
};

export default IndexSiswa;
