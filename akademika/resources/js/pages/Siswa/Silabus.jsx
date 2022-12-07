import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
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

    const fetchKursus = () => {
        http.post("/siswa/kursus/getDetail", {
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };

    useEffect(() => {
        fetchKursus();
    }, []);

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    //tabs
    let history = useHistory();
    const [title, setTitle] = useState("materi");
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const onClickMateri = () => {
        setTitle("materi");
        let path = "/siswa/kursus/" + kursus_id + "/detail";
        history.push(path);
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
        let path = "/siswa/kursus/" + kursus_id + "/pengumuman";
        history.push(path);
    };

    const [isOpened, setIsOpened] = useState(false);
    const [chats, setChat] = useState([]);
    const [chatContent, setChatContent] = useState("");

    const last = () => {
        document.getElementById("last").click();
        document.getElementById("inputMessage").focus();
    };

    const changeOpened = () => {
        setIsOpened(true);
    };

    const changeClosed = () => {
        setIsOpened(false);
    };

    const changeToggle = () => {
        setIsOpened(!isOpened);
        // last();
        setTimeout(last, 10);
    };
    const classSiswa =
        "float-right mt-4 py-2 px-3 bg-custom-light-blue rounded-xl rounded-br-none";
    const classGuru =
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

    //to fetch all available chats
    const fetchDataChat = (isLast) => {
        http.post("/siswa/kursus/getPesan", {
            siswa_id: user.siswa_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setChat(res.data.pesan);
            if (isLast) {
                setTimeout(last, 10);
            }
        });
    };

    const sendMessage = () => {
        http.post("/siswa/kursus/kirimPesan", {
            siswa_id: user.siswa_id,
            kursus_id: kursus_id,
            isi: chatContent,
        }).then((res) => {
            //refresh
            console.log(res);
            fetchDataChat(true);
            setTimeout(() => {
                setChatContent("");
            }, 10);
        });
    };

    useEffect(() => {
        fetchDataChat(true);
        setInterval(() => {
            fetchDataChat(false);
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
            {isOpened && (
                <div className="fixed bottom-14 lg:bottom-10 right-0 lg:right-32 bg-transparent duration-500 z-10">
                    <div className="w-400px bg-custom-blue px-4 rounded-t-lg">
                        <div className="w-full py-4 font-semibold text-white">
                            <div className="float-left">Chat Guru</div>
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
                        className="w-400px h-200px lg:h-300px p-6 pt-4 overflow-auto bg-white"
                        id="scroll_content relative"
                    >
                        <a
                            id="last"
                            href="#section"
                            className="absolute top-0 right-0 w-full flex justify-center items-center mt-16 hover:text-custom-blue"
                        >
                            <div className="bg-white w-350px flex justify-center items-center -mt-2">
                                <div className="px-1 py-1 bg-light-blue-50 w-fit rounded-lg">
                                    Lihat Chat Terakhir
                                </div>
                            </div>
                        </a>
                        {cetakChat}
                        <div id="section" className=""></div>
                    </div>
                    <div className="w-400px bg-custom-blue px-4 rounded-b-lg h-fit">
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
                                onClick={sendMessage}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
            )}
            {props.isGuest == null && (
                <div
                    onClick={changeToggle}
                    className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 p-2 bg-custom-light-blue text-custom-blue rounded-lg text-4xl cursor-pointer duration-500 hover:text-custom-light-blue hover:bg-custom-blue z-10"
                >
                    <FontAwesomeIcon icon={faIcon.faMessage}></FontAwesomeIcon>
                </div>
            )}
            {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue flex-none"> */}
                {props.isGuest == null && <SiswaNav></SiswaNav>}
                {props.isGuest != null && <GuestNav></GuestNav>}
            {/* </div> */}
            <div className="banner">
                <div
                    className="static h-80 w-full z-0 px-4 sm:px-16 md:px-20 py-20 flex"
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
                        <div className="text-lg">{course.deskripsi}</div>
                    </div>
                </div>
            </div>
            <div className="silabus px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
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
                </div>
                <div className="font-bold text-3xl text-blue-900 mb-6">
                    Silabus Kursus
                </div>
                <Fragment>
                    <Accordion
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
                    </Accordion>
                    <Accordion
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
                    </Accordion>
                </Fragment>
            </div>
        </div>
    );
};

export default Silabus;
