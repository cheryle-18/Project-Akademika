import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";

const Kuis = () => {
    const {http,user} = AuthUser()
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [subbab, setSubbab] = useState({
        id: 2,
        judul: "HTML",
        deskripsi:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    });
    const [listSoal, setListSoal] = useState([
        {
            kuis_soal_id: 1,
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
        {
            kuis_soal_id: 2,
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
    ]);

    const cetakKuis = listSoal.map((soal, index) => (
        <KuisCard kuis={soal} idx={index + 1} key={soal.kuis_soal_id}></KuisCard>
    ));

    const fetchDataKuis = () => {
        let url = `/siswa/kursus/kuis/get/${subbab.id}`
        http.post(url).then((res) => {
            setListSoal(res.data.listSoal)
        })
    }

    useEffect(() => {
        fetchDataKuis()
    }, [])

    useEffect(() => {
        console.log(listSoal)
        cetakKuis
    }, [listSoal])

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                <div className="drawer-side bg-custom-blue overflow-y-auto flex-none">
                    {/* <Nav></Nav> */}
                </div>
                <div className="banner">
                    <Banner subbab={subbab}></Banner>
                </div>
                <div className="px-4 sm:px-16 md:px-24 mb-20">
                    <div className="mt-10 text-custom-blue font-semibold text-xl">
                        Kuis
                    </div>
                    {cetakKuis}
                    <div className="mt-10">
                        <div className="float-right">
                            <Link to="/siswa/kursus/nilai">
                                <button
                                    className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                    name=""
                                >
                                    Selesai &nbsp;&nbsp; &gt;
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

export default Kuis;
