import React, { useState, useEffect, useId } from "react";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DetailKuisAdmin = (props) => {
    let history = useHistory();
    const {http, user, token} = AuthUser()
    const id = useId()
    const { kursus_id, subbab_id } = useParams();
    const [subbab, setSubbab] = useState([]);
    const [listSoal, setListSoal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        if (token == null) {
            console.log(token);
            return history.push("/");
        } else {
            if (user.role_text != null) {
                if (user.role_text == "guru") {
                    return history.push("/guru/kursus/diterbitkan");
                } else if (user.role_text == "siswa") {
                    return history.push("/siswa/kursus");
                }
            }
        }
    }, 1000);

    const fetchDataKuis = () => {
        http.post("/admin/master/kursus/getKuis", {
            subbab_id: subbab_id
        }).then((res) => {
            console.log(res.data.listSoal)
            setListSoal(res.data.listSoal)
        })
    }

    const fetchSubbab = () => {
        http.post("/admin/master/kursus/getSubbab", {
            subbab_id: subbab_id
        }).then((res) => {
            setSubbab(res.data.subbab);
            console.log(subbab)
        });
    };

    useEffect(() => {
        fetchSubbab()
        fetchDataKuis()
    }, [])

    useEffect(() => {
        console.log(listSoal)
        setIsLoading(false)
    }, [listSoal])

    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                <div className="bg-gray-200 flex">
                    <Sidebar now="kursus detail">
                        <div className="text-base p-14 pb-2">
                            <div className="back mb-4">
                                <Link to={`/admin/master/kursus/${kursus_id}/${subbab_id}`} className="flex">
                                    <FontAwesomeIcon icon={faArrowLeft} className="text-blue-900 my-auto text-lg" />
                                    <span className="ml-3 font-semibold text-blue-900 text-lg">Kembali</span>
                                </Link>
                            </div>
                            <div className="bg-white overflow-y-auto min-h-77vh h-auto px-10 p-4 mb-6 rounded-md drop-shadow-lg overflow-x-auto text-black pb-20">
                                { listSoal && listSoal.length>0 &&
                                    listSoal.map((soal, index) => (
                                        <div className="relative p-4 mt-6 pr-0" key={soal.kuis_soal_id}>
                                            <div className="bg-white px-14 py-10 static rounded-xl min-h-100px border border-custom-blue">
                                                <div className="num bg-blue-900 text-white text-xl font-bold rounded-full absolute w-14 h-14 flex justify-center items-center -ml-20 -mt-2">
                                                    <div className="inline">{index+1}</div>
                                                </div>
                                                <div className="text-blue-900">
                                                    <div className="font-semibold text-xl h-10 flex justify-start items-center">
                                                        {soal.pertanyaan}
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-12 mt-4 gap-4">
                                                    {soal.pilihan.map((pil, index2) => (
                                                        <div className="col-span-12 xl:col-span-6 bg-custom-light-blue rounded-md">
                                                            <Radio
                                                                value={pil.id}
                                                                label={pil.jawaban}
                                                                className="text-black font-semibold"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default DetailKuisAdmin;
