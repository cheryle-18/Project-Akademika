import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";

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
        <tr>
            <td className="whitespace-pre-wrap text-center text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-start text-base">{siswa.nama}</td>
            <td className="whitespace-pre-wrap text-start text-base">{siswa.deskripsi}</td>
            <td className="whitespace-pre-wrap text-start text-base">
                {siswa.status == 1 && "Disetujui"}
                {siswa.status == 0 && "Diproses"}
            </td>
        </tr>
    ));

    return (
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                <GuruNav />
            {/* </div> */}
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
                        <Input
                            type="text"
                            name="nama"
                            label="Nama"
                            className="input input-bordered w-full border-2 h-10 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start items-start mt-4">
                        <div className="flex justify-start w-44">Deskripsi</div>
                        <Textarea
                            type="textarea"
                            name="deskripsi"
                            label="Deskripsi"
                            className="textarea textarea-bordered w-full border-2 h-32 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-start items-center mt-4">
                        <div className="flex justify-start w-44">
                            Link Bukti
                        </div>
                        <Input
                            type="text"
                            name="link"
                            label="Link"
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
                                <th style={{width:"3%"}} className="bg-white text-left text-base">NO</th>
                                <th style={{width:"27%"}} className="bg-white text-left text-base">NAMA SISWA</th>
                                <th style={{width:"62%"}} className="bg-white text-left text-base">DESKRIPSI</th>
                                <th style={{width:"8%"}} className="bg-white text-left text-base">STATUS</th>
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
