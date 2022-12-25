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
const DetailGuru = () => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const { id } = useParams();
    const [guru, setGuru] = useState([]);
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

    const fetchDataGuru = () => {
        http.post("/admin/master/guru/detail", {
            guru_id: id,
        }).then((res) => {
            setGuru(res.data.guru);
            setRegisterNama(res.data.guru.nama);
            setRegisterUsername(res.data.guru.username);
            setRegisterTelp(res.data.guru.telp);
            setRegisterEmail(res.data.guru.email);
            setRegisterPassword(res.data.guru.password);
            setRegisterTotalWallet(res.data.guru.total_wallet);
            setRegisterStatus(res.data.guru.status);
            setIsLoading(false);
        });
    };
    useEffect(() => {
        fetchDataGuru();
    }, []);

    const submitUpdateForm = () => {
        //api call
        http.post("/admin/master/guru/update", {
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
                    <Sidebar now="guru detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={"/admin/master/guru"} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto h-auto p-10 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                                {updateFailed != "success" &&
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
                                )}
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
                                    <div className="w-40">Total Wallet</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Total Wallet"
                                            value={registerTotalWallet}
                                            onChange={(e) =>
                                                setRegisterTotalWallet(
                                                    e.target.value
                                                )
                                            }
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-32">Status</div>
                                    <div className="w-full text-lg">
                                        <div>
                                            <div>
                                                <Radio
                                                    id="aktif"
                                                    name="status"
                                                    label="Aktif"
                                                    checked={
                                                        registerStatus == 1
                                                    }
                                                    onClick={(e) => {
                                                        setRegisterStatus(1);
                                                    }}
                                                />
                                                <Radio
                                                    id="tidakaktif"
                                                    name="status"
                                                    label="Tidak Aktif"
                                                    checked={
                                                        registerStatus == 0
                                                    }
                                                    onClick={(e) => {
                                                        setRegisterStatus(0);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="button"
                                        onClick={submitUpdateForm}
                                        className="btn btn-block py-3 px-6 bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg capitalize"
                                    >
                                        Simpan Perubahan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailGuru;
