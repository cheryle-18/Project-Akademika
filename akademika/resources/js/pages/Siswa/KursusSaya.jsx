import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import SiswaNav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { useHistory } from "react-router-dom";

const KursusSaya = () => {
    const history = useHistory();
    const { http, user, token } = AuthUser();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const [listCourse, setListCourse] = useState([]);
    const fetchKursus = () => {
        http.post("/siswa/kursus/get", {
            siswa_id: user.siswa_id,
        }).then((res) => {
            setListCourse(res.data.kursus);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        if (token != null) {
            fetchKursus();
        }
    }, []);

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
                <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
                    <SiswaNav />
                    <div className="content w-full px-24 py-12">
                        <div className="text-3xl text-blue-900 font-semibold">
                            Kursus Saya
                        </div>
                        <div className="w-full mt-10 content flex flex-wrap gap-10">
                            {listCourse.map((n, index) => {
                                return <CourseCard course={n} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KursusSaya;
