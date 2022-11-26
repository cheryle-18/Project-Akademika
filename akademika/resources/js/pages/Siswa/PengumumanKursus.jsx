import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const PengumumanKursus = () => {
    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    let history = useHistory()
    const [title, setTitle] = useState("pengumuman");

    const onClickMateri = () => {
        setTitle("materi");
        let path = "/siswa/kursus/detail"
        history.push(path)
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
        let  path = "/siswa/kursus/pengumuman"
        history.push(path)
    };

    const [course, setCourse] = useState({
        "nama" : "Pengembangan Website Front-End Dasar",
        "kategori" : "Teknologi Informasi",
        "deskripsi" : "Belajar fundamental dari pengembangan website front-end dengan HTML, CSS, dan JavaScript",
        "harga" : 250000,
        "durasi" : 40
    })

    const [msgs, setMsg] = useState([
        {
            isi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem tempore recusandae enim quam, suscipit fugiat a assumenda, vero nam officiis fuga tenetur? Molestias ratione recusandae cum. At, natus? Sunt, autem?"
        },
        {
            isi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem tempore recusandae enim quam, suscipit fugiat a assumenda, vero nam officiis fuga tenetur? Molestias ratione recusandae cum. At, natus? Sunt, autem?"
        },
    ]);

    const cetakMsg = msgs.map((msg, index) => (
        <div className="min-h-0 py-6 px-10 bg-white mt-2 rounded shadow-lg">
            <div className="grid grid-cols-12">
                <div className="col-span-1 h-full flex justify-center items-center text-3xl">
                    <FontAwesomeIcon
                        icon={faIcon.faMessage}
                    ></FontAwesomeIcon>
                </div>
                <div className="col-span-11">
                    {msg.isi}
                </div>
            </div>
        </div>
    ));

    return (
        <div className="relative bg-gray-100">
            <Navbar></Navbar>
            <div className="banner">
                <div
                className="static h-80 w-full z-0 px-4 sm:px-16 md:px-24 py-20 flex"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
                >
                    <div className="flex flex-col text-white my-auto">
                        <div className="font-bold text-4xl mb-3">
                            {course.nama}
                        </div>
                        <div className="text-xl mb-6 font-semibold">
                            {course.kategori}
                        </div>
                        <div className="text-lg">
                            {course.deskripsi}
                        </div>
                    </div>
                </div>
            </div>

            <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 py-10">
                <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                    <div
                        className={
                            (title == "materi" && classSelected) ||
                            (title != "materi" && classOther)
                        }
                        onClick={onClickMateri}
                    >
                        Materi
                    </div>
                    <div
                        className={
                            (title == "pengumuman" && classSelected) ||
                            (title != "pengumuman" && classOther)
                        }
                        onClick={onClickPengumuman}
                    >
                        Pengumuman
                    </div>
                </div>
            </div>

            <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 bg-gray-100">
                <div className="text-blue-900 text-3xl font-semibold">
                    Pengumuman Baru
                </div>
            </div>

            <div className="static min-h-300px w-full z-0 px-4 sm:px-16 md:px-24 py-10 -mt-7">
                {cetakMsg}
            </div>
        </div>
    );
};

export default PengumumanKursus;
