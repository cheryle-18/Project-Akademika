import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// admin
import GuruAdmin from "./pages/Admin/GuruAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import KursusAdmin from "./pages/Admin/KursusAdmin";
import LaporanAdmin from "./pages/Admin/LaporanAdmin";
import SiswaAdmin from "./pages/Admin/SiswaAdmin";
//kursus
import SearchKursus from "./pages/Kursus/SearchKursus";
import Home from "./pages/Home";
import KursusDetail from "./pages/Kursus/KursusDetail";
import PengumumanKursus from "./pages/Siswa/PengumumanKursus";
import Silabus from "./pages/Siswa/Silabus";
import Kuis from "./pages/Siswa/Kuis";
import KursusDiterbitkan from "./pages/Guru/KursusDiterbitkan";
import KursusProses from "./pages/Guru/KursusProses";
import TambahKursus from "./pages/Guru/TambahKursus";
import ReportSiswa from "./pages/Guru/ReportSiswa";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DetailKursus from "./pages/Guru/DetailKursus";

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword />
                </Route>
                <Route exact path="/reset-password/:token">
                    <ResetPassword />
                </Route>
                {/* admin */}
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
                {/* guru */}
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
                <Route exact path="/guru/report/siswa">
                    <ReportSiswa></ReportSiswa>
                </Route>
                {/* kursus */}
                <Route exact path="/kursus/search">
                    <SearchKursus></SearchKursus>
                </Route>
                <Route exact path="/kursus/detail">
                    <KursusDetail></KursusDetail>
                </Route>
                {/* siswa */}
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
        // <BrowserRouter>
        //   <Routes>
        //     <Route exact path="/" element={<Home />}>
        //     </Route>
        //   </Routes>
        // </BrowserRouter>
    );
};

export default Index;
