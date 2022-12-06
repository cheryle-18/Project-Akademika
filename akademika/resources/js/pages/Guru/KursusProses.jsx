import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";

const KursusProses = () => {
    const { http, user } = AuthUser();
    const [listDiajukan, setListDiajukan] = useState([])

    const [listDraft, setListDraft] = useState([])

    //tabs
    const [title, setTitle] = useState("proses");

    const fetchKursusProses = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type:'proses'
        }).then((res) => {
            setListDiajukan(res.data.kursus);
        });
    };

    const fetchKursusDraft = () => {
        http.post("/guru/kursus/getAllKursus", {
            guru_id: user.guru_id,
            type:'draft'
        }).then((res) => {
            setListDraft(res.data.kursus);

        });
    };

    useEffect(() => {
        fetchKursusProses();
        fetchKursusDraft();
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
                <div className="text-2xl text-blue-900 font-semibold">
                    Sedang Diajukan
                </div>
                <div className="diajukan my-6 content flex flex-wrap gap-10">
                    {
                       listDiajukan.length!=0?(listDiajukan.map((n, index) => {
                            return(
                                <CourseCard course={n} key={index} />
                            )
                        })):(<div className="text-xl text-blue-900">Tidak ada kursus</div>)
                    }
                </div>
                <div className="text-2xl text-blue-900 font-semibold mt-12">
                    Draft
                </div>
                <div className="diajukan my-6 content flex flex-wrap gap-10">
                    {
                        listDraft.length!=0?(listDraft.map((n, index) => {
                            return(
                                <CourseCard course={n} key={index} />
                            )
                        })):(<div className="text-xl text-blue-900">Tidak ada kursus</div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default KursusProses
