import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const SiswaAdmin = () => {
    const [siswas, setSiswa] = useState([
        {
            id: "G001",
            nama: "John Doe",
            email: "john.doe@gmail.com",
            status: "Aktif",
        },
        {
            id: "G001",
            nama: "John Doe",
            email: "john.doe@gmail.com",
            status: "Aktif",
        },
        {
            id: "G001",
            nama: "John Doe",
            email: "john.doe@gmail.com",
            status: "Aktif",
        },
        {
            id: "G001",
            nama: "John Doe",
            email: "john.doe@gmail.com",
            status: "Aktif",
        },
    ]);

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakSiswa = siswas.map((siswa, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.id}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.nama}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.email}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.status}</td>
            <td>
                <button
                    type="button"
                    className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white w-20 transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                >
                    Detail
                </button>
            </td>
        </tr>
    ));

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="siswa">
                <div className="text-2xl p-14 pb-2">
                    <div className="bg-white overflow-y-auto h-77vh p-4 mb-6 rounded-md drop-shadow-lg">
                        <table className="table table-compact w-full text-black overflow-y-auto table-auto">
                            <thead>
                                <tr>
                                    <th className="bg-white text-center text-base">NO</th>
                                    <th className="bg-white text-center text-base">ID</th>
                                    <th className="bg-white text-center text-base">NAMA</th>
                                    <th className="bg-white text-center text-base">EMAIL</th>
                                    <th className="bg-white text-center text-base">STATUS</th>
                                    <th className="bg-white text-center text-base">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>{cetakSiswa}</tbody>
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default SiswaAdmin;
