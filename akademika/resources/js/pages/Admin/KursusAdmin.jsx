import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const KursusAdmin = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("master");

    const onClickMaster = () => {
        setTitle("master");
    };

    const onClickPengajuan = () => {
        setTitle("pengajuan");
    };

    const [masters, setMaster] = useState([
        {
            id: "K001",
            nama: "Pengembangan Web Front-End Dasar",
            kategori: "Teknologi Informasi",
            guru: "John Doe",
            status: "Live",
        },
        {
            id: "K001",
            nama: "Pengembangan Web Front-End Dasar",
            kategori: "Teknologi Informasi",
            guru: "John Doe",
            status: "Live",
        },
        {
            id: "K001",
            nama: "Pengembangan Web Front-End Dasar",
            kategori: "Teknologi Informasi",
            guru: "John Doe",
            status: "Live",
        },
        {
            id: "K001",
            nama: "Pengembangan Web Front-End Dasar",
            kategori: "Teknologi Informasi",
            guru: "John Doe",
            status: "Live",
        },
    ]);

    const [pengajuans, setPengajuan] = useState([
        {
            id: "K010",
            nama: "Digital Marketing",
            kategori: "Bisnis dan Ekonomi",
            guru: "John Doe",
            status: "Pending",
        },
    ]);

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakMaster = masters.map((master, index) => (
        <tr className={classBorder}>
            <td>{index + 1}</td>
            <td>{master.id}</td>
            <td>{master.nama}</td>
            <td>{master.kategori}</td>
            <td>{master.guru}</td>
            <td className="text-green-700">{master.status}</td>
            <td>
                <button
                    type="button"
                    className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white w-full transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                >
                    Detail
                </button>
            </td>
        </tr>
    ));

    const cetakPengajuan = pengajuans.map((pengajuan, index) => (
        <tr className={classBorder}>
            <td>{index + 1}</td>
            <td>{pengajuan.id}</td>
            <td>{pengajuan.nama}</td>
            <td>{pengajuan.kategori}</td>
            <td>{pengajuan.guru}</td>
            <td className="text-green-700">{pengajuan.status}</td>
            <td>
                <button
                    type="button"
                    className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white w-20 transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg"
                >
                    Detail
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="kursus">
                <div className="text-2xl p-10 pt-6 pb-2">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                        <div
                            className={
                                (title == "master" && classSelected) ||
                                (title != "master" && classOther)
                            }
                            onClick={onClickMaster}
                        >
                            Master
                        </div>
                        <div
                            className={
                                (title == "pengajuan" && classSelected) ||
                                (title != "pengajuan" && classOther)
                            }
                            onClick={onClickPengajuan}
                        >
                            Pengajuan
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                        <table className="table table-compact w-full text-black overflow-y-auto whitespace-nowrap">
                            <thead>
                                <tr>
                                    <th className="text-center">NO</th>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">NAMA KURSUS</th>
                                    <th className="text-center">KATEGORI</th>
                                    <th className="text-center">GURU</th>
                                    <th className="text-center">STATUS</th>
                                    <th className="text-center">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {title == "master" && cetakMaster}
                                {title == "pengajuan" && cetakPengajuan}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default KursusAdmin;
