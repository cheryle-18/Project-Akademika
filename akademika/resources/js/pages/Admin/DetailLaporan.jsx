import React, { useState, useEffect } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Alert, Input, Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DetailLaporan = () => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const { laporan_id } = useParams();
    const [laporan, setLaporan] = useState([]);
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

    const fetchDataLaporan = () => {
        http.post("/admin/master/siswa/detailLaporan", {
            laporan_id: laporan_id,
        }).then((res) => {
            setLaporan(res.data.laporanSiswa)
            setIsLoading(false)
        });
    };

    const banSiswa = (siswa_id) => {
        console.log(siswa_id);
        http.post("/admin/master/bansiswaLaporan", {
            siswa_id: siswa_id,
            laporan_id: laporan_id
        }).then((res) => {
            //refresh
            fetchDataLaporan();
        });
    };

    useEffect(() => {
        fetchDataLaporan();
    }, []);

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="siswa detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={"/admin/master/siswa"} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto h-auto p-10 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                                <div className="text-2xl text-blue-900 font-semibold mb-6">
                                    Detail Laporan
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Nama Siswa</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            value={laporan.siswa}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Dilaporkan Oleh</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            value={laporan.guru}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Deskripsi</div>
                                    <div className="w-full">
                                        <Textarea
                                            type="text"
                                            value={laporan.deskripsi}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Bukti</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            value={laporan.bukti}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Status</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            value={laporan.status}
                                            disabled
                                        />
                                    </div>
                                </div>
                                {
                                    laporan.status=="Pending" &&
                                    <div className="flex justify-start items-center mt-4">
                                        <div className="w-40">Action</div>
                                        <div className="w-full">
                                            <button
                                                type="button"
                                                onClick={() => banSiswa(laporan.siswa_id)}
                                                className="py-2 px-6 bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg h-10"
                                            >
                                                Ban Siswa
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailLaporan;
