import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import SiswaNav from "./Navbar";

const KursusSaya = () => {
    const [listCourse, setListCourse] = useState([
        {
            nama: "Pengembangan Website Front-End Dasar 1",
            harga: 250000,
            deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
            durasi: 40
        },
        {
            nama: "Pengembangan Website Front-End Dasar 2",
            harga: 250000,
            deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
            durasi: 40
        },
    ])

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
                                <CourseCard course={n} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default KursusSaya
