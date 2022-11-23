import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isOpened, setIsOpened] = useState(true);

    const [chats, setChat] = useState([
        {
            msg: "Selamat pagi..",
            isSiswa: true,
        },
        {
            msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deserunt repudiandae ex minus atque facere at nemo earum! Hic necessitatibus praesentium libero minima aut amet numquam, maxime debitis possimus exercitationem.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deserunt repudiandae ex minus atque facere at nemo earum! Hic necessitatibus praesentium libero minima aut amet numquam, maxime debitis possimus exercitationem.",
            isSiswa: false,
        },
    ]);

    const changeOpened = () => {
        setIsOpened(true);
    };

    const changeClosed = () => {
        setIsOpened(false);
    };

    const changeToggle = () => {
        setIsOpened(!isOpened);
    };

    const classSiswa = "float-right mt-4 py-2 px-3 bg-custom-light-blue rounded-xl rounded-br-none";
    const classGuru = "float-left mt-4 py-2 px-3 bg-gray-200 rounded-xl rounded-bl-none";

    const cetakChat = chats.map((chat, index) => (
        <div className={(chat.isSiswa && classSiswa) || (!chat.isSiswa && classGuru)}>
            {chat.msg}
        </div>
    ));

    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-24 z-0">
            {isOpened && (
                <div className="fixed bottom-14 lg:bottom-32 right-0 lg:right-32 bg-transparent duration-500">
                    <div className="w-300px bg-custom-blue px-4 rounded-t-lg">
                        <div className="w-full py-4 font-semibold text-white">
                            <div className="float-left">Chat Guru</div>
                            <div className="float-right cursor-pointer" onClick={changeClosed}>✕</div>
                            <div className="clear-both"></div>
                        </div>
                    </div>
                    <div className="w-300px h-200px lg:h-300px p-6 pt-2 overflow-auto bg-white">
                        {cetakChat}
                    </div>
                    <div className="w-300px bg-custom-blue px-4 rounded-b-lg">
                        <div className="w-full py-4 font-semibold text-white">
                            <div className="float-left">Chat Guru</div>
                            <div className="float-right cursor-pointer" onClick={changeClosed}>✕</div>
                            <div className="clear-both"></div>
                        </div>
                    </div>
                </div>
            )}
            <div
                onClick={changeToggle}
                className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 p-2 bg-custom-light-blue text-custom-blue rounded-lg text-4xl cursor-pointer duration-500 hover:text-custom-light-blue hover:bg-custom-blue"
            >
                <FontAwesomeIcon icon={faIcon.faMessage}></FontAwesomeIcon>
            </div>
            <div className="my-5 w-full">
                {/* layar besar */}
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="text-white float-right cursor-pointer text-3xl">
                        <FontAwesomeIcon
                            icon={faIcon.faUserCircle}
                        ></FontAwesomeIcon>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-2 cursor-pointer">
                        <Link to="/kursus/search">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
                {/* layar kecil */}
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to="/">Akademika</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right cursor-pointer">
                        <Link to="/kursus/search">Halo, User</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Kursus Saya</Link>
                    </div>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
