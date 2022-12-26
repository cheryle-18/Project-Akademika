import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SiswaAdmin = () => {
    const { http, token, user } = AuthUser();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [title, setTitle] = useState("siswa");
    const [siswa, setSiswa] = useState([]);
    const [laporan, setLaporan] = useState([]);
    const classBorder = "text-center border border-b-gray-600 border-x-0";
    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    setTimeout(() => {
        if (token == null) {
            console.log(token);
            return history.push("/");
        } else {
            if (user.role_text != null) {
                if (user.role_text == "guru") {
                    return history.push("/guru/kursus/diterbitkan");
                } else if (user.role_text == "siswa") {
                    return history.push("/siswa/kursus");
                }
            }
        }
    }, 1000);

    const onClickSiswa = () => {
        setTitle("siswa");
    };

    const onClickLaporan = () => {
        setTitle("laporan");
    };

    const fetchDataSiswa = () => {
        http.post("/admin/master/siswa").then((res) => {
            setSiswa(res.data.siswa);
            setIsLoading(false);
        });
    };

    const fetchDataLaporan = () => {
        http.post("/admin/master/siswa/getLaporanSiswa").then((res) => {
            setLaporan(res.data.laporanSiswa);
            setIsLoading(false);
            console.log(res.data.laporanSiswa);
        });
    }

    const banSiswa = (siswa_id) => {
        console.log(siswa_id);
        http.post("/admin/master/bansiswa", {
            siswa_id: siswa_id,
        }).then((res) => {
            //refresh
            console.log(res);
            fetchDataSiswa(true);
        });
    };

    useEffect(() => {
        fetchDataSiswa();
        fetchDataLaporan();
    }, []);

    const cetakSiswa = siswa.map((siswa, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.siswa_id}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.nama}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.email}</td>
            <td>
                <button
                    type="button"
                    onClick={() => banSiswa(siswa.siswa_id)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-600 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                >
                    {siswa.status == 1 ? "Aktif" : "Banned"}
                </button>
            </td>
            <td>
                <Link to={`/admin/master/siswa/detail/${siswa.siswa_id}`}>
                    <button
                        type="button"
                        className="py-2 px-6 bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                    >
                        Detail
                    </button>
                </Link>
            </td>
        </tr>
    ));

    const cetakLaporan = laporan.map((lap, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-base">{lap.siswa}</td>
            <td className="whitespace-pre-wrap text-base">{lap.guru}</td>
            <td className="whitespace-pre-wrap text-base">{lap.deskripsi.substring(0,100)}</td>
            <td className="whitespace-pre-wrap text-base">{lap.bukti.substring(0,100)}</td>
            {
                lap.statusInt==1 ?
                <td className="whitespace-pre-wrap text-base text-green-700">{lap.status}</td> :
                <td className="whitespace-pre-wrap text-base text-red-700">{lap.status}</td>
            }
            <td>
                <Link to={`/admin/master/siswa/laporan/${lap.id}`}>
                    <button
                        type="button"
                        className="py-2 px-6 bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                    >
                        Detail
                    </button>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="siswa">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md my-3">
                                <div
                                    className={
                                        (title == "siswa" && classSelected) ||
                                        (title != "siswa" && classOther)
                                    }
                                    onClick={onClickSiswa}
                                >
                                    Siswa
                                </div>
                                <div
                                    className={
                                        (title == "laporan" && classSelected) ||
                                        (title != "laporan" && classOther)
                                    }
                                    onClick={onClickLaporan}
                                >
                                    Laporan Siswa
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto p-6 mb-6 rounded-md drop-shadow-lg">
                                <table className="table table-compact w-full text-black overflow-y-auto table-auto">
                                    <thead>
                                        {
                                            title=="siswa" &&
                                            <tr>
                                                <th className="bg-white text-center text-base">
                                                    NO
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    ID
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    NAMA
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    EMAIL
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    STATUS
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    ACTION
                                                </th>
                                            </tr>
                                        }
                                        {
                                            title=="laporan" &&
                                            <tr>
                                                <th className="bg-white text-center text-base">
                                                    NO
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    SISWA
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    DILAPORKAN OLEH
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    DESKRIPSI
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    BUKTI
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    STATUS
                                                </th>
                                                <th className="bg-white text-center text-base">
                                                    ACTION
                                                </th>
                                            </tr>
                                        }
                                    </thead>
                                    <tbody>
                                        {title == "siswa" && cetakSiswa}
                                        {title == "laporan" && cetakLaporan}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default SiswaAdmin;
