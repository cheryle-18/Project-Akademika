import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
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
import { keyBy } from "lodash";
import { countBy } from "lodash";

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
    var payButton = "";
    const { http, user, token } = AuthUser();
    const { kursus_id } = useParams();
    const [course, setCourse] = useState([]);

    const [listSubbab, setListSubbab] = useState([]);
    const [snapToken, setSnapToken] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const [regisData, setRegisData] = useState([]);
    const [isMuncul, setIsMuncul] = useState(false);
    let history = useHistory();

    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const fetchKursus = () => {
        http.post("/siswa/kursus/getDetail", {
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };

    const fetchRegisterData = () => {
        http.post("/siswa/kursus/getRegisterData", {
            kursus_id: kursus_id,
            siswa_id: user.siswa_id,
        }).then((res) => {
            if (res.data.found == true) {
                setIsRegistered(true);
                setRegisData(res.data.data);
            }
            setIsFetched(true);
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchSubbab();
        fetchRegisterData();
        fetchDataChat(true);

        setInterval(() => {
            if (isOpened) {
                fetchDataChat(false);
            }
        }, 2000);
    }, []);

    useEffect(() => {
        console.log(listSubbab);
    }, [listSubbab]);

    const [open, setOpen] = useState(0);

    const fetchSubbab = () => {
        http.post("/siswa/kursus/getAllSubbabKuis", {
            kursus_id: kursus_id,
        }).then((res) => {
            setListSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    //tabs

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
    const [isFetched, setIsFetched] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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

    const getSnapToken = () => {
        http.post("/siswa/kursus/daftar", {}).then((res) => {
            setSnapToken(res.data.snapToken);
            console.log(res.data.snapToken);
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
        getSnapToken();
        // setInterval(() => {
        //     fetchDataChat(false);
        // }, 2000);
    }, []);

    useEffect(() => {
        const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        const myMidtransClientKey = "SB-Mid-client-sNFHj-ePZOzmxetY"; //change this according to your client-key

        const script = document.createElement("script");
        script.src = snapSrcUrl;
        script.setAttribute("data-client-key", myMidtransClientKey);
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [snapToken]);

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

    const hide = () => {
        if (isMuncul) {
            window.snap.hide();
            console.log("paowjiefoaewjif");
        }
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
                    {subbab.materi.map((materi, indexMateri) => {
                        if (isRegistered) {
                            return (
                                <Link
                                    to={`/siswa/kursus/${kursus_id}/subbab/${subbab.subbab_id}/materi/${materi.materi_id}`}
                                >
                                    <div className="w-full bg-white flex mb-1">
                                        <span>Materi</span>
                                        <span className="ml-auto">
                                            {subbab.durasi} menit
                                        </span>
                                    </div>
                                </Link>
                            );
                        } else {
                            return (
                                <div className="w-full bg-white flex mb-1">
                                    <span>Materi</span>
                                    <span className="ml-auto">
                                        {subbab.durasi} menit
                                    </span>
                                </div>
                            );
                        }
                    })}
                    {subbab.kuis.map((kuis, indexKuis) => (
                        <div className="w-full bg-white flex mb-1">
                            <Link to={`/siswa/kursus/${kursus_id}/subbab/${subbab.subbab_id}/kuis`}>
                                <span>Kuis</span>
                            </Link>
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
            user.role_text == "guru" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
                    {isOpened && isRegistered && (
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
                    {props.isGuest == null && isRegistered && (
                        <div
                            onClick={changeToggle}
                            className="fixed bottom-0 lg:bottom-10 right-0 lg:right-10 p-2 bg-custom-light-blue text-custom-blue rounded-lg text-4xl cursor-pointer duration-500 hover:text-custom-light-blue hover:bg-custom-blue z-10"
                        >
                            <FontAwesomeIcon
                                icon={faIcon.faMessage}
                            ></FontAwesomeIcon>
                        </div>
                    )}
                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue flex-none"> */}
                    {props.isGuest == null && <SiswaNav></SiswaNav>}
                    {props.isGuest != null && <GuestNav></GuestNav>}

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

                                {!isRegistered && isFetched && (
                                    <button
                                        id="pay-button"
                                        onClick={() => {
                                            setIsMuncul(false);
                                            snapToken != null &&
                                                window.snap.pay(snapToken, {
                                                    onSuccess: function (
                                                        result
                                                    ) {
                                                        /* You may add your own implementation here */
                                                        console.log(result);
                                                    },
                                                    onPending: function (
                                                        result
                                                    ) {
                                                        /* You may add your own implementation here */
                                                        alert(
                                                            "waiting your payment!"
                                                        );
                                                        console.log(result);
                                                    },
                                                    onError: function (result) {
                                                        /* You may add your own implementation here */
                                                        alert(
                                                            "payment failed!"
                                                        );
                                                        console.log(result);
                                                    },
                                                    onClose: function () {
                                                        /* You may add your own implementation here */
                                                        console.log(result);
                                                    },
                                                });
                                        }}
                                        className="btn w-48 mx-auto rounded bg-white text-blue-900 border-0 hover:bg-gray-100 capitalize font-medium text-base"
                                    >
                                        Daftar Sekarang
                                    </button>
                                )}
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
                        {isRegistered && (
                            <div className="tabs w-auto">
                                <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md mb-10 mt-4">
                                    <div
                                        className={
                                            (title == "materi" &&
                                                classSelected) ||
                                            (title != "materi" && classOther)
                                        }
                                        onClick={onClickMateri}
                                    >
                                        Materi
                                    </div>
                                    <div
                                        className={
                                            (title == "pengumuman" &&
                                                classSelected) ||
                                            (title != "pengumuman" &&
                                                classOther)
                                        }
                                        onClick={onClickPengumuman}
                                    >
                                        Pengumuman
                                    </div>
                                </div>
                            </div>
                        )}
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
