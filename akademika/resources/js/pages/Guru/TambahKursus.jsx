import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import GuruNav from "./Navbar"

const TambahKursus = () => {
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

    //tabs
    let history = useHistory()
    const [title, setTitle] = useState("new");
    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const onClickLive = () => {
        setTitle("live")
        let  path = "/guru/kursus/diterbitkan"
        history.push(path)
    };

    const onClickProses = () => {
        setTitle("proses")
        let  path = "/guru/kursus/diproses"
        history.push(path)
    };

    const onClickNew = () => {
        setTitle("new")
        let  path = "/guru/kursus/tambah"
        history.push(path)
    };

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md mb-10 mt-4">
                        <div
                            className={
                                (title == "live" && classSelected) ||
                                (title != "live" && classOther)
                            }
                            onClick={onClickLive}
                        >
                            Diterbitkan
                        </div>
                        <div
                            className={
                                (title == "proses" && classSelected) ||
                                (title != "proses" && classOther)
                            }
                            onClick={onClickProses}
                        >
                            Dalam Proses
                        </div>
                        <div
                            className={
                                (title == "new" && classSelected) ||
                                (title != "new" && classOther)
                            }
                            onClick={onClickNew}
                        >
                            Tambah Baru
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}

export default TambahKursus
