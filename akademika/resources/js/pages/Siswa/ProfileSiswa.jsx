import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { toRupiah } from "../../components/CurrencyUtils";
import { Alert, Input, Radio } from "@material-tailwind/react";

const ProfileSiswa = () => {
    let history = useHistory();
    const { user, http, token } = AuthUser();
    const [siswa, setSiswa] = useState([]);
    const [updateFailed, setUpdateFailed] = useState("awal");
    const [nama, setNama] = useState();
    const [username, setUsername] = useState();
    const [telp, setTelp] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [totalPoin, setTotalPoin] = useState(0);
    const [status, setStatus] = useState();
    const [isAktif, setAktif] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const fetchDataSiswa = () => {
        http.post("/admin/master/siswa/detail", {
            siswa_id: user.siswa_id,
        }).then((res) => {
            setSiswa(res.data.siswa);
            setNama(res.data.siswa.nama);
            setUsername(res.data.siswa.username);
            setTelp(res.data.siswa.telp);
            setEmail(res.data.siswa.email);
            setPassword(res.data.siswa.password);
            setTotalPoin(res.data.siswa.poin);
            setStatus(res.data.siswa.status);
            setIsLoading(false);
        });
    };
    useEffect(() => {
        fetchDataSiswa();
    }, []);

    const submitUpdateForm = () => {
        //api call
        http.post("/admin/master/siswa/update", {
            username: username,
            nama: nama,
            password: password,
            telp: telp,
            poin: totalPoin,
            status: status,
        }).then((res) => {
            let data = res.data;
            console.log(data);
            setUpdateFailed("success");
        });
    };

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
                            <div className="text-3xl mb-2 md:mb-10 text-white font-semibold">
                                Edit Profile
                            </div>
                            <div className="p-10 rounded-lg shadow-lg bg-gray-50">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-2">Username</div>
                                        <div className="bg-white rounded-md shadow-md">
                                            <Input
                                                type="text"
                                                label="Username"
                                                value={username}
                                                onChange={(e) =>
                                                    setUsername(e.target.value)
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
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
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
                                                value={nama}
                                                onChange={(e) =>
                                                    setNama(e.target.value)
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
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
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
                                                value={telp}
                                                onChange={(e) =>
                                                    setTelp(e.target.value)
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
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

                            {/* <div className="text-3xl mt-6 md:mb-6 text-white font-semibold">
                                Informasi Poin
                            </div>
                            <div className="p-10 mt-4 rounded-lg shadow-lg bg-gray-50">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-2 text-xl">
                                            Total Poin Anda
                                        </div>
                                        <div className="mb-2 text-3xl">
                                            {totalPoin}
                                        </div>
                                    </div>
                                </div>

                                <div className="clear-both"></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileSiswa;
