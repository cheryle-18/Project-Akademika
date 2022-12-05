import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const GuruNav = () => {
    const { http, user } = AuthUser();

    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-16">
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/guru/profile">Halo, Guru</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/report/siswa">Laporkan Siswa</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/kursus/diterbitkan">Kursus Saya</Link>
                    </div>
                </div>
                {/* layar kecil */}
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/guru/profile">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/report/siswa">Laporkan Siswa</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/kursus/diterbitkan">Kursus Saya</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuruNav;
