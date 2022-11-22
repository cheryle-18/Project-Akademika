import React, { useState, useEffect, Fragment } from "react";
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
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("pengumuman");

    const onClickMateri = () => {
        setTitle("materi");
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
    };

    const [msgs, setMsg] = useState([
        {
            isi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem tempore recusandae enim quam, suscipit fugiat a assumenda, vero nam officiis fuga tenetur? Molestias ratione recusandae cum. At, natus? Sunt, autem?"
        },
        {
            isi: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem tempore recusandae enim quam, suscipit fugiat a assumenda, vero nam officiis fuga tenetur? Molestias ratione recusandae cum. At, natus? Sunt, autem?"
        },
    ]);

    const cetakMsg = msgs.map((msg, index) => (
        <div className="min-h-0 py-6 px-10 bg-white mt-2 rounded-md shadow-lg">
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
            <div
                className="static min-h-30vh w-full z-0 px-4 sm:px-16 md:px-24 py-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <div className="text-4xl font-semibold text-white">
                    Pengembangan Website Front-End Dasar
                </div>
                <div className="pt-4 text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio dolor ipsum molestias magni distinctio aperiam sit
                    repudiandae nam atque porro, cum aliquam praesentium
                    excepturi debitis autem. Harum fugiat minus blanditiis?
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

            <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24">
                <div className="text-black text-3xl font-semibold">
                    Pengumuman Baru
                </div>
            </div>

            <div className="static min-h-300px w-full z-0 px-4 sm:px-16 md:px-24 py-10 -mt-10">
                {cetakMsg}
            </div>
        </div>
    );
};

export default PengumumanKursus;
