import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Alert, Input, Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const DetailSiswa = () => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const { id } = useParams();
    const [siswa, setSiswa] = useState([]);
    const [updateFailed, setUpdateFailed] = useState("awal");
    const [registerNama, setRegisterNama] = useState();
    const [registerUsername, setRegisterUsername] = useState();
    const [registerTelp, setRegisterTelp] = useState();
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [registerTotalWallet, setRegisterTotalWallet] = useState();
    const [registerStatus, setRegisterStatus] = useState();
    const [isAktif, setAktif] = useState(true);
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

    const fetchDataSiswa = () => {
        http.post("/admin/master/siswa/detail", {
            siswa_id: id,
        }).then((res) => {
            setSiswa(res.data.siswa);
            setRegisterNama(res.data.siswa.nama);
            setRegisterUsername(res.data.siswa.username);
            setRegisterTelp(res.data.siswa.telp);
            setRegisterEmail(res.data.siswa.email);
            setRegisterPassword(res.data.siswa.password);
            setRegisterTotalWallet(res.data.siswa.total_wallet);
            setRegisterStatus(res.data.siswa.status);
            setIsLoading(false);
        });
    };
    useEffect(() => {
        fetchDataSiswa();
    }, []);

    const submitUpdateForm = () => {
        //api call
        http.post("/admin/master/siswa/update", {
            username: registerUsername,
            nama: registerNama,
            password: registerPassword,
            telp: registerTelp,
            total_wallet: registerTotalWallet,
            status: registerStatus,
        }).then((res) => {
            let data = res.data;
            console.log(data);
            setUpdateFailed("success");
        });
    };

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="siswa detail">
                        <div className="text-base p-14 pb-2">
                            {/* {updateFailed != "success" &&
                                updateFailed != "awal" && (
                                    <Alert
                                        severity="error"
                                        className="bg-red-400 mb-6"
                                    >
                                        Gagal Update!
                                    </Alert>
                                )}
                            {updateFailed == "success" && (
                                <Alert
                                    severity="error"
                                    className="bg-green-400 mb-6"
                                >
                                    Berhasil Update!
                                </Alert>
                            )} */}
                            <div className="back mb-4">
                                <Link to={"/admin/master/siswa"} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto h-auto p-10 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                                <div className="text-2xl text-blue-900 font-semibold mb-6">
                                    Detail Siswa
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Username</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Username"
                                            value={registerUsername}
                                            onChange={(e) =>
                                                setRegisterUsername(
                                                    e.target.value
                                                )
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Nama</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Nama"
                                            value={registerNama}
                                            onChange={(e) =>
                                                setRegisterNama(e.target.value)
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Telp</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Telp"
                                            value={registerTelp}
                                            onChange={(e) =>
                                                setRegisterTelp(e.target.value)
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Status</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Status"
                                            value={siswa.status == 1 ? "Aktif" : "Banned"}
                                            disabled
                                        />
                                    </div>
                                </div>
                                {/* <div className="mt-10">
                                    <button
                                        type="button"
                                        onClick={submitUpdateForm}
                                        className="btn btn-block capitalize y-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg min-w-20"
                                    >
                                        Simpan Perubahan
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailSiswa;
