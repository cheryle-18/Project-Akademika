import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuruAdmin from "./pages/Admin/GuruAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import KursusAdmin from "./pages/Admin/KursusAdmin";
import LaporanAdmin from "./pages/Admin/LaporanAdmin";
import SiswaAdmin from "./pages/Admin/SiswaAdmin";
import Home from './pages/Home';

const Index = () => {
    return(
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
        // <BrowserRouter>
        //   <Routes>
        //     <Route exact path="/" element={<Home />}>
        //     </Route>
        //   </Routes>
        // </BrowserRouter>
    );
}


export default Index;
