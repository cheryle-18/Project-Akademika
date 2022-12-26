import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import PembahasanCard from "./PembahasanCard";
import Nav from "./Navbar";
import { Link, useHistory, useParams } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const NilaiKuis = () => {
    const { http, user, token } = AuthUser();
    const { kursus_id, subbab_id } = useParams();
    const [course, setCourse] = useState([]);
    const [subbab, setSubbab] = useState([]);
    const [listSoal, setListSoal] = useState([]);
    const [hasilKuis, setHasilKuis] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const fetchDataKuis = () => {
        let url = `/siswa/kursus/kuis/get/${subbab_id}`;
        http.get(url).then((res) => {
            if (res.data.listSoal) {
                setListSoal(res.data.listSoal);
            }
        });
    };

    const fetchDataJawaban = () => {
        let url = `/siswa/kursus/kuis/getResult/${subbab_id}/${user.siswa_id}`;
        http.get(url).then((res) => {
            if (res.data.hasilKuis) {
                setHasilKuis(res.data.hasilKuis);
                setIsLoading(false);
            }
        });
    };

    const fetchSubbab = () => {
        http.post("/siswa/kursus/getSubbab", {
            subbab_id: subbab_id
        }).then((res) => {
            setSubbab(res.data.subbab);
            console.log(subbab)
        });
    };

    useEffect(() => {
        fetchSubbab();
        fetchDataKuis();
        fetchDataJawaban();
    }, []);

    return (
        <div>
            {isLoading ||
            token == null ||
            user == "admin" ||
            user.role_text == "guru" ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
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
                                    {hasilKuis.nilai}
                                </div>
                            </div>
                            <div className="mt-10 text-custom-blue font-semibold text-xl">
                                Pembahasan
                            </div>
                            {listSoal.map((soal, index) => {
                                if (hasilKuis.listJawaban) {
                                    console.log(hasilKuis.listJawaban[index]);
                                    return (
                                        <PembahasanCard
                                            kuis={soal}
                                            jawaban={
                                                hasilKuis.listJawaban[index]
                                            }
                                            idx={index + 1}
                                        ></PembahasanCard>
                                    );
                                } else {
                                    return <div></div>;
                                }
                            })}
                            <div className="mt-10">
                                <div className="">
                                    <Link to={`/siswa/kursus/${kursus_id}/detail`}>
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
            )}
        </div>
    );
};

export default NilaiKuis;
