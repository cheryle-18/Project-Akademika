import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { useHistory, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import {
    Alert,
    Input,
    Radio,
    Select,
    MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import Autocomplete from "@mui/material/Autocomplete";

const DetailKursus = (props) => {
    let history = useHistory();
    const { http } = AuthUser();
    const [guru, setGuru] = useState([]);
    const [listGuru, setListGuru] = useState([]);
    const [updateFailed, setUpdateFailed] = useState("awal");
    const [nama, setNama] = useState();
    const [kategori, setKategori] = useState();
    const [deskripsi, setDeskripsi] = useState();
    const [durasi, setDurasi] = useState();
    const [harga, setHarga] = useState();
    const [status, setStatus] = useState();
    const { id } = useParams();

    const fetchListGuru = () => {
        http.post("/admin/master/guru/list").then((res) => {
            setListGuru(res.data.listGuru);
        });
    };

    const fetchDataGuru = () => {
        http.post("/admin/master/kursus/detail", {
            kursus_id: id,
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
    useEffect(() => {
        fetchDataGuru();
        fetchListGuru();
    }, []);

    const handleChange = (e) => {
        var tempGuru = guru;
        tempGuru.nama = e.target.value;
        setGuru(tempGuru);
        console.log(tempGuru.nama);
    };

    // useEffect(() => {
    //     alert(guru.nama);
    // }, [guru]);

    // const submitUpdateForm = () => {
    //     //api call
    //     http.post("/admin/master/kursus/update", {
    //         username: registerUsername,
    //         nama: registerNama,
    //         password: registerPassword,
    //         telp: registerTelp,
    //         total_wallet: registerTotalWallet,
    //         status: registerStatus,
    //     }).then((res) => {
    //         let data = res.data;
    //         console.log(data);
    //         setUpdateFailed("success");
    //         // if (data.access_token != null && data.user != null) {
    //         //     //login success
    //         //     setToken(res.data.user, res.data.access_token);
    //         //     document.body.style.overflow = "auto";
    //         // } else {
    //         //     setLoginFailed(true);
    //         // }
    //     });
    // };

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="kursus detail">
                <div className="text-2xl p-14 pb-2">
                    {updateFailed != "success" && updateFailed != "awal" && (
                        <Alert severity="error" className="bg-red-400 mb-6">
                            Gagal Update!
                        </Alert>
                    )}
                    {updateFailed == "success" && (
                        <Alert severity="error" className="bg-green-400 mb-6">
                            Berhasil Update!
                        </Alert>
                    )}
                    <div className="bg-white overflow-y-auto h-77vh p-4 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black">
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Guru</div>
                            <div className="w-full">
                                <Select
                                    labelid="select-label"
                                    label="Guru"
                                    id="event-select"
                                    className="bg-white w-full"
                                    value={guru.nama}
                                    onChange={handleChange}
                                    align="left"
                                    required
                                >
                                    {listGuru.map((g, index) => {
                                        return (
                                            <MenuItem
                                                color="black"
                                                value={g.guru_id}
                                                key={g.guru_id}
                                            >
                                                {g.nama}
                                            </MenuItem>
                                        );
                                    })}
                                    {/* <MenuItem>123</MenuItem> */}
                                </Select>
                                {/* <Input
                                    type="text"
                                    label="Nama"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={guru.nama}
                                    onChange={(e) => setGuru(e.target.value)}
                                /> */}

                                {/* <Select
                                    labelid="select-label"
                                    label="Guru"
                                    id="event-select"
                                    className="bg-white w-full"
                                    value={123}
                                    align="left"
                                    required
                                >
                                    <MenuItem value="123">123</MenuItem>
                                </Select> */}
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Nama</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Nama"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Kategori</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Kategori"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={kategori}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Deskripsi</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Deskripsi"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={deskripsi}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Durasi</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Durasi"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={durasi}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Harga</div>
                            <div className="w-full">
                                <Input
                                    type="text"
                                    label="Harga"
                                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700 text-black"
                                    value={harga}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start items-center mt-4">
                            <div className="w-40">Status</div>
                            <div className="w-full text-lg">
                                <div>
                                    <Radio
                                        id="aktif"
                                        name="status"
                                        label="Aktif"
                                        checked={status == 1}
                                        onChange={(e) => {
                                            setStatus(1);
                                        }}
                                    />
                                    <Radio
                                        id="tidakaktif"
                                        name="status"
                                        label="Tidak Aktif"
                                        checked={status == 0}
                                        onChange={(e) => {
                                            setStatus(0);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="float-right">
                                <button
                                    type="button"
                                    // onClick={submitUpdateForm}
                                    className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg min-w-20"
                                >
                                    Simpan Perubahan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default DetailKursus;
