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

    const [registerNama, setRegisterNama] = useState();
    const [registerUsername, setRegisterUsername] = useState();
    const [registerTelp, setRegisterTelp] = useState();
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [registerTotalWallet, setRegisterTotalWallet] = useState();
    const [registerStatus, setRegisterStatus] = useState();

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

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="guru detail">
                <div className="text-2xl p-14 pb-2">
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
                                        setRegisterNama(e.target.value)
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
                                        registerNama(e.target.value)
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
                                        registerNama(e.target.value)
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
                                        registerNama(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Status</div>
                            <div className="w-full">
                                <Radio
                                    id="guru"
                                    name="type"
                                    value="guru"
                                    label="Guru"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default DetailGuru;
