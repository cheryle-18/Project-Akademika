import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";

const KursusProses = () => {
    const [listDiajukan, setListDiajukan] = useState([
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

    const [listDraft, setListDraft] = useState([
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

    //tabs
    const [title, setTitle] = useState("proses");

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
                <div className="text-2xl text-blue-900 font-semibold">
                    Sedang Diajukan
                </div>
                <div className="diajukan my-6 content flex flex-wrap gap-10">
                    {
                        listDiajukan.map((n, index) => {
                            return(
                                <CourseCard course={n} key={index} />
                            )
                        })
                    }
                </div>
                <div className="text-2xl text-blue-900 font-semibold mt-12">
                    Draft
                </div>
                <div className="diajukan my-6 content flex flex-wrap gap-10">
                    {
                        listDraft.map((n, index) => {
                            return(
                                <CourseCard course={n} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default KursusProses
