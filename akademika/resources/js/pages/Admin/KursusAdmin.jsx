import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const KursusAdmin = () => {
    const { http, token, user } = AuthUser();
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("master");

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

    const onClickMaster = () => {
        setTitle("master");
    };

    const onClickPengajuan = () => {
        setTitle("pengajuan");
    };

    const fetchDatakursus = () => {
        http.post("/admin/master/kursus").then((res) => {
            setMaster(res.data.kursusaktif);
            setPengajuan(res.data.kursuspending);
            console.log(res);
            setIsLoading(false);
        });
    };

    const onClickSetuju = (id) => {
        http.post("/admin/master/kursus/setujui", {
            kursus_id: id,
        }).then((res) => {
            setTimeout(() => {
                fetchDatakursus();
            }, 10);
            console.log(res);
        });
    };

    const onClickBatal = (id) => {
        http.post("/admin/master/kursus/batal", {
            kursus_id: id,
        }).then((res) => {
            setTimeout(() => {
                fetchDatakursus();
            }, 10);
            console.log(res);
        });
    };

    useEffect(() => {
        fetchDatakursus();
    }, []);

    const [masters, setMaster] = useState([]);

    const [pengajuans, setPengajuan] = useState([]);

    const classBorder = "text-center border border-b-gray-600 border-x-0";

    const cetakMaster = masters.map((master, index) => (
        <tr className={classBorder}>
            <td className="text-base">{index + 1}</td>
            <td className="text-base">{master.kursus_id}</td>
            <td className="text-base">{master.nama}</td>
            <td className="text-base">{master.kategori}</td>
            <td className="text-base">{master.guru.nama}</td>
            <td className="text-green-700 text-base">
                {master.status == 1 ? "Live" : "Pending"}
            </td>
            <td className="text-base">
                <Link to={`/admin/master/kursus/detail/${master.kursus_id}`}>
                    <button
                        type="button"
                        className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                    >
                        Detail
                    </button>
                </Link>
            </td>
            <td className="text-base">
                -
                {/* <button
                    onClick={(e) => {
                        onClickBatal(master.kursus_id);
                    }}
                    type="button"
                    className="py-2 px-4  bg-red-800 hover:bg-red-500 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                >
                    Batal
                </button> */}
            </td>
        </tr>
    ));

    const cetakPengajuan = pengajuans.map((pengajuan, index) => (
        <tr className={classBorder}>
            <td className="text-base">{index + 1}</td>
            <td className="text-base">{pengajuan.kursus_id}</td>
            <td className="text-base">{pengajuan.nama}</td>
            <td className="text-base">{pengajuan.kategori}</td>
            <td className="text-base">{pengajuan.guru.nama}</td>
            <td className="text-red-700 text-base">
                {pengajuan.status == 1 ? "Live" : "Pending"}
            </td>
            <td>
                <Link to={`/admin/master/kursus/detail/${pengajuan.kursus_id}`}>
                    <button
                        type="button"
                        className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white w-20 transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg"
                    >
                        Detail
                    </button>
                </Link>
            </td>
            <td className="text-base">
                <button
                    onClick={(e) => {
                        onClickSetuju(pengajuan.kursus_id);
                    }}
                    type="button"
                    className="py-2 px-4  bg-green-800 hover:bg-green-500 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-20"
                >
                    Setujui
                </button>
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
                    <Sidebar now="kursus">
                        <div className="text-2xl p-10 pt-6 pb-2">
                            <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                                <div
                                    className={
                                        (title == "master" && classSelected) ||
                                        (title != "master" && classOther)
                                    }
                                    onClick={onClickMaster}
                                >
                                    Master
                                </div>
                                <div
                                    className={
                                        (title == "pengajuan" &&
                                            classSelected) ||
                                        (title != "pengajuan" && classOther)
                                    }
                                    onClick={onClickPengajuan}
                                >
                                    Pengajuan
                                </div>
                                <div className="clear-both"></div>
                            </div>
                            <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                                <table className="table table-compact w-full text-black overflow-y-auto whitespace-nowrap">
                                    <thead>
                                        <tr>
                                            <th className="bg-white text-center text-base">
                                                NO
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                ID
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                NAMA KURSUS
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                KATEGORI
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                GURU
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                STATUS
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                DETAIL
                                            </th>
                                            <th className="bg-white text-center text-base">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {title == "master" && cetakMaster}
                                        {title == "pengajuan" && cetakPengajuan}
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

export default KursusAdmin;
