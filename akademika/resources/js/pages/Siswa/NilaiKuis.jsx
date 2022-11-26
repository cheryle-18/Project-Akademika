import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import { Link } from "react-router-dom";

const NilaiKuis = () => {
    const [subbab, setSubbab] = useState({
        judul: "HTML",
        deskripsi:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    });

    const [kuiss, setKuis] = useState([
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Mark Language",
                "Hyper Markup Language",
                "Hyper Mark Language",
            ],
            jawaban: "Hyper Mark Language",
            kunciJawaban: "HyperText Markup Language",
            pembahasan:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore magnam, eum commodi perferendis quae, deleniti corporis architecto molestias possimus modi itaque ad iure impedit perspiciatis, odio ipsum aspernatur debitis esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore magnam, eum commodi perferendis quae, deleniti corporis architecto molestias possimus modi itaque ad iure impedit perspiciatis, odio ipsum aspernatur debitis esse!",
        },
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup",
                "HyperText Markup",
                "HyperText Markup",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
            kunciJawaban: "HyperText Markup Language",
            pembahasan:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore magnam, eum commodi perferendis quae, deleniti corporis architecto molestias possimus modi itaque ad iure impedit perspiciatis, odio ipsum aspernatur debitis esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore magnam, eum commodi perferendis quae, deleniti corporis architecto molestias possimus modi itaque ad iure impedit perspiciatis, odio ipsum aspernatur debitis esse!",
        },
    ]);

    const cetakKuis = kuiss.map((kuis, index) => (
        <KuisCard kuis={kuis} idx={index + 1}></KuisCard>
    ));

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                <div className="drawer-side bg-custom-blue overflow-y-auto flex-none">
                    <Nav></Nav>
                </div>
                <div className="banner">
                    <Banner subbab={subbab}></Banner>
                </div>
                <div className="px-4 sm:px-16 md:px-24 mb-20">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-custom-blue text-xl font-semibold mt-10">
                            Nilai Anda
                        </div>
                        <div className="text-custom-blue p-14 bg-white rounded-lg shadow-lg text-5xl font-semibold mt-10">
                            3/4
                        </div>
                    </div>
                    <div className="mt-10 text-custom-blue font-semibold text-xl">
                        Pembahasan
                    </div>
                    {cetakKuis}
                    <div className="mt-10">
                        <div className="float-left">
                            <Link to="/siswa/kursus/materi">
                                <button
                                    className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                    name=""
                                >
                                    &lt; &nbsp;&nbsp; Kembali
                                </button>
                            </Link>
                        </div>
                        <div className="float-right">
                            <Link to="/siswa/kursus/materi">
                                <button
                                    className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                    name=""
                                >
                                    Materi Selanjutnya &nbsp;&nbsp; &gt;
                                </button>
                            </Link>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NilaiKuis;
