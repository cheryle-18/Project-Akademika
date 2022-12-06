import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";


const KursusDiterbitkan = () => {
    const { http, user } = AuthUser();
    const [listCourse, setListCourse] = useState([])

    //tabs
    const [title, setTitle] = useState("live");

    const fetchKursus = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type:'diterbitkan'
        }).then((res) => {
            setListCourse(res.data.kursus);
            // console.log(res);
        });
    };

    useEffect(() => {
        fetchKursus();
    }, []);



    return(
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
                    {
                    listCourse.length!=0?(listCourse.map((n, index) => {
                            return(
                                <CourseCard course={n} key={index} />
                            )
                        })):(<div className="text-xl text-blue-900">Tidak ada kursus</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default KursusDiterbitkan;
