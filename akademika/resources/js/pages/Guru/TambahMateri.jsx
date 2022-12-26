import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./style.css";

const TambahMateri = () => {
    const [title, setTitle] = useState("proses");
    const [sudut, setSudut] = useState(0);
    const [course, setCourse] = useState(
        "Pengembangan Website Front-End Dasar"
    );
    const [penjelasan, setPenjelasan] = useState();
    const [video, setVideo] = useState();
    const { http, user, token } = AuthUser();
    const { kursus_id, subbab_id } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);

    setTimeout(() => {
        if (user == "admin") {
            return history.push("/admin/home");
        } else if (token == null) {
            return history.push("/");
        } else if (user.role_text == "siswa") {
            return history.push("/siswa/kursus");
        }
    }, 1000);

    const sweetAlert = withReactContent(Swal);

    const fireAlert = (title, icon, status, text) => {
        sweetAlert.fire({
            title: <strong>{title}</strong>,
            text: text,
            icon: icon,
            confirmButtonColor: "#0D47A1",
        });
    };

    const onChangeVideoHandler = (e) => {
        setVideo(e.target.files[0]);
    };

    const submitForm = () => {
        const formData = new FormData();
        formData.append("video", video);
        formData.append("subbab_id", subbab_id);
        formData.append("penjelasan", penjelasan);
        setIsLoadingUpload(true);
        // setIsLoadingUpload(true);
        http.post("/guru/kursus/materi/tambah", formData).then((res) => {
            let data = res.data;
            setIsLoadingUpload(false);
            fireAlert(
                "Sukses!",
                "success",
                "tambahMateri",
                "Berhasil tambah materi!"
            );
        });
    };

    setInterval(() => {
        // alert(document.getElementById("loading_upload").style.width);
        setSudut(sudut + 1);
        // document.getElementById("loading_upload").style.transform = `rotate(${sudut++}deg)`;
        // alert("123");
    }, 100);

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
                        {/* <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div> */}
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
                        <div className="text-3xl text-blue-900 font-semibold mb-4">
                            {course}
                        </div>
                        <div className="text-2xl text-blue-900 font-semibold mb-6">
                            Tambah Materi
                        </div>
                        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                            <table>
                                <tr className="p-2">
                                    <td className="py-4 align-top">Bacaan</td>
                                    <td className="py-2">
                                        <Textarea
                                            className="w-full h-48"
                                            name="bacaan"
                                            onChange={(e) =>
                                                setPenjelasan(e.target.value)
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
                                name="btnTambah"
                                onClick={submitForm}
                            >
                                Tambah
                            </button>
                        </div>
                    </div>

                    {isLoadingUpload && (
                        <div className="fixed h-screen w-screen flex justify-center items-center">
                            <img
                                src="/loading_upload.png"
                                className="w-200px"
                                alt=""
                                id="loading_upload"
                            />
                            ;
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TambahMateri;
