import Nav from "./Nav";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../components/AuthUser";
import { useHistory, useParams } from "react-router-dom";
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
        http.post("reset-password",data).then((res) => {
            console.log(res);
            if (res.data == 1 || res.data) {
                // history.push("/");
                console.log(res.data);
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
                Reset Password
            </div>
            <div className="w-full flex justify-center text-custom-blue">
                <Link to="/">
                    <div className="font-semibold underline cursor-pointer">
                        Homepage Akademika
                    </div>
                </Link>
            </div>
        </div>
    );

    return (
        <div className="relative w-full h-full flex justify-center items-center" onLoad={onLoad}>
            <div
                className="static min-h-screen w-full z-0 px-4 sm:px-16 md:px-24 flex justify-center items-center"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <div className="w-400px min-h-200px bg-white rounded-lg p-8">
                    {cetakReset}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
