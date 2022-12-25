import React, { useState, useEffect, useId } from "react";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { Link, useParams } from "react-router-dom";
import { Radio } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";

const Kuis = () => {
    const {http, user, token} = AuthUser()
    const id = useId()
    const { kursus_id, subbab_id } = useParams();
    const [subbab, setSubbab] = useState([]);
    const [listSoal, setListSoal] = useState([]);
    const [listJawaban, setListJawaban] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory()

    setTimeout(() => {
        if (token == null || user == "admin") {
            console.log(token);
            return history.push("/");
        } else if (user.role_text == "guru") {
            return history.push("/guru/kursus/diterbitkan");
        }
    }, 1000);

    const fetchDataKuis = () => {
        let url = `/siswa/kursus/kuis/get/${subbab.subbab_id}`
        http.get(url).then((res) => {
            console.log(res.data.listSoal)
            setListSoal(res.data.listSoal)
        })
    }

    const generateListJwbn = () => {
        listSoal.map((soal, index) => {
            listJawaban.push({
                soal_id: soal.id,
                pil_jwbn_id: -1
            })
        })
    }

    const selectAnswer = (pil_jwbn_id, soal_id, idx) => {
        let temp = listJawaban[idx]
        if(temp.soal_id = soal_id){
            temp.pil_jwbn_id = pil_jwbn_id
        }

        const newListJwbn = [...listJawaban]
        newListJwbn[idx] = temp
        setListJawaban(newListJwbn)
    }

    const submitForm = () => {
        // console.log(listJawaban)
        const formData = new FormData()
        formData.append('subbabId', subbab.subbab_id)
        formData.append('siswaId', user.siswa_id)
        formData.append('listJawaban', JSON.stringify(listJawaban))

        http.post("/siswa/kursus/kuis/submit",formData).then((res) => {
            let url = `/siswa/kursus/${kursus_id}/subbab/${subbab_id}/kuis/nilai`
            history.push(url)
        })
    }

    const fetchSubbab = () => {
        http.post("/siswa/kursus/getSubbab", {
            subbab_id: subbab_id
        }).then((res) => {
            setSubbab(res.data.subbab);
            console.log(subbab)
        });
    };

    const cetakKuis = listSoal.map((soal, index) => (
        // <KuisCard kuis={soal} idx={index+1} key={soal.kuis_soal_id}></KuisCard>
        <div className="relative p-4 mt-6 pr-0" key={soal.kuis_soal_id}>
            <div className="bg-white px-14 py-10 static rounded-xl min-h-100px">
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
                                id={`${soal.id}${index2}`}
                                name={`jawaban${soal.id}`}
                                value={pil.id}
                                label={pil.jawaban}
                                className="text-black font-semibold"
                                onChange={() => ""}
                                onClick={ (e) => selectAnswer(e.target.value, soal.id, index) }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ));

    useEffect(() => {
        fetchSubbab()
    }, [])

    useEffect(() => {
        fetchDataKuis()
    }, [subbab])

    useEffect(() => {
        cetakKuis
        generateListJwbn()
        console.log(listSoal)
        console.log(listJawaban)
        setIsLoading(false)
    }, [listSoal])

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
                        <div className="drawer-side bg-custom-blue flex-none">
                            <Nav></Nav>
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
                                    {/* <Link to={`/siswa/kursus/${kursus_id}/subbab/${subbab.subbab_id}/kuis/nilai`}> */}
                                        <button
                                            className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                            name="" onClick={ submitForm }
                                        >
                                            Selesai &nbsp;&nbsp; &gt;
                                        </button>
                                    {/* </Link> */}
                                </div>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Kuis;
