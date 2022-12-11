import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";
import { Link, useParams, useHistory } from "react-router-dom";

const KursusDiterbitkan = () => {
    const { http, user, token } = AuthUser();
    const [listCourse, setListCourse] = useState([]);

    //tabs
    const [title, setTitle] = useState("live");
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

    const fetchKursus = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type: "diterbitkan",
        }).then((res) => {
            setListCourse(res.data.kursus);
            setIsLoading(false);
            // console.log(res);
        });
    };

    useEffect(() => {
        fetchKursus();
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
                        <div className="diajukan my-6 content flex flex-wrap gap-10">
                            {listCourse.length != 0 ? (
                                listCourse.map((n, index) => {
                                    return (
                                        <CourseCard
                                            course={n}
                                            key={index}
                                            status="diterbitkan"
                                        />
                                    );
                                })
                            ) : (
                                <div className="text-xl text-blue-900">
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

export default KursusDiterbitkan;
