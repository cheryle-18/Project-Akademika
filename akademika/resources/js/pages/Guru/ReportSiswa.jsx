import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import AuthUser from "../../components/AuthUser";

const ReportSiswa = () => {
    const { http, user } = AuthUser();
    const [listCourse, setListCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [selectedSiswa, setSelectedSiswa] = useState(null);
    const [deskripsi, setDeskripsi] = useState("");
    const [link, setLink] = useState("");
    const [listSiswa, setListSiswa] = useState([]);
    const [listLaporan, setListLaporan] = useState([]);

    const fetchKursus = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type: "semua",
        }).then((res) => {
            setListCourse(res.data.kursus);
            setSelectedCourse(res.data.kursus[0].kursus_id);
        });
    };

    const fetchSiswa = () => {
        http.post("/guru/kursus/getSiswa", {
            kursus_id: selectedCourse,
        }).then((res) => {
            setListSiswa(res.data.siswa);
            setSelectedSiswa(res.data.siswa[0].siswa_id);
        });
    };

    const fetchLaporan = () => {
        http.post("/guru/kursus/getAllLaporan", {
            guru_id: user.guru_id,
        }).then((res) => {
            setListLaporan(res.data.laporan);
            // console.log(res.data.laporan)
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchLaporan();
    }, []);

    useEffect(() => {
        fetchSiswa();
        console.log("kursus_id : " + selectedCourse);
    }, [selectedCourse]);

    useEffect(() => {
        console.log("siswa_id : " + selectedSiswa);

        console.log(deskripsi);
        console.log(link);
    }, [selectedSiswa]);

    const changeKursusSelected = (e) => {
        console.log(e.target.value);
        setSelectedCourse(e.target.value);
    };

    const submitReportSiswa = () => {
        // alert("poaejfoiaewjfi");
        http.post("guru/kursus/reportSiswa", {
            guru_id: user.guru_id,
            siswa_id: selectedSiswa,
            deskripsi: deskripsi,
            link: link,
        }).then((res) => {
            fetchLaporan();
            fetchKursus();
            setDeskripsi("")
            setLink("")
            console.log(res.data);
        });
    };

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakLaporan = listLaporan.map((laporan, index) => (
        <tr>
            <td className="whitespace-pre-wrap text-center text-base">
                {index + 1}
            </td>
            <td className="whitespace-pre-wrap text-start text-base">
                {laporan.nama}
            </td>
            <td className="whitespace-pre-wrap text-start text-base max-w-xl break-all">
                <p>{laporan.pivot.deskripsi}</p>
            </td>
            <td className="whitespace-pre-wrap text-start text-base">
                {laporan.pivot.status == 1 && "Disetujui"}
                {laporan.pivot.status == 0 && "Diproses"}
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
                            Pilih Kursus
                        </div>
                        {/* <Select
                            className="w-full items-end"
                            name="kategori"
                            value={selectedCourse}
                            onChange={changeKursusSelected}
                        >
                            {listCourse.map((n, index) => {
                                return (
                                    <Option
                                        value={n.kursus_id}
                                        key={n.kursus_id}
                                    >
                                        {n.nama}
                                    </Option>
                                );
                            })}
                        </Select> */}
                        <select
                            style={{
                                padding: "10px 12px",
                                paddingLeft: "8px",
                                borderWidth: "1px",
                            }}
                            className="w-full bordered border-2 font-normal text-sm border-gray-400 rounded-lg focus:border-blue-600"
                            onChange={changeKursusSelected}
                            // value={selectedCourse}
                            // onChange={handleChange}
                        >
                            {listCourse.map((n, index) => {
                                return (
                                    <option
                                        value={n.kursus_id}
                                        selected={n.kursus_id == selectedCourse}
                                    >
                                        {n.nama}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex justify-start items-center mt-4">
                        <div className="flex justify-start w-44">
                            Pilih Siswa
                        </div>
                        {/* <Input
                            type="text"
                            name="nama"
                            label="Nama"
                            className="input input-bordered w-full border-2 h-10 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        /> */}
                        {/* <Select
                            className="w-full items-end"
                            name="kategori"
                            onChange={(e) => setSelectedSiswa(e)}
                            value="1"
                        >
                            {listSiswa.map((n, index) => {
                                return (
                                    <Option value={n.siswa_id} key={n.siswa_id}>
                                        {n.nama}
                                    </Option>
                                );
                            })}
                        </Select> */}
                        <select
                            style={{
                                padding: "10px 12px",
                                paddingLeft: "8px",
                                borderWidth: "1px",
                            }}
                            className="w-full bordered border-2 font-normal text-sm border-gray-400 rounded-lg focus:border-blue-600"
                            onChange={(e) => {
                                setSelectedSiswa(e.target.value);
                                console.log(e.target.value);
                            }}
                            // value={selectedCourse}
                            // onChange={handleChange}
                        >
                            {listSiswa.map((n, index) => {
                                return (
                                    <option
                                        value={n.siswa_id}
                                        selected={n.siswa_id == selectedSiswa}
                                    >
                                        {n.nama}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="flex justify-start items-start mt-4">
                        <div className="flex justify-start w-44">Deskripsi</div>
                        <Textarea
                            type="textarea"
                            name="deskripsi"
                            label="Deskripsi"
                            className="textarea textarea-bordered w-full border-2 h-32 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => {
                                setDeskripsi(e.target.value);
                                console.log(deskripsi);
                            }}
                            value={deskripsi}
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
                            onChange={(e) => {
                                setLink(e.target.value);
                                console.log(link);
                            }}
                            value={link}
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
                        onClick={submitReportSiswa}
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
                                <th
                                    style={{ width: "3%" }}
                                    className="bg-white text-left text-base"
                                >
                                    NO
                                </th>
                                <th
                                    style={{ width: "27%" }}
                                    className="bg-white text-left text-base"
                                >
                                    NAMA SISWA
                                </th>
                                <th
                                    style={{ width: "62%" }}
                                    className="bg-white text-left text-base"
                                >
                                    DESKRIPSI
                                </th>
                                <th
                                    style={{ width: "8%" }}
                                    className="bg-white text-left text-base"
                                >
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>{cetakLaporan}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportSiswa;
