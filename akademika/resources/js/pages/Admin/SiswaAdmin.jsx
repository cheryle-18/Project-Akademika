import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SiswaAdmin = () => {
    const { http, token, user } = AuthUser();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

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
    const fetchDataSiswa = () => {
        http.post("/admin/master/siswa").then((res) => {
            setSiswa(res.data.siswa);
            setIsLoading(false);
            // console.log(res);
        });
    };
    const banSiswa = (siswa_id) => {
        console.log(siswa_id);
        http.post("/admin/master/bansiswa", {
            siswa_id: siswa_id,
        }).then((res) => {
            //refresh
            console.log(res);
            fetchDataSiswa(true);
        });
    };

    useEffect(() => {
        fetchDataSiswa();
    }, []);

    const [siswa, setSiswa] = useState([]);

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakSiswa = siswa.map((siswa, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.siswa_id}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.nama}</td>
            <td className="whitespace-pre-wrap text-base">{siswa.email}</td>
            <td>
                <button
                    type="button"
                    onClick={() => banSiswa(siswa.siswa_id)}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-600 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                >
                    {siswa.status == 1 ? "Aktif" : "Banned"}
                </button>
            </td>
            <td>
                <Link to={`/admin/master/siswa/detail/${siswa.siswa_id}`}>
                    <button
                        type="button"
                        className="py-2 px-6 bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
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
                    <Sidebar now="siswa">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                                <table className="table table-compact w-full text-black overflow-y-auto table-auto">
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
                                    <tbody>{cetakSiswa}</tbody>
                                </table>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default SiswaAdmin;
