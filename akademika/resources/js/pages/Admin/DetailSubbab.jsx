import React, { useState, useEffect } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { toRupiah } from "../../components/CurrencyUtils";
import {
    Alert,
    Input,
    Radio,
    Select,
    MenuItem,
    Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import Autocomplete from "@mui/material/Autocomplete";

const DetailSubbabAdmin = (props) => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const { kursus_id, subbab_id } = useParams();
    const [course, setCourse] = useState([]);
    const [subbab, setSubbab] = useState([]);
    const [listMateri, setListMateri] = useState([]);
    const [kuis, setKuis] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    //fetch
    const fetchKursus = () => {
        http.post("/admin/master/kursus/get", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };

    const fetchSubbab = () => {
        http.post("/admin/master/kursus/getSubbab", {
            subbab_id: subbab_id,
        }).then((res) => {
            // console.log(res.data.subbab);
            setSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    const fetchMateri = () => {
        http.post("/admin/master/kursus/getAllMateri", {
            subbab_id: subbab_id,
        }).then((res) => {
            // console.log(res.data.materi);
            setListMateri(res.data.materi);
        });
    };

    const fetchKuis = () => {
        http.post("/admin/master/kursus/getKuisSubbab", {
            subbab_id: subbab_id,
        }).then((res) => {
            console.log(res.data.kuis)
            setKuis(res.data.kuis);
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchSubbab();
        fetchMateri();
        fetchKuis();
    }, []);

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="kursus detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={`/admin/master/kursus/detail/${kursus_id}`} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto px-10 py-6 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                            <div className="content flex flex-col flex-wrap w-full">
                                <div className="text-3xl text-blue-900 font-semibold mb-4">
                                    {course.nama}
                                </div>
                                <div className="text-2xl text-blue-900 font-semibold mb-6">
                                    Detail Subbab {subbab.judul}
                                </div>
                                <div className="w-full h-auto rounded-lg flex flex-col">
                                    <table>
                                        <tr className="p-2">
                                            <td className="py-4 w-1/6">Judul</td>
                                            <td>
                                                <Input
                                                    type="text"
                                                    className="w-full"
                                                    name="judul"
                                                    value={subbab.judul}
                                                    disabled
                                                />
                                            </td>
                                        </tr>
                                        <tr className="p-2">
                                            <td className="py-4 align-top">
                                                Deskripsi
                                            </td>
                                            <td className="py-2">
                                                <Textarea
                                                    className="w-full"
                                                    name="desc"
                                                    value={subbab.deskripsi}
                                                    disabled
                                                />
                                            </td>
                                        </tr>
                                        <tr className="p-2">
                                            <td className="py-4">Durasi</td>
                                            <td className="flex w-1/4 py-2">
                                                <Input
                                                    type="text"
                                                    className=""
                                                    name="durasi"
                                                    value={subbab.durasi}
                                                    disabled
                                                />
                                                <span className="ml-3 my-auto">
                                                    menit
                                                </span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
                                    Materi
                                </div>
                                <div className="materi rounded-lg">
                                    <table className="table table-compact w-full text-black">
                                        <thead>
                                            <tr>
                                                <th className=" bg-white text-center text-base">
                                                    NO
                                                </th>
                                                <th className=" bg-white text-center text-base">
                                                    BACAAN
                                                </th>
                                                <th className=" bg-white text-center text-base">
                                                    ACTION
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listMateri.map((n, index) => {
                                                return (
                                                    <tr>
                                                        <td className="text-center text-base">
                                                            {index + 1}
                                                        </td>
                                                        <td className="text-base truncate">
                                                            {n.penjelasan.substring(
                                                                0,
                                                                100
                                                            )}
                                                            ...
                                                        </td>
                                                        <td className="text-center">
                                                            <Link
                                                                to={`/admin/master/kursus/${kursus_id}/${subbab_id}/materi/${n.materi_id}`}
                                                            >
                                                                <button className="btn btn-sm capitalize bg-blue-900 text-white rounded mr-3 font-normal">
                                                                    Detail
                                                                </button>
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
                                    Kuis
                                </div>
                                <div className="w-full my-3">
                                    { kuis!=null && kuis.length>0 ? (
                                        <Link
                                            to={`/admin/master/kursus/${kursus_id}/${subbab_id}/kuis`}
                                        >
                                            <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal">
                                                Lihat Kuis
                                            </button>
                                        </Link>
                                    ) : (
                                        <div className="mb-3">
                                            Tidak ada kuis untuk materi ini
                                        </div>
                                    )}
                                </div>
                            </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailSubbabAdmin;
