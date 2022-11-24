import Nav from "./Nav";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthUser from "../components/AuthUser";
import {useHistory,useParams} from 'react-router-dom';

const ResetPassword = () => {
    const history = useHistory();
    const {http} = AuthTeam();
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const {token} = useParams();

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');

    if(token!=null && email!=null){
        console.log(token + " "+email);
        //check validity
    }

    const handleSubmit = () => {
        let data = {
            email:email,
            password:password,
            password_confirmation:confirm,
            token:token
        }
        http.post("reset-password",data).then((res)=>{
            if(res.data == 1 || res.data){
                history.push('/login');
            }
            else{
                console.log(res.data);
            }
        })
    }

    return (
        <div>
            <Nav />
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
                <button className="btn btn-block btn-sm h-10 bg-blue-900 text-white hover:border-1 hover:border-blue-900 hover:bg-white hover:text-blue-900 mb-3 capitalize text-base mt-2" onClick={handleSubmit}>Reset Password</button>
                <Link to="/login" className="font-semibold underline mt-3">Go to Login</Link>
                </div>
            </div>
        </div>
     );
}

export default ResetPassword;
