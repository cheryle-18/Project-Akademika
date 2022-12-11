import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import SiswaNav from "./Navbar";
import AuthUser from "../../components/AuthUser";

const PengumumanKursus = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const { http, user, token } = AuthUser();
    const { kursus_id } = useParams();
    let history = useHistory();
    const [title, setTitle] = useState("pengumuman");
    const [course, setCourse] = useState([]);
    const [msgs, setMsg] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const onClickMateri = () => {
        setTitle("materi");
        let path = "/siswa/kursus/" + kursus_id + "/detail";
        history.push(path);
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
        let path = "/siswa/kursus/" + kursus_id + "/pengumuman";
        history.push(path);
    };

    const fetchKursus = () => {
        http.post("/siswa/kursus/getDetail", {
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };
    const fetchPengumuman = () => {
        http.post("/siswa/kursus/getPengumuman", {
            kursus_id: kursus_id,
        }).then((res) => {
            setMsg(res.data.pengumuman);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchKursus();
    }, []);

    useEffect(() => {
        fetchPengumuman();
    }, [course]);

    const cetakMsg = msgs.map((msg, index) => (
        <div className="min-h-0 p-6 bg-white mt-2 rounded shadow-lg">
            <div className="flex">
                <div className="col-span-1 h-full my-auto text-3xl ml-2">
                    <FontAwesomeIcon icon={faIcon.faBullhorn}></FontAwesomeIcon>
                </div>
                <div className="ml-6">{msg.deskripsi}</div>
            </div>
        </div>
    ));

    return (
        <div>
            {isLoading ||
            token == null ||
            user == "admin" ||
            user.role_text == "guru" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="relative bg-gray-100">
                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                    <SiswaNav />
                    {/* </div> */}
                    <div className="banner">
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
                    </div>

                    <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 py-10">
                        <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
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
                        </div>
                    </div>

                    <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 bg-gray-100">
                        <div className="text-blue-900 text-3xl font-semibold">
                            Pengumuman Baru
                        </div>
                    </div>

                    <div className="static min-h-300px w-full z-0 px-4 sm:px-16 md:px-24 py-10 -mt-7">
                        {cetakMsg}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PengumumanKursus;
