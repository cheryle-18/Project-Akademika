import { Button, Input, Option, Select } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";

const DetailKursus = () => {
    const [course, setCourse] = useState({
        nama: "Pengembangan Website Front-End Dasar 1",
        kategori: "Teknologi Informasi",
        harga: 250000,
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
        durasi: 40
    })

    const [listMateri, setListMateri] = useState([
        {
            judul: "HyperText Markup Language (HTML)",
            durasi: 120
        },
        {
            judul: "Cascading Style Sheet (CSS)",
            durasi: 120
        },
        {
            judul: "JavaScript",
            durasi: 120
        },
    ])

    const [title, setTitle] = useState("proses")

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div>
            </div>
            <div className="content w-full px-24">
                <div className="flex">
                    <span className="text-2xl text-blue-900 font-semibold ">Pengembangan Website Front End Dasar</span>
                    <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded ml-auto mr-3 capitalize font-normal">
                        Hapus Kursus
                    </button>
                    <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal">
                        Ajukan Kursus
                    </button>
                </div>
                <div className="content my-6 content flex flex-col mt-6">
                    <div className="subtitle text-xl font-semibold mb-3">
                        Detail Kursus
                    </div>
                    <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                        <table>
                            <tr className="p-2">
                                <td className="py-4 w-1/6">Nama Kursus</td>
                                <td>
                                    <Input
                                        type="text"
                                        label=""
                                        className="w-full"
                                        name="nama"
                                        value={course.nama}
                                    />
                                </td>
                            </tr>
                            <tr className="p-2">
                                <td className="py-4">Kategori</td>
                                <td>
                                <Select label="" className="w-full items-end" name="kategori">
                                    <Option>Teknologi Informasi</Option>
                                    <Option>Bisnis dan Ekonomi</Option>
                                    <Option>Logika dan Matematika</Option>
                                    <Option>Bahasa dan Literatur</Option>
                                    <Option>Fisika dan Teknik</Option>
                                    <Option>Pengembangan Diri</Option>
                                    <Option>Kesehatan</Option>
                                    <Option>Kesenian</Option>
                                </Select>
                                </td>
                            </tr>
                            <tr className="p-2">
                                <td className="py-4">Harga Kursus</td>
                                <td>
                                    <Input
                                        type="text"
                                        label=""
                                        className="w-full"
                                        name="harga"
                                        value={course.harga}
                                    />
                                </td>
                            </tr>
                            <tr className="p-2">
                                <td className="py-4">Durasi</td>
                                <td className="flex">
                                    <Input
                                        type="text"
                                        label=""
                                        className="w-1/4"
                                        name="durasi"
                                        value={course.durasi}
                                    />
                                    <span className="mr-auto my-auto">jam</span>
                                </td>
                            </tr>
                            <tr className="p-2 h-40">
                                <td className="py-4">Deskripsi</td>
                                <td>
                                    <Input
                                        type="text"
                                        label=""
                                        className="w-full h-24"
                                        name="desc"
                                        value={course.deskripsi}
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="subtitle text-xl font-semibold my-3">
                        Materi Kursus
                    </div>
                    <div className="materi bg-white rounded-lg p-3">
                        <table className="table table-compact w-full text-black">
                            <thead>
                                <tr>
                                    <th className=" bg-white text-center text-base">NO</th>
                                    <th className=" bg-white text-center text-base">JUDUL</th>
                                    <th className=" bg-white text-center text-base">DURASI</th>
                                    <th className=" bg-white text-center text-base">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    listMateri.map((n, index) => {
                                        return(
                                            <tr>
                                                <td className="text-center text-base">{index+1}</td>
                                                <td className="text-base">{n.judul}</td>
                                                <td className="text-center text-base">{n.durasi} menit</td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm capitalize bg-blue-900 text-white rounded mr-3 font-normal">Detail</button>
                                                    <button className="btn btn-sm capitalize bg-blue-900 text-white rounded font-normal">Hapus</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full my-3">
                        <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal float-right">
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailKursus
