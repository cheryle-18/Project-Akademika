import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";
const Nav = () => {
    const [isOpened, setIsOpened] = useState(false);
    const {http,user} = AuthUser();
    const [chats, setChat] = useState([]);
    const [chatContent,setChatContent] = useState("");

    const changeOpened = () => {
        setIsOpened(true);
    };

    const changeClosed = () => {
        setIsOpened(false);
    };

    const changeToggle = () => {
        setIsOpened(!isOpened);
        var scrollContent = document.getElementById("scroll_content");
        scrollContent.scrollTop = scrollContent.scrollHeight;
    };

    const classSiswa =
        "float-right mt-4 py-2 px-3 bg-custom-light-blue rounded-xl rounded-br-none";
    const classGuru =
        "float-left mt-4 py-2 px-3 bg-gray-200 rounded-xl rounded-bl-none";


    const cetakChat = chats.map((chat, index) => (
        <div>
            <div
                className={
                    (chat.pivot.pengirim_role == 'siswa' && classSiswa) || (chat.pivot.pengirim_role == 'guru' && classGuru)
                }
            >
                {chat.pivot.isi}
            </div>
            <div className="clear-both"></div>
        </div>
    ));

      //to fetch all available chats
      const fetchDataChat = () => {
        http.post('/siswa/kursus/getPesan',{
            siswa_id:user.siswa_id,
            kursus_id:33
        }).then((res) => {
            setChat(res.data.pesan);
          })
    }

    const sendMessage = () => {
        http.post('/siswa/kursus/kirimPesan',{
            siswa_id:user.siswa_id,
            kursus_id:33,
            isi:chatContent
        }).then((res) => {
            //refresh
            console.log(res);
            fetchDataChat();
          })
    }

    useEffect(() => {
        fetchDataChat();
    }, []);

    return (
        <div className="bg-custom-blue flex w-full px-4 sm:px-16 md:px-24 z-0">
            {isOpened && (
                <div className="fixed bottom-14 lg:bottom-32 right-0 lg:right-32 bg-transparent duration-500 z-10">
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
                    <div className="w-400px h-200px lg:h-300px p-6 pt-2 overflow-auto bg-white" id="scroll_content">
                        {cetakChat}
                    </div>
                    <div className="w-400px bg-custom-blue px-4 rounded-b-lg h-fit">
                        <div className="w-10/12 p-4 font-semibold float-left">
                            <input
                                type="text"
                                placeholder="Tuliskan pesan..."
                                class="input input-bordered w-full border-2 text-black rounded-3xl placeholder-gray-700"
                                onChange={(e)=>{setChatContent(e.target.value)}}
                            />
                        </div>
                        <div
                            className="w-2/12 float-right h-20 -mt-1 flex justify-center items-center text-3xl"
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
