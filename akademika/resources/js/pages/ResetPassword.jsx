import Nav from "./Nav";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../components/AuthUser";
import { useHistory, useParams } from "react-router-dom";
import Logo from "../../images/logo_akademika.png";
import Logo2 from "../../images/logo_akademika2.png";
import Logo3 from "../../images/logo_akademika3.png";
import { Alert, Input, Radio } from "@material-tailwind/react";

const ResetPassword = () => {
    const history = useHistory();
    const { http } = AuthUser();
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const { token } = useParams();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");

    if (token != null && email != null) {
        console.log(token + " " + email);
        //check validity
    }

    const handleSubmit = () => {
        let data = {
            email: email,
            password: password,
            password_confirmation: confirm,
            token: token,
        };
        http.post("reset-password", data).then((res) => {
            if (res.data == 1 || res.data) {
                history.push("/login");
            } else {
                console.log(res.data);
            }
        });
    };

    const onLoad = () => {
        document.getElementById("reset").click();
    };

    const cetakReset = (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">
                Reset Password
            </h3>
            <p className="py-2">
                <Input
                    type="text"
                    label="Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </p>
            <p className="py-2">
                <Input
                    type="text"
                    label="Confirm Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                />
            </p>
            <div
                className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md cursor-pointer"
                onClick={handleSubmit}
            >
                Masuk
            </div>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <Link to="/">
                    <div className="font-semibold underline cursor-pointer">
                        Homepage Akademika
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="relative" onLoad={onLoad}>
            {/* <Nav />
            <div className="ilustrasi w-1/2"></div>
            <div className="forgotPassword w-1/2 float-right p-10 mt-6">
                <div className="title text-blue-900 text-2xl font-bold mb-5 mx-auto text-center">
                    Reset Password
                </div>
                <div className="card w-3/5 h-1/3 p-8 bg-slate-100 mx-auto text-black flex 2xl:text-xl">
                    <p className="py-2">
                        <input
                            type="text"
                            placeholder="Password"
                            className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </p>
                    <p className="py-2">
                        <input
                            type="text"
                            placeholder="Confirm Password"
                            className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    </p>
                    <button
                        className="btn btn-block btn-sm h-10 bg-blue-900 text-white hover:border-1 hover:border-blue-900 hover:bg-white hover:text-blue-900 mb-3 capitalize text-base mt-2"
                        onClick={handleSubmit}
                    >
                        Reset Password
                    </button>
                    <Link to="/login" className="font-semibold underline mt-3">
                        Go to Login
                    </Link>
                </div>
            </div> */}

            <div
                className="static min-h-screen w-full z-0 px-4 sm:px-16 md:px-24"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                {/* hidden */}
                <div className="hidden">
                    <div className="fixed left-0 top-0 z-50 font-extrabold bg-white">
                        {/* {cetakLink} */}
                    </div>
                    <Nav></Nav>

                    <div className="grid grid-cols-12 mt-0 md:mt-10 lg:mt-20">
                        <div className="col-span-12 text-5xl text-center lg:text-start lg:text-7xl xl:text-8xl lg:col-span-7">
                            <div className="relative">
                                <div
                                    className="text-white font-semibold"
                                    style={{
                                        letterSpacing: "-1px",
                                        fontFamily: "initial",
                                    }}
                                >
                                    Belajar tanpa batas
                                </div>
                                <button
                                    type="button"
                                    className="my-10 lg:my-0 py-2 px-4  bg-white hover:bg-blue-900 hover:text-white text-custom-blue transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full sm:w-96 lg:w-52"
                                >
                                    Daftar Sekarang
                                </button>
                            </div>
                        </div>
                        <div className="col-span-12 px-10 lg:px-0 lg:col-span-5 flex items-center justify-center">
                            <img
                                className="object-cover"
                                style={{ width: "500px" }}
                                src={Logo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                {/* hidden */}
            </div>

            <div className="hidden">
                <label
                    id="reset"
                    htmlFor="masukReset"
                    className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right"
                >
                    Daftar
                </label>
            </div>

            <div className="z-10">
                <input
                    type="checkbox"
                    id="masukReset"
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box relative py-10 px-8">
                        <Link to="/">
                            <div className="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl cursor-pointer">
                                ✕
                            </div>
                        </Link>
                        {cetakReset}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
