import {
    Button,
    Input,
    Option,
    Select,
    Textarea,
} from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams, useHistory } from "react-router-dom";
import GuruNav from "./Navbar";
import TabsKursus from "./TabsKursus";
import BannerKursus from "./BannerKursus";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AuthUser from "../../components/AuthUser";

const DetailKursus = () => {
    const { http, user, token } = AuthUser();
    const [title, setTitle] = useState("edit");
    const { kursus_id } = useParams();


    const [course, setCourse] = useState([]);
    const [selectedKategori, setSelectedKategori] = useState(null);
    const [edtNama, setEdtNama] = useState(null);
    const [edtHarga, setEdtHarga] = useState(null);
    const [edtDeskripsi, setEdtDeskripsi] = useState(null);
    const [edtDurasi, setEdtDurasi] = useState(null);
    const [tipeKursus, setTipeKursus] = useState("");
    const [deskripsiTolak, setDeskripsiTolak] = useState("");

    const [listSubbab, setListSubbab] = useState([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [isClose,setIsClose] = useState(true)

    setTimeout(() => {
        if (user == "admin") {
            return history.push("/admin/home");
        } else if (token == null) {
            return history.push("/");
        } else if (user.role_text == "siswa") {
            return history.push("/siswa/kursus");
        }
    }, 1000);

    const sweetAlert = withReactContent(Swal)

    const fireAlert = (title,icon,status,text) => {
        sweetAlert.fire({
            title: <strong>{title}</strong>,
            text:text,
            icon: icon,
            confirmButtonColor:"#0D47A1",
            didClose: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                if(status == "ajukan"){
                    window.location.reload()
                }
                else if(status=="delete"){
                    history.push("/guru/kursus/diterbitkan");
                }
             },

        })

    }

    const fetchKursus = () => {
        http.post("/guru/kursus/get", {
            guru_id: user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
            setSelectedKategori(res.data.kursus.kategori);
            setEdtNama(res.data.kursus.nama);
            setEdtHarga(res.data.kursus.harga);
            setEdtDeskripsi(res.data.kursus.deskripsi);
            setEdtDurasi(res.data.kursus.durasi);
            setTipeKursus(res.data.kursus_type);
            setDeskripsiTolak(res.data.deskripsi);
            setIsLoading(false);
        });
    };

    const fetchSubbab = () => {
        http.post("/guru/kursus/getAllSubbab", {
            kursus_id: kursus_id,
        }).then((res) => {
            setListSubbab(res.data.subbab);
        });
    };

    const submitEdit = () => {
        http.post("/guru/kursus/doEdit", {
            kursus_id: kursus_id,
            kategori: selectedKategori,
            nama: edtNama,
            harga: edtHarga,
            deskripsi: edtDeskripsi,
            durasi: edtDurasi,
        }).then((res) => {
            console.log(res.data);
            if(res.data == 1){
                fireAlert("Sukses!","success","edit","Berhasil edit data kursus!")
                fetchKursus();
            }
            else{
                fireAlert("Error","error","edit",res.data+'!')
            }
        });
    };

    const submitDelete = () => {
        http.post("/guru/kursus/doDelete", {
            kursus_id: kursus_id,
        }).then((res) => {
            console.log(res.data);
            document.getElementById("konfirmasiHapus").click()
            fireAlert("Sukses","success","delete","Berhasil delete kursus!")
        });
    };

    const submitDeleteSubbab = (subbab_id) => {
        http.post("/guru/kursus/doDeleteSubbab", {
            subbab_id: subbab_id,
        }).then((res) => {
            console.log(res.data);
            fetchSubbab();
        });
    };

    const submitAjukan = () => {
        http.post("/guru/kursus/doAjukan", {
            kursus_id: kursus_id,
        }).then((res) => {
            console.log(res.data);
            history.push("/guru/kursus/" + kursus_id + "/detail");
            document.getElementById("konfirmasiAjukan").click()
            fireAlert("Sukses!","success","ajukan","Berhasil mengajukan kursus!")
        });
    };

    const fetchMateri = (subbab_id) => {
        http.post("/guru/kursus/getAllMateri", {
            subbab_id: subbab_id,
        }).then((res) => {
            // console.log(res.data.materi);
            return res.data.materi;
        });
    };

    useEffect(() => {
        fetchKursus();
        fetchSubbab();
    }, []);

    const cetakKonfirmasiHapus = (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">
                Konfirmasi Hapus
            </h3>

            <hr className="w-full" />
            <label htmlFor="konfirmasiHapus">
                <div className="py-2 px-4 m-2 mt-4 mb-0 bg-red-600 text-white text-center rounded-md cursor-pointer float-right">
                    Batal
                </div>
            </label>
            <div
                onClick={submitDelete}
                className="py-2 px-4 m-2 mt-4 mb-0 bg-custom-blue text-white text-center rounded-md cursor-pointer float-right"
            >
                Hapus
            </div>
            <div className="clear-both"></div>
        </div>
    );
    const cetakAjukanKursus = ((tipeKursus == "draft"||tipeKursus == "ditolak") ) && (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">
                Ajukan Kursus
            </h3>
            <hr className="w-full" />
            <label htmlFor="konfirmasiAjukan">
                <div className="py-2 px-4 m-2 mt-4 mb-0 bg-red-600 text-white text-center rounded-md cursor-pointer float-right">
                    Batal
                </div>
            </label>
            <div
                onClick={submitAjukan}
                className="py-2 px-4 m-2 mt-4 mb-0 bg-custom-blue text-white text-center rounded-md cursor-pointer float-right"
            >
                Ajukan
            </div>
            <div className="clear-both"></div>
        </div>
    );

    return (
        <div>
            {isLoading ||
            token == null ||
            user == "admin" ||
            user.role_text == "siswa" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
                    {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                    <GuruNav />
                    {/* </div> */}
                    <BannerKursus courseParam={course}></BannerKursus>
                    <div className="static min-h-0 w-full z-0 px-4 sm:px-16 md:px-24 py-6">
                        <div className="tabs text-xl text-custom-blue mb-4">
                            <Link
                                to="/guru/kursus/diterbitkan"
                                className="rounded-xl py-2"
                            >
                                <div className="float-left">
                                    <FontAwesomeIcon
                                        icon={faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-left ml-4 text-custom-blue inline underline">
                                    Kembali ke kursus saya
                                </div>
                                <div className="clear-both"></div>
                            </Link>
                        </div>
                        <div className="tabs w-auto">
                            <TabsKursus
                                titleParam={title}
                                kursus_id={kursus_id}
                            ></TabsKursus>
                        </div>
                    </div>
                    <div className="content w-full px-24">
                        <div className="">
                            {(tipeKursus == "draft") && (
                                <label
                                    htmlFor="konfirmasiAjukan"
                                    className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded mr-3 capitalize font-normal float-right"
                                >
                                    Ajukan Kursus
                                </label>
                            )}

                            {(tipeKursus == "ditolak") && (
                                <label
                                    htmlFor="konfirmasiAjukan"
                                    className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded mr-3 capitalize font-normal float-right"
                                >
                                    Ajukan Kembali Kursus
                                </label>

                            )}

                            <label
                                htmlFor="konfirmasiHapus"
                                className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded mr-3 capitalize font-normal float-right"
                            >
                                Hapus Kursus
                            </label>
                            {/* <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded ml-auto mr-3 capitalize font-normal" onClick={submitDelete}>
                        Hapus Kursus
                    </button>

                    <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal" onClick={submitAjukan}>
                        Ajukan Kursus
                    </button> */}
                            <span className="text-2xl text-blue-900 font-semibold float-left">
                                {course.nama}
                            </span>
                            <div className="clear-both"></div>
                        </div>
                        <div className="my-2 text-lg font-semibold text-red-800">
                            Alasan Ditolak: { deskripsiTolak }
                        </div>
                        <div className="content my-6 content flex flex-col mt-6">
                            <div className="subtitle text-xl font-semibold mb-3">
                                Detail Kursus
                            </div>
                            <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                                <table>
                                    <tr className="p-2">
                                        <td className="py-4 w-1/6">
                                            Nama Kursus
                                        </td>
                                        <td>
                                            <Input
                                                type="text"
                                                className="w-full"
                                                name="nama"
                                                defaultValue={course.nama}
                                                onChange={(e) => {
                                                    setEdtNama(e.target.value);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="p-2">
                                        <td className="py-4">Kategori</td>
                                        <td>
                                            <Select
                                                className="w-full items-end"
                                                name="kategori"
                                                value={selectedKategori}
                                                onChange={(e) => {
                                                    setSelectedKategori(e);
                                                }}
                                            >
                                                <Option value="Teknologi Informasi">
                                                    Teknologi Informasi
                                                </Option>
                                                <Option value="Bisnis dan Ekonomi">
                                                    Bisnis dan Ekonomi
                                                </Option>
                                                <Option value="Logika dan Matematika">
                                                    Logika dan Matematika
                                                </Option>
                                                <Option value="Bahasa dan Literatur">
                                                    Bahasa dan Literatur
                                                </Option>
                                                <Option value="Fisika dan Teknik">
                                                    Fisika dan Teknik
                                                </Option>
                                                <Option value="Pengembangan Diri">
                                                    Pengembangan Diri
                                                </Option>
                                                <Option value="Kesehatan">
                                                    Kesehatan
                                                </Option>
                                                <Option value="Kesenian">
                                                    Kesenian
                                                </Option>
                                            </Select>
                                        </td>
                                    </tr>
                                    <tr className="p-2">
                                        <td className="py-4">Harga Kursus</td>
                                        <td>
                                            <Input
                                                type="text"
                                                className="w-full"
                                                name="harga"
                                                defaultValue={course.harga}
                                                onChange={(e) => {
                                                    setEdtHarga(e.target.value);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="p-2">
                                        <td className="py-4 w-1/6">
                                            Durasi Kursus
                                        </td>
                                        <td>
                                            <Input
                                                type="text"
                                                className="w-full"
                                                name="durasi"
                                                defaultValue={course.durasi}
                                                onChange={(e) => {
                                                    setEdtDurasi(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </td>
                                    </tr>
                                    <tr className="p-2">
                                        <td className="py-4 align-top">
                                            Deskripsi
                                        </td>
                                        <td>
                                            <Textarea
                                                className="w-full"
                                                name="desc"
                                                defaultValue={course.deskripsi}
                                                onChange={(e) => {
                                                    setEdtDeskripsi(
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </table>
                                <button
                                    className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal"
                                    name="btnSimpan"
                                    onClick={submitEdit}
                                >
                                    Simpan
                                </button>
                            </div>
                            <div className="subtitle text-xl font-semibold mt-10 mb-3">
                                Subbab Kursus
                            </div>
                            <div className="subbab bg-white rounded-lg p-3">
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
                                                <tr>
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
                                                        <button
                                                            className="btn btn-sm capitalize bg-blue-900 text-white rounded font-normal"
                                                            onClick={() =>
                                                                submitDeleteSubbab(
                                                                    n.subbab_id
                                                                )
                                                            }
                                                        >
                                                            Hapus
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-full my-3">
                                <Link
                                    to={
                                        "/guru/kursus/" +
                                        kursus_id +
                                        "/subbab/tambah"
                                    }
                                >
                                    <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal float-right">
                                        Tambah Subbab
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="z-10">
                        <input
                            type="checkbox"
                            id="konfirmasiHapus"
                            className="modal-toggle"
                        />
                        <div className="modal">
                            <div className="modal-box relative py-10 px-8">
                                <label
                                    htmlFor="konfirmasiHapus"
                                    className="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                                >
                                    ✕
                                </label>
                                {cetakKonfirmasiHapus}
                            </div>
                        </div>
                    </div>

                    <div className="z-10">
                        <input
                            type="checkbox"
                            id="konfirmasiAjukan"
                            className="modal-toggle"
                        />
                        <div className="modal">
                            <div className="modal-box relative py-10 px-8">
                                <label
                                    htmlFor="konfirmasiAjukan"
                                    className="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                                >
                                    ✕
                                </label>
                                {cetakAjukanKursus}
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default DetailKursus;
