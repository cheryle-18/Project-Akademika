import { Input, Option, Select, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";

const KursusDiterbitkan = () => {
    //tabs
    const [title, setTitle] = useState("new");
    const [nama,setNama] = useState();
    const [kategori,setKategori] = useState();
    const [harga,setHarga] = useState();
    const [deskripsi,setDeskripsi] = useState();
    const {http,user} = AuthUser();

    const submitForm = () => {
        http.post("/guru/kursus/tambah", {
            guru_id:user.guru_id,
            nama:nama,
            kategori:kategori,
            harga:harga,
            deskripsi:deskripsi,
            status:1
        }).then((res) => {
            let data = res.data;
            console.log(data);
        });
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
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="p-2">
                            <td className="py-4">Kategori</td>
                            <td>
                            <Select className="w-full items-end" name="kategori" onChange={(e)=>setKategori(e)}>
                                <Option value="Teknologi Informasi">Teknologi Informasi</Option>
                                <Option value="Bisnis dan Ekonomi">Bisnis dan Ekonomi</Option>
                                <Option value="Logika dan Matematika">Logika dan Matematika</Option>
                                <Option value="Bahasa dan Literatur">Bahasa dan Literatur</Option>
                                <Option value="Fisika dan Teknik">Fisika dan Teknik</Option>
                                <Option value="Pengembangan Diri">Pengembangan Diri</Option>
                                <Option value="Kesehatan">Kesehatan</Option>
                                <Option value="Kesenian">Kesenian</Option>
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
                                    onChange={(e)=>setHarga(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="p-2">
                            <td className="py-4 align-top">Deskripsi</td>
                            <td className="py-2">
                                <Textarea
                                    label=""
                                    className="w-full"
                                    name="desc"
                                    onChange={(e) =>setDeskripsi(e.target.value)}
                                />
                            </td>
                        </tr>
                    </table>
                    <button className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal" name="btnSimpan"
                    onClick={submitForm}
                    >Simpan</button>
                </div>
            </div>
        </div>
    )
}

export default KursusDiterbitkan
