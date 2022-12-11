import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar";
// import Tabs from "./Tabs";
import { Link, useParams, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

import AuthUser from "../../components/AuthUser";

const EditMateri = () => {
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState([]);
    const [bacaan, setBacaan] = useState("");
    const [video, setVideo] = useState("");
    const { http, user, token } = AuthUser();
    const { kursus_id, subbab_id, materi_id } = useParams();
    const [materi, setMateri] = useState([]);
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
    const onChangeVideoHandler = (e) => {
        setVideo(e.target.files[0]);
    };

    const submitForm = () => {
        //edit
        const formData = new FormData();
        formData.append("video", video);
        formData.append("subbab_id", subbab_id);
        formData.append("materi_id", materi_id);
        formData.append("penjelasan", bacaan);

        http.post("/guru/kursus/materi/edit", formData).then((res) => {
            let data = res.data;
            console.log(res);
        });
    };

    const fetchKursus = () => {
        http.post("/guru/kursus/get", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };

    //fetch materi
    const fetchMateri = () => {
        http.post("/guru/kursus/materi/get", {
            materi_id: materi_id,
        }).then((res) => {
            console.log(res.data.materi);
            setMateri(res.data.materi);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchMateri();
    }, []);

    // useEffect(() => {

    // },[materi])

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
                <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                    <GuruNav />
                    {/* </div> */}
                    <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                        {/* <div className="tabs w-auto"> */}
                        {/* <Tabs titleParam={title}></Tabs> */}

                        {/* </div> */}
                        <div className="tabs text-xl text-custom-blue">
                            <Link
                                to={
                                    "/guru/kursus/" +
                                    kursus_id +
                                    "/subbab/" +
                                    subbab_id +
                                    "/detail"
                                }
                                className="rounded-xl py-2"
                            >
                                <div className="float-left">
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-left ml-4 text-custom-blue inline underline">
                                    Kembali ke detail subbab
                                </div>
                                <div className="clear-both"></div>
                            </Link>
                        </div>
                    </div>
                    <div className="content flex flex-col flex-wrap w-full px-24 pb-16">
                        <div className="text-3xl text-blue-900 font-semibold mb-6">
                            {course.nama}
                        </div>
                        <div className="text-2xl text-blue-900 font-semibold mb-2">
                            Detail Materi
                        </div>

                        <div className="mt-5 text-custom-blue font-semibold text-xl">
                            Preview Video
                        </div>
                        <div className="w-full h-70vh bg-gray-500 rounded-xl mt-2">
                            <iframe
                                src={
                                    materi.link_video != null
                                        ? "https://drive.google.com/file/d/" +
                                          materi.link_video +
                                          "/preview"
                                        : ""
                                }
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
                                        icon={faCloudUploadAlt}
                                        className="mr-2"
                                    ></FontAwesomeIcon>
                                    Unduh
                                </button>
                            </div>
                            <div className="clear-both"></div>
                        </div>

                        <div className="mt-6 text-custom-blue font-semibold text-xl">
                            Preview Bacaan
                        </div>
                        <p className="indent-14 mt-6">{materi.penjelasan}</p>

                        <p className="indent-14 mt-6"></p>

                        <div className="text-2xl text-blue-900 font-semibold mb-6 mt-7">
                            Edit Materi
                        </div>
                        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                            <table>
                                <tr className="p-2">
                                    <td className="py-4 align-top">Bacaan</td>
                                    <td className="py-2">
                                        <Textarea
                                            className="w-full h-48"
                                            name="bacaan"
                                            defaultValue={materi.penjelasan}
                                            onChange={(e) =>
                                                setBacaan(e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr className="p-2">
                                    <td className="py-4 align-top">Video</td>
                                    <td className="flex flex-col py-2">
                                        <label class="block">
                                            <span class="sr-only">
                                                Choose File
                                            </span>
                                            <input
                                                type="file"
                                                name="video"
                                                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-normal file:bg-blue-900 file:text-white hover:file:bg-blue-700"
                                                onChange={onChangeVideoHandler}
                                            />
                                        </label>
                                        <div className="text-gray-500 text-sm mt-1">
                                            *upload video penjelasan materi
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <button
                                className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal"
                                name="btnEdit"
                                onClick={submitForm}
                            >
                                Edit Materi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditMateri;
