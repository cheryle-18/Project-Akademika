import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-24">
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/kursus/search">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
                {/* layar kecil */}
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/kursus/search">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
