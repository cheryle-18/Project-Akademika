import {
    faCloudArrowDown,
    faCloudUploadAlt,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import { Link, useParams, useHistory } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const Materi = () => {
    const [src, setSrc] = useState("");
    const { id, kursus_id, subbab_id } = useParams();
    const { http, user, token } = AuthUser();
    const [bacaan, setBacaan] = useState("");
    const [materi, setMateri] = useState([]);
    const [subbab, setSubbab] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);
    const [kuiss, setKuis] = useState([]);

    const cetakKuis = kuiss.map((kuis, index) => (
        <KuisCard kuis={kuis} idx={index + 1}></KuisCard>
    ));

    const fetchMateri = () => {
        http.post("/siswa/kursus/getMateri", {
            materi_id: id,
        }).then((res) => {
            console.log(res);
            setSrc(
                "https://drive.google.com/file/d/" +
                    res.data.materi.link_video +
                    "/preview"
            );
            setBacaan(res.data.materi.penjelasan);
            setMateri(res.data.materi);
        });
    };

    const fetchSubbab = () => {
        http.post("/siswa/kursus/getSubbab", {
            subbab_id: materi.subbab_id,
        }).then((res) => {
            setSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        //fetch materi based on id
        fetchMateri();
    }, []);

    useEffect(() => {
        fetchSubbab();
    }, [materi]);

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
                <div className="bg-gray-100">
                    <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                        <Nav></Nav>
                        <div className="banner">
                            {subbab != null && (
                                <Banner subbab={subbab}></Banner>
                            )}
                        </div>
                        <div className="px-4 sm:px-16 md:px-24">
                            <div className="mt-10 text-custom-blue font-semibold text-xl">
                                Video Pembelajaran
                            </div>
                            <div className="w-full h-70vh bg-gray-500 rounded-xl mt-4">
                                <iframe
                                    src={src}
                                    width="100%"
                                    height="100%"
                                    allow="autoplay"
                                ></iframe>
                                {/* <video controls width="100%">
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                        </video> */}
                            </div>
                            <div>
                                <div className="float-right">
                                    <button
                                        className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                        name=""
                                    >
                                        <FontAwesomeIcon
                                            icon={faCloudArrowDown}
                                            className="mr-2"
                                        ></FontAwesomeIcon>
                                        Unduh
                                    </button>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="mt-6 text-custom-blue font-semibold text-xl">
                                Bacaan
                            </div>
                            <p className="indent-14 mt-6">{bacaan}</p>

                            <p className="indent-14 mt-6"></p>
                            <div className="mt-10 mb-20">
                                <div className="float-left">
                                    <button
                                        className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                        name=""
                                    >
                                        &lt; &nbsp;&nbsp; Kembali
                                    </button>
                                </div>
                                <div className="float-right">
                                    <Link to={`/siswa/kursus/${kursus_id}/subbab/${subbab_id}/kuis`}>
                                        <button
                                            className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                            name=""
                                        >
                                            Kerjakan Kuis &nbsp;&nbsp; &gt;
                                        </button>
                                    </Link>
                                </div>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Materi;
