import React, { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useParams } from "react-router-dom";

import Nav from "./Navbar";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import AuthUser from "../../components/AuthUser";
import BannerKursus from "./BannerKursus";
import TabsKursus from "./TabsKursus";
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

const DetailDiterbitkan = () => {
    const [isOpened, setIsOpened] = useState(false);
    const { http, user, token } = AuthUser();
    const [siswa_id_now, setSiswaIdNow] = useState(null);
    const [chats, setChat] = useState([]);

    const [siswas, setSiswa] = useState([]);
    const [chatContent, setChatContent] = useState("");
    const [title, setTitle] = useState("home");
    const { kursus_id } = useParams();

    const [subbab, setKuis] = useState([]);

    const [listSubbab, setListSubbab] = useState([]);

    const [course, setCourse] = useState([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (user == "admin") {
            return history.push("/admin/home");
        } else if (token == null) {
            return history.push("/");
        } else if (user.role_text == "siswa") {
            return history.push("/siswa/kursus");
        }
    }, 1000);

    // setTimeout(() => {
    //     if(token){

    //     }
    // }, 1000);

    //to fetch all available chats
    const fetchDataSiswa = () => {
        http.post("/guru/kursus/getSiswa", {
            kursus_id: kursus_id,
        }).then((res) => {
            setSiswa(res.data.siswa);
        });
    };

    const fetchKursus = () => {
        http.post("/guru/kursus/get", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
            setIsLoading(false);
        });
    };

    const fetchSubbab = () => {
        http.post("/guru/kursus/getAllSubbabKuis", {
            kursus_id: kursus_id,
        }).then((res) => {
            setListSubbab(res.data.subbab);
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchDataSiswa();
        fetchSubbab();
    }, []);

    useEffect(() => {
        fetchDataChat(true);
    }, [siswa_id_now]);

    useEffect(() => {
        console.log(subbab);
    }, [subbab]);

    const last = () => {
        document.getElementById("last").click();
        document.getElementById("inputMessage").focus();
    };

    const changeOpened = () => {
        setIsOpened(true);
    };

    const changeClosed = () => {
        setIsOpened(false);
        setSiswaIdNow(null);
    };

    const changeToggle = () => {
        setIsOpened(!isOpened);
        // last();
        setTimeout(last, 10);
    };

    const getChat = (siswa_id) => {
        var chatNow = null;
        chats.forEach((chat) => {
            if (chat.pivot.siswa_id === siswa_id) {
                chatNow = chat;
            }
        });
        return chatNow;
    };

    const classGuru =
        "float-right mt-4 py-2 px-3 bg-custom-light-blue rounded-xl rounded-br-none";
    const classSiswa =
        "float-left mt-4 py-2 px-3 bg-gray-200 rounded-xl rounded-bl-none";

    const cetakChat = chats.map((chat, index) => (
        <div>
            <div
                className={
                    (chat.pivot.pengirim_role == "siswa" && classSiswa) ||
                    (chat.pivot.pengirim_role == "guru" && classGuru)
                }
            >
                {chat.pivot.isi}
            </div>
            <div className="clear-both"></div>
        </div>
    ));

    const cetakSiswa = siswas.map((siswa, index) => (
        <div className="pl-1 mt-2">
            <div
                className="mx-2 w-130px bg-white py-2 overflow-x-hidden rounded-lg cursor-pointer overflow-y-hidden"
                onClick={() => {
                    setSiswaIdNow(siswa.siswa_id);
                    setChatContent("");
                }}
            >
                <div className="float-left h-11 flex justify-center items-center w-fit text-3xl">
                    <FontAwesomeIcon
                        icon={faIcon.faUserCircle}
                    ></FontAwesomeIcon>
                </div>
                <div className="float-left w-90px pt-1 h-5 px-2 text-sm font-semibold overflow-x-hidden overflow-y-hidden">
                    {siswa.nama}
                </div>
                <div className="float-left w-90px px-2 h-5 text-xs text-gray-400 overflow-x-hidden overflow-y-hidden">
                    {getChat(siswa.siswa_id) != null &&
                        getChat(siswa.siswa_id).pivot.isi}
                </div>
                <div className="clear-both"></div>
            </div>
        </div>
    ));

    const cariSiswa = siswas.find((siswa) => {
        return siswa.siswa_id == siswa_id_now;
    });

    //to fetch all available chats
    const fetchDataChat = (isLast) => {
        http.post("/guru/kursus/getPesan", {
            guru_id: user.guru_id,
            siswa_id: siswa_id_now,
            kursus_id: kursus_id,
        }).then((res) => {
            setChat(res.data.pesan);
            if (isLast) {
                setTimeout(last, 10);
            }
        });
    };

    const sendMessage = () => {
        http.post("/guru/kursus/kirimPesan", {
            guru_id: user.guru_id,
            siswa_id: siswa_id_now,
            kursus_id: kursus_id,
            isi: chatContent,
        }).then((res) => {
            //refresh
            fetchDataChat(true);
            setTimeout(() => {
                setChatContent("");
                last();
            }, 10);
        });
    };

    const [open, setOpen] = useState(0);

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
            {isLoading ||
            token == null ||
            user == "admin" ||
            user.role_text == "siswa" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                    {isOpened && (
                        <div className="fixed bottom-14 lg:bottom-10 right-160px lg:right-72 bg-transparent duration-500 z-10 mt-2">
                            {/* <div className="fixed bottom-0 right-160px bg-transparent duration-500 z-10 mt-2"> */}
                            <div className="w-full relative">
                                <div className="absolute w-full h-10 bg-custom-blue left-40 rounded-tr-lg"></div>
                            </div>
                            <div className="w-150px bg-custom-light-blue px-4 rounded-t-lg relative rounded-tl-lg">
                                <div className="w-full py-4 font-semibold text-white">
                                    <div className="float-left"></div>
                                    <div
                                        className="float-right cursor-pointer"
                                        onClick={changeClosed}
                                    >
                                        ✕
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                                <div className="w-160px h-330px lg:h-430px overflow-auto bg-custom-light-blue top-0 left-0 absolute z-20 rounded-tl-lg">
                                    {cetakSiswa}
                                </div>
                            </div>
                            <div
                                className="w-300px lg:w-400px h-200px lg:h-300px pt-4 overflow-auto bg-custom-light-blue"
                                id="scroll_content relative"
                            ></div>
                            <div className="w-300px lg:w-400px bg-custom-light-blue px-4 rounded-b-lg h-fit relative">
                                <div className="w-10/12 p-4 font-semibold float-left">
                                    <input
                                        id="inputMessage"
                                        type="text"
                                        placeholder="Tuliskan pesan..."
                                        class="input input-bordered w-full border-2 text-black rounded-3xl placeholder-gray-700"
                                        onChange={(e) => {
                                            setChatContent(e.target.value);
                                        }}
                                        value={chatContent}
                                    />
                                </div>
                                <div
                                    className="w-2/12 float-right h-20 -mt-1 flex justify-center items-center text-3xl cursor-pointer"
                                    style={{ rotate: "50deg" }}
                                >
                                    <FontAwesomeIcon
                                        className="text-white"
                                        icon={faIcon.faPaperPlane}
                                        // onClick={sendMessage}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="clear-both"></div>
                                <div className="w-300px lg:w-400px bg-custom-light-blue absolute z-5 h-20 top-0 left-0 rounded-bl-lg"></div>
                            </div>
                        </div>
                    )}
                    {isOpened && (
                        <div className="fixed bottom-14 lg:bottom-10 right-0 lg:right-32 bg-transparent duration-500 z-20">
                            {/* <div className="fixed bottom-0 right-0 bg-transparent duration-500 z-20"> */}
                            <div className="w-300px lg:w-400px bg-custom-blue px-4 rounded-tr-lg">
                                <div className="w-full py-4 font-semibold text-white">
                                    <div className="float-left">
                                        {siswa_id_now == null && "Chat Siswa"}
                                        {siswa_id_now != null && cariSiswa.nama}
                                    </div>
                                    <div
                                        className="float-right cursor-pointer"
                                        onClick={changeClosed}
                                    >
                                        ✕
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                            </div>
                            <div
                                className="w-300px lg:w-400px h-200px lg:h-300px p-6 pt-4 overflow-auto bg-white"
                                id="scroll_content relative"
                            >
                                {siswa_id_now != null && (
                                    <a
                                        id="last"
                                        href="#section"
                                        className="absolute top-0 right-0 w-full flex justify-center items-center mt-16 hover:text-custom-blue"
                                    >
                                        <div className="bg-white w-250px lg:w-350px flex justify-center items-center -mt-2">
                                            <div className="px-1 py-1 bg-light-blue-50 w-fit rounded-lg">
                                                Lihat Chat Terakhir
                                            </div>
                                        </div>
                                    </a>
                                )}
                                {cetakChat}
                                <div id="section" className=""></div>
                            </div>
                            <div className="w-300px lg:w-400px bg-custom-blue px-4 rounded-br-lg h-fit">
                                <div className="w-10/12 p-4 font-semibold float-left">
                                    {siswa_id_now != null && (
                                        <input
                                            id="inputMessage"
                                            type="text"
                                            placeholder="Tuliskan pesan..."
                                            class="input input-bordered w-full border-2 text-black rounded-3xl placeholder-gray-700"
                                            onChange={(e) => {
                                                setChatContent(e.target.value);
                                            }}
                                            value={chatContent}
                                        />
                                    )}
                                </div>
                                <div
                                    className="w-2/12 float-right h-20 -mt-1 flex justify-center items-center text-3xl cursor-pointer"
                                    style={{ rotate: "50deg" }}
                                >
                                    {siswa_id_now != null && (
                                        <FontAwesomeIcon
                                            className="text-white"
                                            icon={faIcon.faPaperPlane}
                                            onClick={sendMessage}
                                        ></FontAwesomeIcon>
                                    )}
                                </div>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    )}
                    <div
                        onClick={changeToggle}
                        className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 p-2 bg-custom-light-blue text-custom-blue rounded-lg text-4xl cursor-pointer duration-500 hover:text-custom-light-blue hover:bg-custom-blue z-10"
                    >
                        <FontAwesomeIcon
                            icon={faIcon.faMessage}
                        ></FontAwesomeIcon>
                    </div>

                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                    <Nav></Nav>
                    {/* </div> */}

                    <BannerKursus courseParam={course}></BannerKursus>

                    <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 py-6 bg-gray-100">
                        <div className="tabs text-xl text-custom-blue mb-4">
                            <Link
                                to="/guru/kursus/diterbitkan"
                                className="rounded-xl py-2"
                            >
                                <div className="float-left">
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-left ml-4 text-custom-blue inline underline">
                                    Kembali ke kursus saya
                                </div>
                                <div className="clear-both"></div>
                            </Link>
                        </div>
                        <div className="tabs w-auto">
                            <TabsKursus
                                titleParam={title}
                                kursus_id={kursus_id}
                            ></TabsKursus>
                        </div>
                    </div>

                    <div className="subbab p-16 m-0 w-full overflow-x-none bg-gray-100">
                        <div className="font-bold text-3xl text-blue-900 mb-5">
                            Silabus Kursus
                        </div>
                        <Fragment>
                            {cetakSilabus}
                            {/* <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="bg-blue-100 p-4 border-2 border-b-0 border-blue-900"
                        >
                            HTML
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                    </Accordion> */}
                            {/* <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className="bg-blue-100 p-4 border-2 border-b-0 border-blue-900"
                        >
                            CSS
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                    >
                        <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className="bg-blue-100 p-4 border-2 border-blue-900"
                        >
                            JavaScript
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                            </Accordion> */}
                        </Fragment>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetailDiterbitkan;
