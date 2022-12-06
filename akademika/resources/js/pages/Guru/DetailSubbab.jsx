import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const DetailSubbab = () => {
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState(
        "Pengembangan Website Front-End Dasar"
    );
    const [judul, setJudul] = useState("JavaScript DOM");
    const [deskripsi, setDeskripsi] = useState(
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat rerum provident perspiciatis iure quas nam."
    );
    const [durasi, setDurasi] = useState(120);
    const [listMateri, setListMateri] = useState([
        {
            bacaan: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim ipsa pariatur, accusantium eaque obcaecati consequuntur dignissimos minima dolor quos itaque dolores qui. Maxime assumenda, possimus ratione ad commodi mollitia libero eaque quod itaque accusamus sit in doloribus molestias beatae hic. Officia, quia. Aliquid minus aliquam quae earum illo vero!",
            video: "google.com",
        },
        {
            bacaan: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim ipsa pariatur, accusantium eaque obcaecati consequuntur dignissimos minima dolor quos itaque dolores qui. Maxime assumenda, possimus ratione ad commodi mollitia libero eaque quod itaque accusamus sit in doloribus molestias beatae hic. Officia, quia. Aliquid minus aliquam quae earum illo vero!",
            video: "google.com",
        },
    ]);
    const { http, user } = AuthUser();

    const submitForm = () => {};

    return (
        <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
            {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                <GuruNav />
            {/* </div> */}
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs text-2xl text-custom-blue">
                    <Link
                        to="/guru/kursus/detail"
                        className="rounded-xl py-2"
                    >
                        <div className="float-left">
                            <FontAwesomeIcon
                                icon={faArrowCircleLeft}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="float-left ml-4 text-custom-blue inline underline">
                            Kembali ke detail kursus
                        </div>
                        <div className="clear-both"></div>
                    </Link>
                </div>
            </div>
            <div className="content flex flex-col flex-wrap w-full px-24 pb-16">
                <div className="text-3xl text-blue-900 font-semibold mb-4">
                    {course}
                </div>
                <div className="text-2xl text-blue-900 font-semibold mb-6">
                    Detail Subbab {judul}
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
                                    value={judul}
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
                                    value={deskripsi}
                                    onChange={(e) =>
                                        setDeskripsi(e.target.value)
                                    }
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
                                    value={durasi}
                                    onChange={(e) => setDurasi(e.target.value)}
                                />
                                <span className="ml-3 my-auto">menit</span>
                            </td>
                        </tr>
                    </table>
                    <button
                        className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal"
                        name="btnTambah"
                        onClick={submitForm}
                    >
                        Tambah
                    </button>
                </div>
                <div className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
                    Materi
                </div>
                <div className="materi bg-white rounded-lg p-3">
                    <table className="table table-compact w-full text-black">
                        <thead>
                            <tr>
                                <th className=" bg-white text-center text-base">
                                    NO
                                </th>
                                <th className=" bg-white text-center text-base">
                                    BACAAN
                                </th>
                                <th className=" bg-white text-center text-base">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listMateri.map((n, index) => {
                                return (
                                    <tr>
                                        <td className="text-center text-base">
                                            {index + 1}
                                        </td>
                                        <td className="text-base truncate">
                                            {n.bacaan.substring(0, 100)}...
                                        </td>
                                        <td className="text-center">
                                            <Link to="/guru/kursus/materi">
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
                <Link to="/guru/kursus/materi/tambah">
                        <button className="btn btn-sm h-10 px-4 mt-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal">
                            Tambah Materi
                        </button>
                    </Link>
                <div className="text-2xl text-blue-900 font-semibold mt-10 mb-4">
                    Kuis
                </div>
                <div className="w-full my-3">
                    <div className="mb-3">Tidak ada kuis untuk materi ini</div>
                    <Link to="/guru/kursus/kuis">
                        <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal">
                            Tambah Kuis
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailSubbab;
