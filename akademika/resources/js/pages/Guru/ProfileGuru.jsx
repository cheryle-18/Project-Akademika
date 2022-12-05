import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { Alert, Input, Radio } from "@material-tailwind/react";
const ProfileGuru = () => {
    let history = useHistory();
    const { user, http } = AuthUser();
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
            guru_id: user.guru_id,
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
            <div
                className="static min-h-screen w-full z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <Navbar></Navbar>
                <div className="px-4 sm:px-16 md:px-20 py-2 md:py-10">
                    <div className="text-3xl mb-2 md:mb-10 text-white font-semibold">
                        Akun Saya
                    </div>
                    <div className="p-10 rounded-lg shadow-lg bg-gray-50">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Username</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Username"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerUsername}
                                        onChange={(e) =>
                                            setRegisterUsername(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Password</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Password"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerPassword}
                                        onChange={(e) =>
                                            setRegisterPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Nama</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Nama"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerNama}
                                        onChange={(e) =>
                                            setRegisterNama(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Email</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Email"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerEmail}
                                        onChange={(e) =>
                                            setRegisterEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Telp</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Telp"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerTelp}
                                        onChange={(e) =>
                                            setRegisterTelp(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            {/* <div className="col-span-12 lg:col-span-6">
                                <div className="mb-2">Total Wallet</div>
                                <div className="bg-white rounded-md shadow-md">
                                    <Input
                                        type="text"
                                        label="Total Wallet"
                                        className="input w-full border-none placeholder-gray-700"
                                        value={registerTotalWallet}
                                        onChange={(e) =>
                                            setRegisterTotalWallet(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div> */}
                        </div>
                        <div className="float-right mt-4">
                            <button
                                type="button"
                                onClick={submitUpdateForm}
                                className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg min-w-20"
                            >
                                Simpan Perubahan
                            </button>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileGuru;
