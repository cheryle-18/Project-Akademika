import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";

const DetailMateriAdmin = (props) => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const { kursus_id, subbab_id, materi_id } = useParams();
    const [bacaan, setBacaan] = useState("");
    const [src, setSrc] = useState("");
    const [materi, setMateri] = useState([]);
    const [subbab, setSubbab] = useState();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (token == null) {
            console.log(token);
            return history.push("/");
        } else {
            if (user.role_text != null) {
                if (user.role_text == "guru") {
                    return history.push("/guru/kursus/diterbitkan");
                } else if (user.role_text == "siswa") {
                    return history.push("/siswa/kursus");
                }
            }
        }
    }, 1000);

    const fetchMateri = () => {
        http.post("/admin/master/kursus/getMateri", {
            materi_id: materi_id,
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
        http.post("/admin/master/kursus/getSubbab", {
            subbab_id: subbab_id,
        }).then((res) => {
            setSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchSubbab();
        fetchMateri();
    }, []);

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="kursus detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={`/admin/master/kursus/${kursus_id}/${subbab_id}`} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto px-10 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black pb-20">
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
                                </div>
                                <div className="mt-6 text-custom-blue font-semibold text-xl">
                                    Bacaan
                                </div>
                                <p className="indent-14 mt-6">{bacaan}</p>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailMateriAdmin;
