import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const GuruAdmin = () => {
    const { http, token, user } = AuthUser();
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    setTimeout(() => {
        if (token == null) {
            console.log(token);
            return history.push("/");
        } else {
            if (user.role_text != null) {
                if (user.role_text == "guru") {
                    return history.push("/guru/kursus/diterbitkan");
                } else if (user.role_text == "siswa") {
                    return history.push("/siswa/kursus");
                }
            }
        }
    }, 1000);
    const fetchDataGuru = () => {
        http.post("/admin/master/guru").then((res) => {
            setGuru(res.data.guru);
            setIsLoading(false);
            // console.log(res);
        });
    };
    useEffect(() => {
        fetchDataGuru();
    }, []);
    const [gurus, setGuru] = useState([]);
    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakGuru = gurus.map((guru, index) => (
        <tr className={classBorder}>
            <td className="text-base">{index + 1}</td>
            <td className="text-base">{guru.guru_id}</td>
            <td className="text-base">{guru.nama}</td>
            <td className="text-base">{guru.email}</td>
            <td
                className={guru.status == 1 ? "text-green-700" : "text-red-700"}
            >
                {guru.status == 1 ? "Aktif" : "Tidak Aktif"}
            </td>
            <td className="text-base">
                <Link to={`/admin/master/guru/detail/${guru.guru_id}`}>
                    <button
                        type="button"
                        className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                    >
                        Detail
                    </button>
                </Link>
            </td>
        </tr>
    ));

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="guru">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg overflow-x-auto">
                                <table className="table table-compact w-full text-black">
                                    <thead>
                                        <tr>
                                            <th className="bg-white text-center text-base">
                                                NO
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                ID
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                NAMA
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                EMAIL
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                STATUS
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>{cetakGuru}</tbody>
                                </table>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default GuruAdmin;
