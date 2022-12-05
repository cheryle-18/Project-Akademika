import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Alert, Input, Radio } from "@material-tailwind/react";
const DetailGuru = () => {
    let history = useHistory();
    const { http } = AuthUser();
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

    const fetchDataGuru = () => {
        http.post("/admin/master/guru/detail", {
            guru_id: 1,
        }).then((res) => {
            setGuru(res.data.guru);
            setRegisterNama(res.data.guru.nama);
            setRegisterUsername(res.data.guru.username);
            setRegisterTelp(res.data.guru.telp);
            setRegisterEmail(res.data.guru.email);
            setRegisterPassword(res.data.guru.password);
            setRegisterTotalWallet(res.data.guru.total_wallet);
            setRegisterStatus(res.data.guru.status);
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
            // if (data.access_token != null && data.user != null) {
            //     //login success
            //     setToken(res.data.user, res.data.access_token);
            //     document.body.style.overflow = "auto";
            // } else {
            //     setLoginFailed(true);
            // }
        });
    };

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="guru detail">
                <div className="text-2xl p-14 pb-2">
                {updateFailed != "success"  && updateFailed != "awal" && (
                <Alert severity="error" className="bg-red-400 mb-6">
                    Gagal Update!
                </Alert>
            )}
            {updateFailed == "success" && (
                <Alert severity="error" className="bg-green-400 mb-6">
                    Berhasil Update!
                </Alert>
            )}
                    <div className="bg-white overflow-y-auto h-77vh p-4 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Username</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Username"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={registerUsername}
                                    onChange={(e) =>
                                        setRegisterUsername(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Password</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Password"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={registerPassword}
                                    onChange={(e) =>
                                        setRegisterPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Nama</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Nama"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={registerNama}
                                    onChange={(e) =>
                                        setRegisterNama(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Telp</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Telp"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={registerTelp}
                                    onChange={(e) =>
                                        setRegisterTelp(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Total Wallet</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Total Wallet"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={registerTotalWallet}
                                    onChange={(e) =>
                                        setRegisterTotalWallet(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Status</div>
                            <div className="w-full text-lg">
                                <div>
                                {registerStatus == 1 ?
                                 <div>
                                    <Radio
                                    id="aktif"
                                    name="status"
                                    label="Aktif"
                                    checked
                                    onClick={(e) => {
                                        setRegisterStatus(1);
                                    }}
                                 />
                                <Radio
                                    id="tidakaktif"
                                    name="status"
                                    label="Tidak Aktif"
                                    onClick={(e) => {
                                        setRegisterStatus(0);
                                    }}
                                />
                                 </div>
                                :
                              <div>
                                  <Radio
                                    id="aktif"
                                    name="status"
                                    label="Aktif"
                                    onClick={(e) => {
                                        setRegisterStatus(1);
                                    }}
                                 />
                                <Radio
                                    id="tidakaktif"
                                    name="status"
                                    label="Tidak Aktif"
                                    checked
                                    onClick={(e) => {
                                        setRegisterStatus(0);
                                    }}
                                />
                              </div>
                               }


                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="float-right">
                                <button
                                    type="button"
                                    onClick={submitUpdateForm}
                                    className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg min-w-20"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default DetailGuru;
