import { Input, Option, Select } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";

const KursusDiterbitkan = () => {
    //tabs
    const [title, setTitle] = useState("new");

    return(
        <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div>
            </div>
            <div className="content flex flex-wrap gap-10 w-full px-24 pb-10">
                <div className="text-2xl text-blue-900 font-semibold">
                    Tambah Kursus Baru
                </div>
                <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col -mt-4">
                    <table>
                        <tr className="p-2">
                            <td className="py-4 w-1/6">Nama Kursus</td>
                            <td>
                                <Input
                                    type="text"
                                    label=""
                                    className="w-full"
                                    name="nama"
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
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default KursusDiterbitkan
