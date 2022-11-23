import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import { Alert } from "@material-tailwind/react";

const Nav = () => {
    const [isLoginFailed, setLoginFailed] = useState(false);
    const [registerFailed, setRegisterFailed] = useState("awal");
    const [isDaftar, setDaftar] = useState(true);
    //login attribs
    const { http, setToken } = AuthUser();
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();

    //register attribs
    const [registerNama, setRegisterNama] = useState();
    const [registerUsername, setRegisterUsername] = useState();
    const [registerTelp, setRegisterTelp] = useState();
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState();
    const [registerRole, setRegisterRole] = useState();

    const changeDaftarTrue = () => {
        setDaftar(true);
        document.body.style.overflow = "hidden";
        setLoginFailed(false);
        setRegisterFailed("awal");
    };

    const changeDaftarFalse = () => {
        setDaftar(false);
        document.body.style.overflow = "hidden";
        setLoginFailed(false);
        setRegisterFailed("awal");
    };

    const changeScroll = () => {
        document.body.style.overflow = "auto";
    };
    const submitLoginForm = () => {
        //api call
        http.post("/login", {
            email: loginEmail,
            password: loginPassword,
        }).then((res) => {
            let data = res.data;

            if (data.access_token != null && data.user != null) {
                //login success
                setToken(res.data.user, res.data.access_token);
                document.body.style.overflow = "auto";
                console.log(data.user);
            } else {
                setLoginFailed(true);
            }
        });
    };

    const submitRegisterForm = () => {
        //api call
        http.post("/register", {
            nama: registerNama,
            username: registerUsername,
            telp: registerTelp,
            email: registerEmail,
            password: registerPassword,
            confirm_password: registerConfirmPassword,
            role: registerRole,
        }).then((res) => {
            let data = res.data;
            setRegisterFailed(data);
            console.log(data);
        });
    };

    const cetakDaftar = (
        <div>
            {(registerFailed!="success" && registerFailed!="awal") && (
                <Alert severity="error" className="bg-red-400 mb-6">
                    {registerFailed}
                </Alert>
            )}
            {registerFailed=="success" && (
                <Alert severity="error" className="bg-green-400 mb-6">
                    Berhasil Daftar!
                </Alert>
            )}
            <h3 className="text-3xl font-bold text-custom-blue">
                Daftar Akademika
            </h3>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterNama(e.target.value)}
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Telp"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterTelp(e.target.value)}
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Konfirmasi Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                />
            </p>
            <div className="pt-2">
                Daftar Sebagai:&nbsp;&nbsp;&nbsp;
                <input
                    type="radio"
                    id="guru"
                    name="fav_language"
                    value="guru"
                    onChange={(e) => setRegisterRole(e.target.value)}
                />
                <label htmlFor="guru">&nbsp;Guru</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="radio"
                    id="siswa"
                    name="fav_language"
                    value="siswa"
                    onChange={(e) => setRegisterRole(e.target.value)}
                />
                <label htmlFor="siswa">&nbsp;Siswa</label>
            </div>
            <div
                className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md cursor-pointer"
                onClick={submitRegisterForm}
            >
                Buat Akun
            </div>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <div>Sudah punya akun?&nbsp;</div>
                <div
                    onClick={changeDaftarFalse}
                    className="font-semibold underline cursor-pointer"
                >
                    Masuk Sekarang
                </div>
            </div>
        </div>
    );
    const cetakMasuk = (
        <div>
            {isLoginFailed && (
                <Alert severity="error" className="bg-red-400 mb-6">
                    Gagal Masuk!
                </Alert>
            )}
            <h3 className="text-3xl font-bold text-custom-blue">Masuk</h3>
            <p className="py-4">
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                />
            </p>
            <div className="w-full">
                <div className="text-right text-custom-blue">Lupa Password</div>
            </div>
            <div
                className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md cursor-pointer"
                onClick={submitLoginForm}
            >
                Masuk
            </div>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <div>Belum punya akun?&nbsp;</div>
                <div
                    onClick={changeDaftarTrue}
                    className="font-semibold underline cursor-pointer"
                >
                    Daftar Sekarang
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-transparent flex w-full">
            <div className="my-5 w-full">
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        Akademika
                    </div>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeDaftarTrue}
                        className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right"
                    >
                        Daftar
                    </label>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeDaftarFalse}
                        className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right mr-5"
                    >
                        Masuk
                    </label>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/kursus/search">Cari Kursus</Link>
                    </div>
                </div>
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white text-center">
                        Akademika
                    </div>
                    <div className="flex justify-center align-center">
                        <div className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Cari Kursus
                        </div>
                    </div>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeDaftarFalse}
                        className="flex justify-center align-center"
                    >
                        <div className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Masuk
                        </div>
                    </label>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeDaftarTrue}
                        className="flex justify-center align-center"
                    >
                        <div className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Daftar
                        </div>
                    </label>
                </div>
            </div>

            <div className="z-10">
                <input
                    type="checkbox"
                    id="masukDaftar"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative py-10 px-8">
                        <label
                            htmlFor="masukDaftar"
                            className="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                            onClick={changeScroll}
                        >
                            ✕
                        </label>
                        {isDaftar && cetakDaftar}
                        {!isDaftar && cetakMasuk}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
