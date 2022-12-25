import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";
import { Link, useParams, useHistory } from "react-router-dom";

const KursusProses = () => {
    const { http, user, token } = AuthUser();
    const [listDiajukan, setListDiajukan] = useState([]);

    const [listDraft, setListDraft] = useState([]);
    const [listDitolak, setListDitolak] = useState([]);

    //tabs
    const [title, setTitle] = useState("proses");
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

    const fetchKursusProses = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type: "proses",
        }).then((res) => {
            setListDiajukan(res.data.kursus);
            setIsLoading(false);
        });
    };

    const fetchKursusDraft = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type: "draft",
        }).then((res) => {
            setListDraft(res.data.kursus);
        });
    };

    const fetchKursusDitolak = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type: "ditolak",
        }).then((res) => {
            setListDitolak(res.data.kursus);
        });
    };


    useEffect(() => {
        fetchKursusProses();
        fetchKursusDraft();
        fetchKursusDitolak();
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
                <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                    <GuruNav />
                    {/* </div> */}
                    <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                        <div className="tabs w-auto">
                            <Tabs titleParam={title}></Tabs>
                        </div>
                    </div>
                    <div className="content w-full px-24">
                        <div className="text-3xl text-blue-900 font-semibold">
                            Sedang Diajukan
                        </div>
                        <div className="w-full mt-10 content flex flex-wrap gap-10">
                            {listDiajukan.length != 0 ? (
                                listDiajukan.map((n, index) => {
                                    return (
                                        <CourseCard
                                            course={n}
                                            key={index}
                                            status="proses"
                                        />
                                    );
                                })
                            ) : (
                                <div className="text-xl">
                                    Tidak ada kursus
                                </div>
                            )}
                        </div>
                        <div className="text-3xl text-blue-900 font-semibold mt-12">
                            Draft
                        </div>
                        <div className="w-full mt-10 content flex flex-wrap gap-10">
                            {listDraft.length != 0 ? (
                                listDraft.map((n, index) => {
                                    return (
                                        <CourseCard
                                            course={n}
                                            key={index}
                                            status="draft"
                                        />
                                    );
                                })
                            ) : (
                                <div className="text-xl">
                                    Tidak ada kursus
                                </div>
                            )}
                        </div>
                        <div className="text-3xl text-blue-900 font-semibold mt-12">
                            Ditolak
                        </div>
                        <div className="w-full mt-10 content flex flex-wrap gap-10 mb-12">
                            {listDitolak.length != 0 ? (
                                listDitolak.map((n, index) => {
                                    return (
                                        <CourseCard
                                            course={n}
                                            key={index}
                                            status="ditolak"
                                        />
                                    );
                                })
                            ) : (
                                <div className="text-xl">
                                    Tidak ada kursus
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KursusProses;
