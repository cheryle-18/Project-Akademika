import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";

const ReportSiswa = () => {
    const [listSiswa, setListSiswa] = useState([
        {
            nama: "Lorem Ipsum",
            deskripsi:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, laboriosam, eos impedit vitae excepturi officiis exercitationem atque maxime non nemo est necessitatibus id dolor odit, eaque rem ex reiciendis ratione!",
            status: 1,
        },
        {
            nama: "Lorem Ipsum",
            deskripsi:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, laboriosam, eos impedit vitae excepturi officiis exercitationem atque maxime non nemo est necessitatibus id dolor odit, eaque rem ex reiciendis ratione!",
            status: 0,
        },
    ]);

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakSiswa = listSiswa.map((siswa, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-start">{index + 1}</td>
            <td className="whitespace-pre-wrap text-start">{siswa.nama}</td>
            <td className="whitespace-pre-wrap text-start">{siswa.deskripsi}</td>
            <td className="whitespace-pre-wrap text-start">
                {siswa.status == 1 && "Disetujui"}
                {siswa.status == 0 && "Diproses"}
            </td>
        </tr>
    ));

    return (
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="static w-full z-0 px-4 sm:px-16 md:px-24">
                <div className="text-3xl font-semibold mt-10">
                    Laporkan Siswa
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-24 py-6">
                <div className="bg-white overflow-y-auto min-h-8 p-2 md:p-6 rounded-xl drop-shadow-lg">
                    <div className="flex justify-start items-center">
                        <div className="flex justify-start w-44">
                            Nama Siswa
                        </div>
                        <input
                            type="text"
                            placeholder=""
                            className="input input-bordered w-full border-2 h-10 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start items-start mt-4">
                        <div className="flex justify-start w-44">Deskripsi</div>
                        <textarea
                            type="textarea"
                            placeholder=""
                            className="textarea textarea-bordered w-full border-2 h-32 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start items-center mt-4">
                        <div className="flex justify-start w-44">
                            Link Bukti
                        </div>
                        <input
                            type="text"
                            placeholder=""
                            className="input input-bordered w-full border-2 h-10 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="flex justify-start w-44"></div>
                        <div className="text-gray-600 w-full">
                            *sertakan link Google Drive screenshot chat sebagai
                            bukti laporan
                        </div>
                    </div>
                    <button
                        type="button"
                        className="mt-6 py-2 px-4 bg-custom-blue hover:bg-custom-light-blue hover:text-custom-blue text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-md w-full"
                    >
                        Laporkan Siswa
                    </button>
                </div>
            </div>
            <div className="static w-full z-0 px-4 sm:px-16 md:px-24">
                <div className="text-3xl font-semibold mt-10">
                    Riwayat Laporan
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-24 py-6">
                <div className="bg-white p-6 rounded-md drop-shadow-lg">
                    <table className="table table-compact w-full text-black overflow-y-auto table-auto bg-white">
                        <thead>
                            <tr>
                                <th style={{width:"5%"}} className="text-left">NO</th>
                                <th style={{width:"25%"}} className="text-left">NAMA SISWA</th>
                                <th style={{width:"62%"}} className="text-left">DESKRIPSI</th>
                                <th style={{width:"8%"}} className="text-left">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>{cetakSiswa}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportSiswa;
