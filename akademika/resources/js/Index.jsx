import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SearchKursus from "./pages/Kursus/SearchKursus";
import Silabus from "./pages/Kursus/Silabus";

// import siswa
import Kuis from "./pages/Siswa/Kuis";
import PengumumanKursus from "./pages/Siswa/PengumumanKursus";
import SilabusSiswa from "./pages/Siswa/Silabus";
import Materi from "./pages/Siswa/Materi";
import NilaiKuis from "./pages/Siswa/NilaiKuis";
import KursusSaya from "./pages/Siswa/KursusSaya";
import ProfileSiswa from "./pages/Siswa/ProfileSiswa";

//import guru
import DetailKursusGuru from "./pages/Guru/DetailKursus";
import DetailSubbab from "./pages/Guru/DetailSubbab";
import KursusDiterbitkan from "./pages/Guru/KursusDiterbitkan";
import KursusProses from "./pages/Guru/KursusProses";
import ReportSiswa from "./pages/Guru/ReportSiswa";
import TambahKuis from "./pages/Guru/TambahKuis";
import TambahKursus from "./pages/Guru/TambahKursus";
import TambahSubbab from "./pages/Guru/TambahSubbab";
import TambahPengumuman from "./pages/Guru/TambahPengumuman";
import TambahMateri from "./pages/Guru/TambahMateri";
import EditMateri from "./pages/Guru/EditMateri";
import DetailDiterbitkan from "./pages/Guru/DetailDiterbitkan";
import ProfileGuru from "./pages/Guru/ProfileGuru";

//import admin
import DetailGuru from "./pages/Admin/DetailGuru";
import DetailSiswa from "./pages/Admin/DetailSiswa";
import DetailKursusAdmin from "./pages/Admin/DetailKursus";
import GuruAdmin from "./pages/Admin/GuruAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import KursusAdmin from "./pages/Admin/KursusAdmin";
import LaporanAdmin from "./pages/Admin/LaporanAdmin";
import SiswaAdmin from "./pages/Admin/SiswaAdmin";
import DetailSubbabAdmin from "./pages/Admin/DetailSubbab";
import DetailMateriAdmin from "./pages/Admin/DetailMateri";
import DetailKuisAdmin from "./pages/Admin/DetailKuis";
import PendaftaranAdmin from "./pages/Admin/PendaftaranAdmin";

const Index = () => {
    return (
        <Router>
            <Switch>
                {/* route guest */}
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/guest/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/guest/kursus/:kursus_id/detail">
                    <Silabus></Silabus>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/reset-password/:token">
                    <ResetPassword />
                </Route>

                {/* route siswa */}
                <Route exact path="/siswa/kursus/search">
                    <SearchKursus isSiswa={true}></SearchKursus>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/pengumuman">
                    <PengumumanKursus></PengumumanKursus>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/detail/:transaction_id?">
                    <SilabusSiswa></SilabusSiswa>
                </Route>
                <Route exact path="/siswa/kursus/">
                    <KursusSaya></KursusSaya>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/subbab/:subbab_id/materi/:id">
                    <Materi></Materi>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/subbab/:subbab_id/kuis">
                    <Kuis></Kuis>
                </Route>
                <Route exact path="/siswa/kursus/:kursus_id/subbab/:subbab_id/kuis/nilai">
                    <NilaiKuis></NilaiKuis>
                </Route>
                <Route exact path="/siswa/profile">
                    <ProfileSiswa></ProfileSiswa>
                </Route>

                {/* route guru */}
                <Route exact path="/guru/kursus/diterbitkan">
                    <KursusDiterbitkan></KursusDiterbitkan>
                </Route>
                <Route exact path="/guru/kursus/diproses">
                    <KursusProses></KursusProses>
                </Route>
                <Route exact path="/guru/kursus/tambah">
                    <TambahKursus></TambahKursus>
                </Route>
                <Route exact path="/guru/kursus/:kursus_id/subbab/tambah">
                    <TambahSubbab></TambahSubbab>
                </Route>

                <Route exact path="/guru/kursus/:kursus_id/detail">
                    <DetailKursusGuru></DetailKursusGuru>
                </Route>
                <Route
                    exact
                    path="/guru/kursus/:kursus_id/subbab/:subbab_id/detail"
                >
                    <DetailSubbab></DetailSubbab>
                </Route>

                <Route
                    exact
                    path="/guru/kursus/:kursus_id/subbab/:subbab_id/materi/tambah"
                >
                    <TambahMateri></TambahMateri>
                </Route>
                <Route
                    exact
                    path="/guru/kursus/:kursus_id/subbab/:subbab_id/materi/:materi_id"
                >
                    <EditMateri></EditMateri>
                </Route>
                <Route
                    exact
                    path="/guru/kursus/:kursus_id/subbab/:subbab_id/kuis"
                >
                    <TambahKuis></TambahKuis>
                </Route>
                <Route exact path="/guru/kursus/:kursus_id/pengumuman">
                    <TambahPengumuman></TambahPengumuman>
                </Route>
                <Route exact path="/guru/report/siswa">
                    <ReportSiswa></ReportSiswa>
                </Route>
                <Route exact path="/guru/profile">
                    <ProfileGuru></ProfileGuru>
                </Route>
                <Route exact path="/guru/kursus/:kursus_id/home">
                    <DetailDiterbitkan></DetailDiterbitkan>
                </Route>

                {/* route admin */}
                <Route exact path="/admin/home">
                    <HomeAdmin></HomeAdmin>
                </Route>
                <Route exact path="/admin/master/guru">
                    <GuruAdmin></GuruAdmin>
                </Route>
                <Route exact path="/admin/master/guru/detail/:id">
                    <DetailGuru></DetailGuru>
                </Route>
                <Route exact path="/admin/master/siswa">
                    <SiswaAdmin></SiswaAdmin>
                </Route>
                <Route exact path="/admin/master/siswa/detail/:id">
                    <DetailSiswa></DetailSiswa>
                </Route>
                <Route exact path="/admin/master/kursus">
                    <KursusAdmin></KursusAdmin>
                </Route>
                <Route exact path="/admin/master/kursus/detail/:kursus_id">
                    <DetailKursusAdmin></DetailKursusAdmin>
                </Route>
                <Route exact path="/admin/master/kursus/:kursus_id/:subbab_id">
                    <DetailSubbabAdmin></DetailSubbabAdmin>
                </Route>
                <Route exact path="/admin/master/kursus/:kursus_id/:subbab_id/materi/:materi_id">
                    <DetailMateriAdmin></DetailMateriAdmin>
                </Route>
                <Route exact path="/admin/master/kursus/:kursus_id/:subbab_id/kuis">
                    <DetailKuisAdmin></DetailKuisAdmin>
                </Route>
                <Route exact path="/admin/master/pendaftaran">
                    <PendaftaranAdmin></PendaftaranAdmin>
                </Route>
                <Route exact path="/admin/master/laporan">
                    <LaporanAdmin></LaporanAdmin>
                </Route>
            </Switch>
        </Router>
    );
};

export default Index;
