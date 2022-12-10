import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";
const Nav = () => {

    const {user,token,logout} = AuthUser()

    const logoutSiswa = () => {
        if(token != undefined){
            logout();
        }
    }

    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-24 z-0">
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="text-white float-right cursor-pointer text-3xl">
                        <FontAwesomeIcon
                            icon={faIcon.faUserCircle}
                        ></FontAwesomeIcon>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer mr-2 relative">
                        <div class="dropdown dropdown-hover">
                            Halo, Siswa
                            <ul
                                tabindex="0"
                                class="dropdown-content menu p-2 shadow bg-base-100 w-32 text-black rounded-lg"
                            >
                                <Link to="/siswa/profile">
                                    <div className="w-full h-10 flex justify-start items-center hover:bg-gray-200 rounded-lg pl-4">
                                        Akun Saya
                                    </div>
                                </Link>
                                {/* <Link to="/"> */}
                                    <div className="w-full h-10 flex justify-start items-center hover:bg-gray-200 rounded-lg pl-4" onClick={logoutSiswa}>
                                        Logout
                                    </div>
                                {/* </Link> */}
                            </ul>
                        </div>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/siswa/kursus">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/siswa/kursus/search">Cari Kursus</Link>
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
                        <Link to="/siswa/kursus">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/siswa/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
