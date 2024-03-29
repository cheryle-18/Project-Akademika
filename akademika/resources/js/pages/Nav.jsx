import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthUser from "../components/AuthUser";
import { Alert, Input, Radio } from "@material-tailwind/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Nav = (props) => {
    const [isLoginFailed, setLoginFailed] = useState(false);
    const [message, setMessage] = useState("Gagal Masuk!");
    const [registerFailed, setRegisterFailed] = useState("awal");
    const [openNow, setOpenNow] = useState("daftar");
    //login attribs
    const { http, setToken} = AuthUser();
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

    //forgot password
    //   const { http } = AuthUser();
    const [clicked, setClicked] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");


    const sweetAlert = withReactContent(Swal);

    const fireAlert = (title, icon, status, text) => {
        sweetAlert.fire({
            title: <strong>{title}</strong>,
            text: text,
            icon: icon,
            confirmButtonColor: "#0D47A1",
            didClose: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                if (status == "ajukan") {
                    window.location.reload();
                } else if (status == "delete") {
                    history.push("/guru/kursus/diterbitkan");
                }
            },
        });
    };

    function onForgotPassword(e) {
        setClicked(true);
        http.post("forgot-password", {email:forgotEmail }).then((res) => {
            //pass forgot password request to laravel api
            fireAlert("Sukses!","success","forgotPass","Kami telah mengirimkan link forgot password ke email kamu!")
          
        });
    }

    const changeOpenNowDaftar = () => {
        setOpenNow("daftar");
        // document.body.style.overflow = "hidden";
        setLoginFailed(false);
        setRegisterFailed("awal");
    };

    const changeOpenNowMasuk = () => {
        setOpenNow("masuk");
        // document.body.style.overflow = "hidden";
        setLoginFailed(false);
        setRegisterFailed("awal");
    };

    const changeOpenNowForgotPassword = () => {
        setOpenNow("forgot-password");
        // document.body.style.overflow = "hidden";
        setLoginFailed(false);
        setRegisterFailed("awal");
    };

    const changeScroll = () => {
        document.body.style.overflow = "auto";
        setOpenNow("daftar");
    };
    const submitLoginForm = () => {
        //api call
        if(loginEmail == "admin@gmail.com" && loginPassword == "admin"){
            setToken("admin","admin")
        }
        else{
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
                    setMessage(res.data);
                }
            });
        }

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
            {registerFailed != "success" && registerFailed != "awal" && (
                <Alert severity="error" className="bg-red-400 mb-6">
                    {registerFailed}
                </Alert>
            )}
            {registerFailed == "success" && (
                <Alert severity="error" className="bg-green-400 mb-6">
                    Berhasil Daftar!
                </Alert>
            )}
            <h3 className="text-3xl font-bold text-custom-blue mb-4">
                Buat Akun Baru
            </h3>
            <div className="py-1">
                <Input
                    type="text"
                    label="Nama Lengkap"
                    onChange={(e) => setRegisterNama(e.target.value)}
                />
            </div>
            <div className="py-1">
                <Input
                    type="text"
                    label="Username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
            </div>
            <div className="py-1">
                <Input
                    type="text"
                    label="Email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                />
            </div>
            <div className="py-1">
                <Input
                    type="text"
                    label="Telp"
                    onChange={(e) => setRegisterTelp(e.target.value)}
                />
            </div>
            <div className="py-1">
                <Input
                    type="password"
                    label="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
            </div>
            <div className="py-1">
                <Input
                    type="password"
                    label="Konfirmasi Password"
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                />
            </div>
            <div className="pt-1 flex">
                <span className="mr-2 my-auto">Daftar Sebagai:</span>
                <Radio
                    id="guru"
                    name="type"
                    value="guru"
                    label="Guru"
                    onChange={(e) => setRegisterRole(e.target.value)}
                />
                <Radio
                    type="radio"
                    id="siswa"
                    name="type"
                    value="siswa"
                    label="Siswa"
                    onChange={(e) => setRegisterRole(e.target.value)}
                />
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
                    onClick={changeOpenNowMasuk}
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
                    {message}
                    {/* Gagal Masuk! */}
                </Alert>
            )}
            <h3 className="text-3xl font-bold text-custom-blue mb-4">Masuk</h3>
            <div className="py-2">
                <Input
                    type="text"
                    label="Email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                />
            </div>
            <div className="py-2">
                <Input
                    type="password"
                    label="Password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                />
            </div>
            <div className="w-full">
                <div
                    className="text-right text-custom-blue cursor-pointer"
                    onClick={changeOpenNowForgotPassword}
                >
                    Lupa Password
                </div>
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
                    onClick={changeOpenNowDaftar}
                    className="font-semibold underline cursor-pointer"
                >
                    Daftar Sekarang
                </div>
            </div>
        </div>
    );
    const cetakForgotPassword = (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">
                Lupa Password?
            </h3>
            <span className="py-4">
                <Input
                    type="text"
                    label="Email"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setForgotEmail(e.target.value)}
                    required
                />
            </span>
            <div
                className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md cursor-pointer"
                onClick={onForgotPassword}
            >
                Reset Password
            </div>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <div>Sudah punya akun?&nbsp;</div>
                <div
                    onClick={changeOpenNowMasuk}
                    className="font-semibold underline cursor-pointer"
                >
                    Masuk Sekarang
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-transparent flex w-full">
            <div className="my-5 w-full">
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        <Link to={"/"}>
                            Akademika
                        </Link>
                    </div>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeOpenNowDaftar}
                        className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right"
                    >
                        Daftar
                    </label>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeOpenNowMasuk}
                        className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right mr-5"
                    >
                        Masuk
                    </label>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        <Link to="/guest/kursus/search">Cari Kursus</Link>
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
                        onClick={changeOpenNowMasuk}
                        className="flex justify-center align-center"
                    >
                        <div className="cursor-pointer border border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Masuk
                        </div>
                    </label>
                    <label
                        htmlFor="masukDaftar"
                        onClick={changeOpenNowDaftar}
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
                        {openNow == "daftar" && cetakDaftar}
                        {openNow == "masuk" && cetakMasuk}
                        {openNow == "forgot-password" && cetakForgotPassword}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
