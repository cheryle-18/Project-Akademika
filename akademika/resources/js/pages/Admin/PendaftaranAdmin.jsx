import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toRupiah } from "../../components/CurrencyUtils";

const PendaftaranAdmin = () => {
    const { http, token, user } = AuthUser();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [pendaftaran, setPendaftaran] = useState([]);
    const classBorder = "text-center border border-b-gray-600 border-x-0";

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

    const fetchDataPendaftaran = () => {
        http.post("/admin/master/pendaftaran").then((res) => {
            setPendaftaran(res.data.pendaftaran);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchDataPendaftaran();
    }, []);



    const cetakPendaftaran = pendaftaran.map((p, index) => (
        <tr className={classBorder}>
            <td className="whitespace-pre-wrap text-base">{index + 1}</td>
            <td className="whitespace-pre-wrap text-base">{p.kursus}</td>
            <td className="whitespace-pre-wrap text-base">{p.siswa}</td>
            <td className="whitespace-pre-wrap text-base">Rp {toRupiah(p.total)}</td>
            <td className="whitespace-pre-wrap text-base">{p.tanggal}</td>
            {
                p.statusInt==1 ?
                <td className="whitespace-pre-wrap text-base text-green-700">{p.status}</td> :
                <td className="whitespace-pre-wrap text-base text-red-700">{p.status}</td>
            }
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
                    <Sidebar now="pendaftaran">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto p-6 mb-6 rounded-md drop-shadow-lg">
                                <table className="table table-compact w-full text-black overflow-y-auto table-auto">
                                    <thead>
                                        <tr>
                                            <th className="bg-white text-center text-base">
                                                NO
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                SISWA
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                KURSUS
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                TOTAL
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                TANGGAL
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                STATUS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cetakPendaftaran}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default PendaftaranAdmin;
