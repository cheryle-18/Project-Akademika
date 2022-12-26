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
    const [linkVideo,setLinkVideo] = useState("");
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
    const [kuis, setKuis] = useState([]);

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
            setLinkVideo(res.data.materi.link_video)
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
    const submitDownload = () => {
        http.post("/siswa/kursus/download", {
            materi_id: id,
        }).then((res) => {
            //Create download link
            // const blobURL = URL.createObjectURL(new Blob(res.data));
            // const link = document.createElement('a');
            // link.href = blobURL;
            // link.download = `${UUID}.mp4`;
            // link.click();
        });
    }

    function download() {
        //https://drive.google.com/uc?export=download&id=12LL_K_AifGQ3tcQooXIWV753IoFs7Ut-

        let url = "https://drive.google.com/uc?export=download&id="+linkVideo;
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }

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
                                    id="myiframe"
                                    src={src}
                                    width="100%"
                                    height="100%"
                                    allow="autoplay"
                                ></iframe>
                            </div>
                            <div>
                                <div className="float-right">
                                {/* <Link to={`/siswa/kursus/download`}> */}
                                    <button
                                        className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                        name=""
                                        onClick={download}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCloudArrowDown}
                                            className="mr-2"
                                        ></FontAwesomeIcon>

                                        Unduh
                                    </button>
                                {/* </Link> */}
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
                                    <Link to={`/siswa/kursus/${kursus_id}/detail`}>
                                        <button
                                            className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                            name=""
                                        >
                                            &lt; &nbsp;&nbsp; Kembali
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
