import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";

const TambahSubbab = () => {
    const [title, setTitle] = useState("proses")
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [judul, setJudul] = useState()
    const [penjelasan,setPenjelasan] = useState()
    const [durasi, setDurasi] = useState()
    const {http,user} = AuthUser();

    const submitForm = () => {

    }

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
            <div className="content flex flex-col flex-wrap w-full px-24 pb-16">
                <div className="text-3xl text-blue-900 font-semibold mb-4">
                    {course}
                </div>
                <div className="text-2xl text-blue-900 font-semibold mb-6">
                    Tambah Subbab
                </div>
                <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                    <table>
                        <tr className="p-2">
                            <td className="py-4 w-1/6">Judul</td>
                            <td>
                                <Input
                                    type="text"
                                    className="w-full"
                                    name="judul"
                                    onChange={(e) => setJudul(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="p-2">
                            <td className="py-4 align-top">Deskripsi</td>
                            <td className="py-2">
                                <Textarea
                                    className="w-full"
                                    name="desc"
                                    onChange={(e) =>setPenjelasan(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="p-2">
                            <td className="py-4">Durasi</td>
                            <td className="flex w-1/4 py-2">
                                <Input
                                    type="text"
                                    className=""
                                    name="durasi"
                                    onChange={(e) =>setDurasi(e.target.value)}
                                />
                                <span className="ml-3 my-auto">menit</span>
                            </td>
                        </tr>
                    </table>
                    <button className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal" name="btnTambah"
                    onClick={submitForm}
                    >Tambah</button>
                </div>
            </div>
        </div>
    )
}

export default TambahSubbab
