import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import SiswaNav from "./Navbar";
import GuestNav from "../Nav";
import AuthUser from "../../components/AuthUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

const Silabus = (props) => {
    const { http, user } = AuthUser();
    const { kursus_id } = useParams();
    const [course, setCourse] = useState([]);

    const [listSubbab, setListSubbab] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchKursus = () => {
        http.post("/get/guest/kursus", {
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchSubbab();
    }, []);

    useEffect(() => {
        console.log(listSubbab);
    }, [listSubbab]);

    const [open, setOpen] = useState(0);

    const fetchSubbab = () => {
        http.post("/get/guest/getAllSubbabKuis", {
            kursus_id: kursus_id,
        }).then((res) => {
            setListSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    //tabs
    let history = useHistory();
    const [title, setTitle] = useState("materi");
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [isOpened, setIsOpened] = useState(false);
    const [chats, setChat] = useState([]);
    const [chatContent, setChatContent] = useState("");

    const last = () => {
        document.getElementById("last").click();
        document.getElementById("inputMessage").focus();
    };

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const checkClassHeader = (index) => {
        if (listSubbab.length == 1) {
            return "bg-blue-100 p-4 border-2 border-blue-900";
        } else if (listSubbab.length > 1 && index == 0) {
            return "bg-blue-100 p-4 border-2 border-blue-900";
        }
        return "bg-blue-100 p-4 border-2 border-t-0 border-blue-900";
    };

    const cetakSilabus = listSubbab.map((subbab, index) => (
        <Accordion
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
        >
            <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className={checkClassHeader(index)}
            >
                {subbab.judul}
            </AccordionHeader>
            <AccordionBody className="bg-white p-4 text-base border-2 border-t-0 border-blue-900">
                <div>
                    <div className="w-full bg-white flex mb-3">
                        <span>Materi</span>
                        <span className="ml-auto">{subbab.durasi} menit</span>
                    </div>
                    {subbab.kuis.map((kuis, indexKuis) => (
                        <div className="w-full bg-white flex">
                            <span>Kuis</span>
                            <span className="ml-auto">
                                {kuis.jumlah_soal} soal
                            </span>
                        </div>
                    ))}
                </div>
            </AccordionBody>
        </Accordion>
    ));

    return (
        <div>
            {isLoading ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
                    <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue flex-none">
                        <GuestNav></GuestNav>
                    </div>

                    <div className="banner">
                        <div
                            className="static h-96 w-full z-0 px-4 sm:px-16 md:px-16 py-14 flex"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                            }}
                        >
                            <div className="w-1/4 p-3 px-0 h-full flex flex-col">
                                <img
                                    className="w-48 h-48 mb-4 mx-auto object-cover md:rounded-none"
                                    src="/card_pic.png"
                                    alt=""
                                />
                                <label
                                    htmlFor="masukDaftar"
                                    className="btn w-48 mx-auto rounded bg-white text-blue-900 border-0 hover:bg-gray-100 capitalize font-medium text-base"
                                >
                                    Daftar Sekarang
                                </label>
                            </div>
                            <div className="w-3/4 flex flex-col text-white">
                                <div className="font-bold text-4xl mb-3">
                                    {course.nama}
                                </div>
                                <div className="text-xl mb-3 font-semibold">
                                    {course.kategori}
                                </div>
                                <div className="text-lg">
                                    {course.deskripsi}
                                </div>
                                <div className="mt-auto flex text-xl font-semibold">
                                    <span>IDR {course.harga}</span>
                                    <span className="ml-8">
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="text-white mr-2"
                                        />
                                        {course.durasi} jam
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="silabus px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                        {/* <div className="tabs w-auto">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md mb-10 mt-4">
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
                </div> */}
                        <div className="font-bold text-3xl text-blue-900 mb-6">
                            Silabus Kursus
                        </div>
                        <Fragment>{cetakSilabus}</Fragment>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Silabus;
