import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import GuruNav from "./Navbar";
import { Input, Textarea } from "@material-tailwind/react";
import TabsKursus from "./TabsKursus";
import BannerKursus from "./BannerKursus";
import AuthUser from "../../components/AuthUser";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
const TambahPengumuman = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("pengumuman");
    const { kursus_id } = useParams();
    const { http, user, token } = AuthUser();

    const [course, setCourse] = useState([]);
    const [deskripsi, setDeskripsi] = useState("");

    const [msgs, setMsg] = useState([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (user == "admin") {
            return history.push("/admin/home");
        } else if (token == null) {
            return history.push("/");
        } else if (user.role_text == "siswa") {
            return history.push("/siswa/kursus");
        }
    }, 1000);

    const sweetAlert = withReactContent(Swal)
    const fireAlert = (title,icon,status,text) => {
        sweetAlert.fire({
            title: <strong>{title}</strong>,
            text:text,
            icon: icon,
            confirmButtonColor:"#0D47A1",
        })
    }

    const fetchKursus = () => {
        http.post("/guru/kursus/get", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            console.log(res.data.kursus);
            setCourse(res.data.kursus);
            setIsLoading(false);
        });
    };

    const fetchPengumuman = () => {
        http.post("/guru/kursus/getPengumuman", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            console.log(res.data.pengumuman);
            setMsg(res.data.pengumuman);
            setIsLoading(false);
        });
    };

    const submitTambah = () => {
        http.post("/guru/kursus/tambahPengumuman", {
            kursus_id: kursus_id,
            deskripsi: deskripsi,
        }).then((res) => {
            if(res.data == 1){
                fireAlert("Sukses!","success","tambah","Berhasil tambah pengumuman!")
                fetchPengumuman();
            }
            else{
                fireAlert("Error!","error","tambah",res.data+"!")
            }

        });
    };

    useEffect(() => {
        fetchKursus();
        fetchPengumuman();
    }, []);

    return (
        <div>
            {isLoading ||
            token == null ||
            user == "admin" ||
            user.role_text == "siswa" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
                    <GuruNav></GuruNav>
                    <BannerKursus
                        courseParam={course}
                        id={kursus_id}
                    ></BannerKursus>
                    {/* <div className="banner">
                <div
                className="static h-80 w-full z-0 px-4 sm:px-16 md:px-24 py-20 flex"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
                >
                    <div className="flex flex-col text-white my-auto">
                        <div className="font-bold text-4xl mb-3">
                            {course.nama}
                        </div>
                        <div className="text-xl mb-6 font-semibold">
                            {course.kategori}
                        </div>
                        <div className="text-lg">
                            {course.deskripsi}
                        </div>
                    </div>
                </div>
            </div> */}

                    <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 py-6">
                        {/* <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                    <div
                        className={
                            (title == "materi" && classSelected) ||
                            (title != "materi" && classOther)
                        }
                        onClick={onClickMateri}
                    >
                        Materi
                    </div>
                    <div
                        className={
                            (title == "pengumuman" && classSelected) ||
                            (title != "pengumuman" && classOther)
                        }
                        onClick={onClickPengumuman}
                    >
                        Pengumuman
                    </div>
                </div> */}

                        <div className="tabs text-xl text-custom-blue mb-4">
                            <Link
                                to="/guru/kursus/diterbitkan"
                                className="rounded-xl py-2"
                            >
                                <div className="float-left">
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-left ml-4 text-custom-blue inline underline">
                                    Kembali ke kursus saya
                                </div>
                                <div className="clear-both"></div>
                            </Link>
                        </div>
                        <div className="tabs w-auto">
                            <TabsKursus
                                titleParam={title}
                                kursus_id={kursus_id}
                            ></TabsKursus>
                        </div>
                    </div>

                    <div className="content flex flex-wrap gap-10 w-full px-24 pb-10">
                        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                            <table>
                                <tbody>
                                    <tr className="p-2">
                                        <td className="py-4 align-top">
                                            Pengumuman
                                        </td>
                                        <td className="py-2">
                                            <Textarea
                                                className="w-full"
                                                name="pengumuman"
                                                onChange={(e) => {
                                                    setDeskripsi(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="p-2">
                                        <td className="w-1/6 align-top"></td>
                                        {/* <td className="py-4 w-1/6 align-top">Link Terkait</td> */}
                                        <td className="flex flex-col">
                                            {/* <Input
                                    type="text"
                                    className="w-full"
                                    name="link"
                                />
                                <div className="text-sm text-gray-500 mt-1">
                                    *sertakan link terkait pengumuman (opsional)
                                </div> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button
                                className="btn w-full mt-12 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal"
                                name="btnTambah"
                                onClick={submitTambah}
                            >
                                Tambah Pengumuman
                            </button>
                        </div>

                        <div className="static min-h-0 w-full z-0 bg-gray-100">
                            <div className="text-blue-900 text-2xl font-semibold">
                                Daftar Pengumuman
                            </div>
                        </div>

                        <div className="static min-h-300px w-full z-0 -mt-5">
                            {msgs.map((msg, index) => {
                                return (
                                    <div className="min-h-0 p-6 bg-white mt-2 rounded shadow-lg">
                                        <div className="flex">
                                            <div className="col-span-1 h-full my-auto text-3xl ml-2">
                                                <FontAwesomeIcon
                                                    icon={faIcon.faBullhorn}
                                                ></FontAwesomeIcon>
                                            </div>
                                            <div className="ml-6">
                                                {msg.deskripsi}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TambahPengumuman;
