import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import SiswaNav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import {useHistory} from "react-router-dom";


const KursusSaya = () => {
    const history = useHistory()
    const { http, user,token } = AuthUser();
    if(token == null){
        return history.push('/')
    }
    else if(token != null && user.role_text == "guru"){
        
    }

    const [listCourse, setListCourse] = useState([]);
    const fetchKursus = () => {
        http.post("/siswa/kursus/get", {
            siswa_id: user.siswa_id,
        }).then((res) => {
            setListCourse(res.data.kursus);
        });
    };

    useEffect(() => {

            fetchKursus();
    }, []);



    return (
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
    );
};

export default KursusSaya;
