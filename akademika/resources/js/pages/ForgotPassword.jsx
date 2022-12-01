import Nav from "./Nav";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../components/AuthUser";

const ForgotPassword = () => {
    const [clicked, setClicked] = useState(false);
    const { http } = AuthUser();
    const [email, setEmail] = useState("");
    function handleClick(e) {
        setClicked(true);
        http.post("forgot-password", { email: email }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div className="h-screen w-full bg-blue-200 overflow-auto">
            <Nav />
            <div className="forgotPassword w-full md:w-1/2 float-right p-10 mt-6">
                <div className="title text-blue-900 text-2xl font-bold mb-5 mx-auto text-center">
                    Forgot Your Password?
                </div>
                <p className="py-2">
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </p>
                <button
                    className="btn btn-block btn-sm h-10 bg-blue-900 text-white hover:border-1 hover:border-blue-900 hover:bg-white hover:text-blue-900 mb-3 capitalize text-base mt-2"
                    onClick={handleClick}
                >
                    Reset Password
                </button>
                <Link to="/" className="font-semibold underline mt-3">
                    Return to Login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
