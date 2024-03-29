import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouseChimney,
    faUser,
    faGraduationCap,
    faFileContract,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../../css/app.css";
import AuthUser from "../../components/AuthUser";

const Sidebar = (props) => {
    const classNow = "px-4 py-3 mt-3 rounded-lg text-blue-800 bg-white";
    const classMenu =
        "px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-gray-100";
    const [open, setOpen] = useState(true);
    const { http, token, user, logout } = AuthUser();

    const logoutAdmin = () => {
        if (token != undefined) {
            logout();
        }
    };

    const Menus = [
        {
            title: "Home",
            icon: faHouseChimney,
            link: "/admin/home",
            now: props.now == "home",
        },
        {
            title: "Guru",
            icon: faUser,
            link: "/admin/master/guru",
            now: props.now == "guru" || props.now == "guru detail",
        },
        {
            title: "Siswa",
            icon: faUser,
            link: "/admin/master/siswa",
            now: props.now == "siswa" || props.now == "siswa detail",
        },
        {
            title: "Kursus",
            icon: faGraduationCap,
            link: "/admin/master/kursus",
            now: props.now == "kursus" || props.now == "kursus detail",
        },
        {
            title: "Pendaftaran",
            icon: faGraduationCap,
            link: "/admin/master/pendaftaran",
            now: props.now == "pendaftaran",
        },
        {
            title: "Laporan",
            icon: faFileContract,
            link: "/admin/master/laporan",
            now: props.now == "laporan",
        },
        {
            title: "Logout",
            icon: faSignOut,
            link: "/",
            now: props.now == "logout",
            isLogout: true,
        },
    ];

    const cetakMenu = Menus.map((menu, index) => (
        <div
            onClick={() => {
                menu.isLogout != null && logoutAdmin();
            }}
        >
            <Link to={menu.link} key={index}>
                <div
                    className={
                        (!menu.now && classMenu) || (menu.now && classNow)
                    }
                >
                    <div className="relative">
                        <FontAwesomeIcon icon={menu.icon} />
                        <div className="inline ml-6 absolute left-5">
                            {menu.title}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className="w-full">
            {/* layar kecil */}
            <div className="max-lg-grid lg-none">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content min-h-screen bg-white">
                    <label
                        htmlFor="my-drawer"
                        className="btn btn-primary drawer-button bg-white hover:bg-white hover:text-custom-blue text-custom-blue border border-none flex-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-6 h-6 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <div className="absolute py-2 text-custom-blue text-3xl font-semibold inline left-2/4 -translate-x-1/2">
                        Akademika Admin
                    </div>
                    <div className="absolute py-2 text-black text-3xl font-semibold mt-12 inline left-2/4 -translate-x-1/2">
                        {props.now == "guru" && "Master Guru"}
                        {props.now == "guru detail" && "Master Guru Detail"}
                        {props.now == "siswa detail" && "Master Siswa Detail"}
                        {props.now == "siswa" && "Master Siswa"}
                        {props.now == "kursus" && "Master Kursus"}
                        {props.now == "kursus detail" && "Master Kursus Detail"}
                        {props.now == "pendaftaran" && "Master Pendaftaran"}
                        {props.now == "laporan" && "Master Laporan"}
                    </div>

                    {props.children}
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 overflow-y-auto w-64 rounded-r-3xl bg-custom-blue min-h-screen flex-none">
                        {cetakMenu}
                    </ul>
                </div>
            </div>

            {/* layar besar */}
            <div className="max-lg-none">
                <div className="drawer drawer-mobile">
                    <input
                        id="my-drawer-2"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">Open drawer</label> */}
                    <div className="drawer-content flex flex-col mt-12">
                        <div className="">{props.children}</div>
                    </div>
                    <div className="z-0 absolute left-0 top-0 w-full bg-white py-5 text-black">
                        .
                    </div>
                    <div className="z-1 absolute left-70 top-0 bg-white py-4 text-black font-semibold text-xl">
                        {props.now == "guru" && "Master Guru"}
                        {props.now == "guru detail" && "Master Guru Detail"}
                        {props.now == "siswa detail" && "Master Siswa Detail"}
                        {props.now == "siswa" && "Master Siswa"}
                        {props.now == "kursus" && "Master Kursus"}
                        {props.now == "kursus detail" && "Master Kursus Detail"}
                        {props.now == "pendaftaran" && "Master Pendaftaran"}
                        {props.now == "laporan" && "Master Laporan"}
                    </div>
                    <div className="z-1 drawer-side bg-custom-blue rounded-r-3xl min-h-screen overflow-y-auto flex-none">
                        <ul className="menu p-6 w-56">
                            <div className="ml-3">
                                <div className="text-white text-3xl font-semibold mb-1">
                                    Akademika
                                </div>
                                <div className="text-white text-3xl font-semibold">
                                    Admin
                                </div>
                            </div>
                            {cetakMenu}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            className={
                "w-64 h-screen bg-custom-blue rounded-r-3xl flex-none sticky top-0 overflow-auto"
            }
        >
            <div className="m-10">
                <div className="text-white text-3xl font-semibold mb-1">
                    Akademika
                </div>
                <div className="text-white text-3xl font-semibold">Admin</div>

                {Menus.map((menu, index) => (
                    <Link to={menu.link}>
                        <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                            <div className="relative">
                                <FontAwesomeIcon icon={menu.icon} />
                                <div className="inline ml-6 font-semibold absolute left-5">
                                    {menu.title}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                {/* <Link to={"/"}>
                    <div className="px-4 py-3 mt-10 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <FontAwesomeIcon icon={faHouseChimney} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Home
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <div></div>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Guru
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <div></div>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Siswa
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <div></div>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Kursus
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <div></div>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Laporan
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={"/"}>
                    <div className="px-4 py-3 mt-3 rounded-lg text-white hover:text-blue-800 bg-custom-blue hover:bg-white">
                        <div className="relative">
                            <div></div>
                            <FontAwesomeIcon icon={faUser} />
                            <div className="inline ml-6 font-semibold absolute left-5">
                                Logout
                            </div>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default Sidebar;
