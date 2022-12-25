import React, { useState, useEffect } from "react";
import { Button, Textarea } from "@material-tailwind/react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { toRupiah } from "../../components/CurrencyUtils";
import {
    Alert,
    Input,
    Radio,
    Select,
    MenuItem,
    Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import Autocomplete from "@mui/material/Autocomplete";

const DetailKursus = (props) => {
    let history = useHistory();
    const { http, token, user } = AuthUser();
    const [guru, setGuru] = useState([]);
    const [listGuru, setListGuru] = useState([]);
    const [updateFailed, setUpdateFailed] = useState("awal");
    const [nama, setNama] = useState();
    const [kategori, setKategori] = useState();
    const [deskripsi, setDeskripsi] = useState();
    const [durasi, setDurasi] = useState();
    const [harga, setHarga] = useState();
    const [status, setStatus] = useState();
    const { kursus_id } = useParams();

    const [listSubbab, setListSubbab] = useState([]);
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

    const fetchListGuru = () => {
        http.post("/admin/master/guru/list").then((res) => {
            setListGuru(res.data.listGuru);
            // setGuru(res.data.listGuru[0]);
        });
    };

    const fetchDataGuru = () => {
        http.post("/admin/master/kursus/detail", {
            kursus_id: kursus_id,
        }).then((res) => {
            setNama(res.data.kursus.nama);
            setKategori(res.data.kursus.kategori);
            setDeskripsi(res.data.kursus.deskripsi);
            setDurasi(res.data.kursus.durasi);
            setHarga(res.data.kursus.harga);
            setStatus(res.data.kursus.status);
            setGuru(res.data.guru);
        });
    };

    const fetchSubbab = () => {
        http.post("/admin/master/kursus/getAllSubbab", {
            kursus_id: kursus_id,
        }).then((res) => {
            setListSubbab(res.data.subbab);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        // fetchDataGuru();
        fetchListGuru();
        fetchSubbab();
    }, []);

    useEffect(() => {
        fetchDataGuru();
        console.log(listGuru);
    }, [listGuru]);

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="kursus detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={"/admin/master/kursus"} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto px-10 p-4 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black pb-20">
                                <div className="text-2xl text-blue-900 font-semibold mb-6 mt-4">
                                    Detail Kursus {nama}
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Guru</div>
                                    <div
                                        className="w-full"
                                        style={{ height: "36px" }}
                                    >
                                        <Input
                                            type="text"
                                            label="Guru"
                                            value={guru.nama}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Nama</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Nama"
                                            value={nama}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Kategori</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Kategori"
                                            value={kategori}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Deskripsi</div>
                                    <div className="w-full">
                                        <Textarea
                                            type="text"
                                            label="Deskripsi"
                                            value={deskripsi}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Durasi</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Durasi"
                                            value={`${durasi} menit`}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Harga</div>
                                    <div className="w-full">
                                        <Input
                                            type="text"
                                            label="Harga"
                                            value= {`Rp ${harga}`}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="flex mt-4">
                                    <div className="w-32">Status</div>
                                    <div className="w-96 text-base">
                                        <div>
                                            <Radio
                                                id="aktif"
                                                name="status"
                                                label="Aktif"
                                                checked={status == 1}
                                                disabled
                                            />
                                            <Radio
                                                id="tidakaktif"
                                                name="status"
                                                label="Tidak Aktif"
                                                checked={status == 0}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="clear-both"></div>
                                <div className="flex my-10">
                                    <div className="text-lg font-semibold">Silabus Kursus</div>
                                </div>
                                <table className="table table-compact w-full text-black text-base">
                                    <thead>
                                        <tr>
                                            <th className=" bg-white text-center text-base p-2">
                                                NO
                                            </th>
                                            <th className=" bg-white text-center text-base">
                                                JUDUL
                                            </th>
                                            <th className=" bg-white text-center text-base">
                                                DURASI
                                            </th>
                                            <th className=" bg-white text-center text-base">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listSubbab.map((n, index) => {
                                            return (
                                                <tr className="border border-b-gray-600 border-x-0">
                                                    <td className="text-center text-base p-2">
                                                        {index + 1}
                                                    </td>
                                                    <td className="text-base">
                                                        {n.judul}
                                                    </td>
                                                    <td className="text-center text-base">
                                                        {n.durasi} menit
                                                    </td>
                                                    <td className="text-center">
                                                        <Link
                                                            to={
                                                                `/admin/master/kursus/${kursus_id}/${n.subbab_id}`
                                                            }
                                                        >
                                                            <button className="btn btn-sm capitalize bg-blue-900 text-white rounded mr-3 font-normal">
                                                                Detail
                                                            </button>
                                                        </Link>
                                                        {/* <button className="btn btn-sm capitalize bg-blue-900 text-white rounded font-normal">
                                                            Hapus
                                                        </button> */}
                                                    </td>
                                                </tr>
                                            );
                                        })}
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

export default DetailKursus;
