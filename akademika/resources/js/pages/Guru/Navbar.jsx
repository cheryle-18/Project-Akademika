import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const GuruNav = () => {
    const [isOpened, setIsOpened] = useState(false);
    const { http, user } = AuthUser();
    const [siswa_id_now, setSiswaIdNow] = useState(null);
    const [chats, setChat] = useState([]);

    const [siswas, setSiswa] = useState([]);

     //to fetch all available chats
     const fetchDataSiswa = () => {
        http.post("/guru/kursus/getSiswa", {
            kursus_id: 33,
        }).then((res) => {
            setSiswa(res.data.siswa);
            console.log(res);
        });
    };

    useEffect(() => {
        fetchDataSiswa();
    }, []);
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
            if(chat.pivot.siswa_id === siswa_id){
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
            {chat.pivot.siswa_id == siswa_id_now && (
                <div>
                    <div
                        className={
                            (chat.pivot.pengirim_role == "siswa" &&
                                classSiswa) ||
                            (chat.pivot.pengirim_role == "guru" && classGuru)
                        }
                    >
                        {chat.pivot.isi}
                    </div>
                    <div className="clear-both"></div>
                </div>
            )}
        </div>
    ));

    const cetakSiswa = siswas.map((siswa, index) => (
        <div className="pr-2 mt-2">
            <div
                className="mx-2 w-130px bg-white py-2 overflow-x-hidden rounded-lg cursor-pointer overflow-y-hidden"
                onClick={() => {
                    setSiswaIdNow(siswa.siswa_id);
                    setTimeout(last, 10);
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
        http.post("/siswa/kursus/getPesan", {
            siswa_id: user.siswa_id,
            kursus_id: 33,
        }).then((res) => {
            setChat(res.data.pesan);
            if (isLast) {
                setTimeout(last, 10);
            }
        });
    };

    const sendMessage = () => {
        http.post("/guru/kursus/kirimPesan", {
            siswa_id: user.siswa_id,
            kursus_id: 33,
            isi: chatContent,
        }).then((res) => {
            //refresh
            console.log(res);
            fetchDataChat(true);
            setTimeout(() => {
                setChatContent("");
                last();
            }, 10);
        });
    };

    useEffect(() => {
        // fetchDataChat(true);
        // setInterval(() => {
        //     fetchDataChat(false);
        // }, 2000);
    }, [siswa_id_now]);

    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-16">
            {/* {isOpened && (
                <div className="fixed bottom-14 lg:bottom-32 right-160px lg:right-72 bg-transparent duration-500 z-10">
                    <div className="w-150px bg-custom-light-blue px-4 rounded-t-lg relative">
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
                        <div className="w-160px h-330px lg:h-430px overflow-auto bg-custom-light-blue top-0 left-0 absolute z-20">
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
                                onClick={sendMessage}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="clear-both"></div>
                        <div className="w-300px lg:w-400px bg-custom-light-blue absolute z-5 h-20 top-0 left-0 rounded-bl-lg"></div>
                    </div>
                </div>
            )}
            {isOpened && (
                <div className="fixed bottom-14 lg:bottom-32 right-0 lg:right-32 bg-transparent duration-500 z-10">
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
                    <div className="w-300px lg:w-400px bg-custom-blue px-4 rounded-b-lg h-fit">
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
                <FontAwesomeIcon icon={faIcon.faMessage}></FontAwesomeIcon>
            </div> */}
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/guru/profile">Halo, Guru</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/laporan">Laporkan Siswa</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/kursus">Kursus Saya</Link>
                    </div>
                </div>
                {/* layar kecil */}
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/guru/profile">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/laporan">Laporkan Siswa</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guru/kursus">Kursus Saya</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuruNav;
