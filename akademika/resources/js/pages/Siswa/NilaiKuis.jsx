import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import PembahasanCard from "./PembahasanCard";
import Nav from "./Navbar";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const NilaiKuis = () => {
    const {http,user} = AuthUser()
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [subbab, setSubbab] = useState({
        id: 2,
        judul: "HTML",
        deskripsi: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    })
    const [listSoal, setListSoal] = useState([])
    const [hasilKuis, setHasilKuis] = useState([])

    // const fetchDataKuis = () => {
    //     let url = `/siswa/kursus/kuis/get/${subbab.id}`
    //     http.get(url).then((res) => {
    //         setListSoal(res.data.listSoal)
    //         // console.log(res.data.listSoal)
    //     })
    //     console.log("tes list soal")
    // }

    // const fetchDataJawaban = () => {
    //     let url = `/siswa/kursus/kuis/getResult/${subbab.id}`
    //     http.get(url).then((res) => {
    //         console.log(res.data.hasilKuis)
    //         setHasilKuis(res.data.hasilKuis)
    //     })
    //     console.log("tes list jwbn")
    // }

    // useEffect(() => {
    //     fetchDataKuis()
    //     // fetchDataJawaban()
    // }, [])

    // useEffect(() => {
    //     (async() =>{
    //         fetchDataKuis()
    //         fetchDataJawaban()
    //     })()
    // }, [])

    // useEffect(() => {
    //     console.log(listSoal)
    // }, [listSoal])

    useEffect(() => {
        const fetchDataKuis = () => {
            let url = `/siswa/kursus/kuis/get/${subbab.id}`
            http.get(url).then((res) => {
                setListSoal(res.data.listSoal)
            })
            setListSoal([1,2,3])
        }

        const fetchDataJawaban = () => {
            let url = `/siswa/kursus/kuis/getResult/${subbab.id}`
            http.get(url).then((res) => {
                setHasilKuis(res.data.hasilKuis)
            })
        }

        fetchDataKuis()
        fetchDataJawaban()
    }, [])

    useEffect(() => {
        // cetakKuis
        console.log(hasilKuis)
        console.log(listSoal)
    }, [hasilKuis, listSoal])

    const cetakKuis = listSoal.map((soal, index) => (
        <PembahasanCard kuis={soal} jawaban={hasilKuis.listJawaban[index]} idx={index + 1}></PembahasanCard>
    ))

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
                            {/* {hasilKuis.nilai} */}
                        </div>
                    </div>
                    <div className="mt-10 text-custom-blue font-semibold text-xl">
                        Pembahasan
                    </div>
                    {cetakKuis}
                    <div className="mt-10">
                        <div className="">
                            <Link to="/siswa/kursus/materi">
                                <button
                                    className="btn mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                    name=""
                                >
                                    &lt; &nbsp;&nbsp; Kembali
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NilaiKuis;
