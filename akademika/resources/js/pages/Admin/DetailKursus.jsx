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

    const handleChange = (e) => {
        var tempGuru = guru;
        // console.log(e.target);
        // tempGuru.nama = e.target.value;
        tempGuru.guru_id = e.target.value;
        setGuru(tempGuru);
        console.log(tempGuru.guru_id);
        // console.log(guru);
    };

    useEffect(() => {
        fetchDataGuru();
        console.log(listGuru);
    }, [listGuru]);

    const submitUpdateForm = () => {
        //api call
        http.post("/admin/master/kursus/update", {
            kursus_id: kursus_id,
            guru_id: guru.guru_id,
            nama: nama,
            kategori: kategori,
            deskripsi: deskripsi,
            durasi: durasi,
            harga: harga,
            status: status,
        }).then((res) => {
            let data = res.data;
            console.log(data);
            setUpdateFailed("success");
            // if (data.access_token != null && data.user != null) {
            //     //login success
            //     setToken(res.data.user, res.data.access_token);
            //     document.body.style.overflow = "auto";
            // } else {
            //     setLoginFailed(true);
            // }
        });
    };

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="kursus detail">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-white overflow-y-auto h-77vh px-10 p-4 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black pb-20">
                                {updateFailed != "success" &&
                                    updateFailed != "awal" && (
                                        <Alert
                                            severity="error"
                                            className="bg-red-400 mb-6"
                                        >
                                            Gagal Update!
                                        </Alert>
                                    )}
                                {updateFailed == "success" && (
                                    <Alert
                                        severity="error"
                                        className="bg-green-400 mb-6"
                                    >
                                        Berhasil Update!
                                    </Alert>
                                )}
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Guru</div>
                                    <div
                                        className="w-full"
                                        style={{ height: "36px" }}
                                    >
                                        <select
                                            placeholder="Guru"
                                            style={{
                                                padding: "10px 12px",
                                                paddingLeft: "8px",
                                            }}
                                            className="w-full bordered border-2 font-normal text-sm border-gray-400 rounded-lg focus:border-blue-600"
                                            onChange={handleChange}
                                        >
                                            {listGuru.map((g, index) => (
                                                <option
                                                    value={g.guru_id}
                                                    selected={
                                                        g.guru_id ==
                                                        guru.guru_id
                                                    }
                                                >
                                                    {g.nama}
                                                </option>
                                            ))}
                                        </select>
                                        {/* <Select
                                    labelid="select-label"
                                    label="Guru"
                                    id="event-select"
                                    className="bg-white w-full text-black"
                                    onChange={handleChange}
                                    value={guru.guru_id}
                                    // value={"123"}
                                    align="left"
                                    required
                                >
                                    {listGuru.map((g, index) => (
                                        <Option
                                            // onClick={() => {
                                            //     handleChange(g)
                                            // }}
                                            value={g.guru_id}
                                            key={g.guru_id}
                                        >
                                            {g.nama}
                                        </Option>
                                    ))}
                                    <Option value={35}>fho23wfh</Option>
                                    <Option value="123">234</Option>
                                </Select> */}
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
                                            onChange={(e) =>
                                                setNama(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setKategori(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setDeskripsi(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setDurasi(e.target.value)
                                            }
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
                                            onChange={(e) =>
                                                setHarga(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-52">Status</div>
                                    <div className="w-96 text-lg">
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
                                    <div className="w-full">
                                        <div className="float-right">
                                            <button
                                                type="button"
                                                onClick={submitUpdateForm}
                                                className="py-2 px-4  bg-custom-blue hover:bg-blue-900 text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg min-w-20"
                                            >
                                                Simpan Perubahan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear-both"></div>
                                <div className="flex justify-start items-center mt-4">
                                    <div className="w-40">Subbab</div>
                                </div>
                                <table className="table table-compact w-full text-black">
                                    <thead>
                                        <tr>
                                            <th className=" bg-white text-center text-base">
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
                                                    <td className="text-center text-base">
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
                                                                "/guru/kursus/" +
                                                                kursus_id +
                                                                "/subbab/" +
                                                                n.subbab_id +
                                                                "/detail"
                                                            }
                                                        >
                                                            <button className="btn btn-sm capitalize bg-blue-900 text-white rounded mr-3 font-normal">
                                                                Detail
                                                            </button>
                                                        </Link>
                                                        <button className="btn btn-sm capitalize bg-blue-900 text-white rounded font-normal">
                                                            Hapus
                                                        </button>
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
