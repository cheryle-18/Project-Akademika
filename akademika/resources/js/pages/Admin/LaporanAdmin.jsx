import React, { useState } from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const LaporanAdmin = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("kursus");

    const onClickKursus = () => {
        setTitle("kursus");
    };

    const onClickPenghasilan = () => {
        setTitle("penghasilan");
    };

    const onClickUser = () => {
        setTitle("user");
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
        <tbody>
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
        </tbody>
    ));

    const cetakPengajuan = pengajuans.map((pengajuan, index) => (
        <tbody>
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
                        className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white w-full transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                    >
                        Detail
                    </button>
                </td>
            </tr>
        </tbody>
    ));

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="laporan">
                <div className="text-2xl p-10 pt-6 pb-2">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                        <div
                            className={
                                (title == "kursus" && classSelected) ||
                                (title != "kursus" && classOther)
                            }
                            onClick={onClickKursus}
                        >
                            Kursus
                        </div>
                        <div
                            className={
                                (title == "penghasilan" && classSelected) ||
                                (title != "penghasilan" && classOther)
                            }
                            onClick={onClickPenghasilan}
                        >
                            Penghasilan
                        </div>
                        <div
                            className={
                                (title == "user" && classSelected) ||
                                (title != "user" && classOther)
                            }
                            onClick={onClickUser}
                        >
                            User
                        </div>
                    </div>
                    <div className="clear-both"></div>
                    <div className="inline-block w-full">
                        <div className="w-30 float-right">
                            <Select label="Jenis" className="pt-4 bg-white">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                    <div className="bg-white overflow-y-auto h-65vh p-6 mb-6 rounded-md drop-shadow-lg"></div>
                    <div className="text-black font-semibold text-xl p-6">
                        Laporan Penghasilan Tahunan
                    </div>
                    <div className="bg-white overflow-y-auto p-6 mb-6 rounded-md drop-shadow-lg">
                        <table className="table table-compact w-full text-black">
                            <thead>
                                <tr>
                                    <th className="text-center">NO</th>
                                    <th className="text-center">TANGGAL</th>
                                    <th className="text-center">KETERANGAN</th>
                                    <th className="text-center">JUMLAH</th>
                                </tr>
                            </thead>
                            {/* {cetakSiswa} */}
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default LaporanAdmin;
