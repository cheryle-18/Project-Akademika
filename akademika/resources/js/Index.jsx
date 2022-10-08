import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuruAdmin from "./pages/Admin/GuruAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import Home from './pages/Home';

const Index = () => {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeAdmin></HomeAdmin>
          </Route>
          <Route exact path="/Admin">
            <HomeAdmin></HomeAdmin>
          </Route>
          <Route exact path="/Admin/Guru">
            <GuruAdmin></GuruAdmin>
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
