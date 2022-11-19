// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBookJournalWhills,
    faBookOpenReader,
    faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Navbar";
import { Link } from "react-router-dom";


const SearchKursus = () => {
    return (
        <div className="">
            <div class="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <Nav></Nav>
            </div>
            <div className="bg-white overflow-y-auto h-77vh px-4 sm:px-16 md:px-24 overflow-x-auto">
                <div class="">
                    mencoba
                </div>
            </div>
        </div>

    );
}

export default SearchKursus;
