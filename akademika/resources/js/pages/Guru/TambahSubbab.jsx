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
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const TambahSubbab = () => {
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState(
        "Pengembangan Website Front-End Dasar"
    );
    const [judul, setJudul] = useState();
    const [penjelasan, setPenjelasan] = useState();
    const [durasi, setDurasi] = useState();
    const { http, user, token } = AuthUser();
    const { kursus_id, subbab_id } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState("")

    setTimeout(() => {
        if (user == "admin") {
            return history.push("/admin/home");
        } else if (token == null) {
            return history.push("/");
        } else if (user.role_text == "siswa") {
            return history.push("/siswa/kursus");
        }
    }, 1000);

    const sweetAlert = withReactContent(Swal)
    const fireAlert = (title,icon,status,text) => {
        sweetAlert.fire({
            title: <strong>{title}</strong>,
            text:text,
            icon: icon,
            confirmButtonColor:"#0D47A1",
        })
    }

    const submitForm = () => {
        http.post("/guru/kursus/subbab/tambah", {
            kursus_id: kursus_id,
            judul: judul,
            deskripsi: penjelasan,
            durasi: durasi,
        }).then((res) => {
            let data = res.data;
            console.log(data);
            setResponse(data)
            if(data == 1){
                fireAlert("Sukses!","success","tambahSubbab","Berhasil tambah subbab!")
            }
            else{
                fireAlert("Error!","error","tambahSubbab",res.data+"!")
            }
        });
    };

    useEffect(() => {
        if(response=="Berhasil tambah subbab baru"){
            console.log(true)
            let url = `/guru/kursus/${kursus_id}/detail`
            history.push(url)
        }
    }, [response])

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
                    <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                        <GuruNav />
                    </div>
                    <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                        {/* <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div> */}
                        <div className="tabs text-xl text-custom-blue mb-4">
                            <Link
                                to={"/guru/kursus/" + kursus_id + "/detail"}
                                className="rounded-xl py-2"
                            >
                                <div className="float-left">
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-left ml-4 text-custom-blue inline underline">
                                    Kembali ke detail kursus
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
                            Tambah Subbab
                        </div>
                        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                            <table>
                                <tr className="p-2">
                                    <td className="py-4 w-1/6">Judul</td>
                                    <td>
                                        <Input
                                            type="text"
                                            className="w-full"
                                            name="judul"
                                            onChange={(e) =>
                                                setJudul(e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr className="p-2">
                                    <td className="py-4 align-top">
                                        Deskripsi
                                    </td>
                                    <td className="py-2">
                                        <Textarea
                                            className="w-full"
                                            name="desc"
                                            onChange={(e) =>
                                                setPenjelasan(e.target.value)
                                            }
                                        />
                                    </td>
                                </tr>
                                <tr className="p-2">
                                    <td className="py-4">Durasi</td>
                                    <td className="flex w-1/4 py-2">
                                        <Input
                                            type="text"
                                            className=""
                                            name="durasi"
                                            onChange={(e) =>
                                                setDurasi(e.target.value)
                                            }
                                        />
                                        <span className="ml-3 my-auto">
                                            menit
                                        </span>
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
                </div>
            )}
        </div>
    );
};

export default TambahSubbab;
