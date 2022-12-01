import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import SiswaNav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { useParams } from "react-router-dom";

const KursusSaya = () => {
    const {http,user} = AuthUser()
    const { id } = useParams();
    const [listCourse, setListCourse] = useState([])
    const fetchKursus = () => {
        http.post("/siswa/kursus/get", {
            siswa_id: id,
        }).then((res) => {
            setListCourse(res.data.kursus);
        });
    };

    useEffect(() => {
        fetchKursus();
    }, []);

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <SiswaNav />
            </div>
            <div className="content w-full px-24 py-12">
                <div className="text-3xl text-blue-900 font-semibold">
                    Kursus Saya
                </div>
                <div className="w-full mt-10 content flex flex-wrap gap-10">
                    {
                        listCourse.map((n, index) => {
                            return(
                                <CourseCard kursus_id={1} course={n} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default KursusSaya;
