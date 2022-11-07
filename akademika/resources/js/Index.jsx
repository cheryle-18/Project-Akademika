import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuruAdmin from "./pages/Admin/GuruAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import KursusAdmin from "./pages/Admin/KursusAdmin";
import SiswaAdmin from "./pages/Admin/SiswaAdmin";
import Home from './pages/Home';

const Index = () => {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeAdmin></HomeAdmin>
          </Route>
          <Route exact path="/admin">
            <HomeAdmin></HomeAdmin>
          </Route>
          <Route exact path="/admin/guru">
            <GuruAdmin></GuruAdmin>
          </Route>
          <Route exact path="/admin/siswa">
            <SiswaAdmin></SiswaAdmin>
          </Route>
          <Route exact path="/admin/kursus">
            <KursusAdmin></KursusAdmin>
          </Route>
          <Route exact path="/admin/laporan">
            <KursusAdmin></KursusAdmin>
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
