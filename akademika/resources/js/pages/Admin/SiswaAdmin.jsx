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
            <td className="whitespace-pre-wrap">{index + 1}</td>
            <td className="whitespace-pre-wrap">{siswa.id}</td>
            <td className="whitespace-pre-wrap">{siswa.nama}</td>
            <td className="whitespace-pre-wrap">{siswa.email}</td>
            <td className="whitespace-pre-wrap">{siswa.status}</td>
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
                    <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                        <table className="table table-compact w-full text-black overflow-y-auto table-auto">
                            <thead>
                                <tr>
                                    <th className="text-center">NO</th>
                                    <th className="text-center">ID</th>
                                    <th className="text-center">NAMA</th>
                                    <th className="text-center">EMAIL</th>
                                    <th className="text-center">STATUS</th>
                                    <th className="text-center">ACTION</th>
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
