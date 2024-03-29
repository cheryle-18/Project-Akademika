import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";


const GuruNav = (props) => {
    const { http, user,token,logout } = AuthUser();

    let wrapperClass = ""

    if(props.stat != "landing"){
        wrapperClass = "bg-custom-blue flex w-full px-4 sm:px-16 md:px-20"
    }
    else{
        wrapperClass = "flex w-full"
    }

    const logoutGuru = () => {
        if(token != undefined){
            logout();
        }
    }

    return (
        <div className={wrapperClass}>
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="text-white float-right cursor-pointer">
                        <div class="dropdown dropdown-hover dropdown-end">
                            <FontAwesomeIcon
                                icon={faIcon.faUserCircle}
                                className="text-3xl my-auto"
                            ></FontAwesomeIcon>
                            <ul
                                tabindex="0"
                                class="dropdown-content menu p-2 shadow bg-base-100 w-32 text-black rounded-lg mr-5"
                            >
                                <Link to="/guru/profile">
                                    <div className="w-full h-10 flex justify-start items-center hover:bg-gray-200 rounded-lg pl-4">
                                        Akun Saya
                                    </div>
                                </Link>
                                {/* <Link to="/"> */}
                                    <div className="w-full h-10 flex justify-start items-center hover:bg-gray-200 rounded-lg pl-4" onClick={logoutGuru}>
                                        Logout
                                    </div>
                                {/* </Link> */}
                            </ul>
                        </div>

                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer mr-2 relative">
                        Halo, {user.nama}
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
