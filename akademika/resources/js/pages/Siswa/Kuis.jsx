import React, { useState, useEffect, useId } from "react";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import AuthUser from "../../components/AuthUser";
import { Link } from "react-router-dom";
import { Radio } from "@material-tailwind/react";
import { useHistory } from "react-router-dom";

const Kuis = () => {
    const {http,user} = AuthUser()
    const id = useId()
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [subbab, setSubbab] = useState({
        id: 2,
        judul: "HTML",
        deskripsi: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    });
    const [listSoal, setListSoal] = useState([]);
    const [listJawaban, setListJawaban] = useState([])
    const [siswa, setSiswa] = useState({
        id: 2,
        nama: "Cloyd Shanahan"
    })
    const [submitData, setSubmitData] = useState("")

    const fetchDataKuis = () => {
        let url = `/siswa/kursus/kuis/get/${subbab.id}`
        http.get(url).then((res) => {
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
        console.log(listJawaban)
        const formData = new FormData()
        formData.append('subbabId', subbab.id)
        formData.append('siswaId', siswa.id)
        formData.append('listJawaban', JSON.stringify(listJawaban))

        http.post("/siswa/kursus/kuis/submit",formData).then((res) => {
            let data = res.data
            console.log(data)
            setSubmitData(data)
        })
    }

    const redirect = () => {
        const history = useHistory()
        history.push("/siswa/kursus/kuis/nilai")
    }

    // useEffect(() => {
    //     redirect()
    // }, [submitData])

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
        fetchDataKuis()
    }, [])

    useEffect(() => {
        cetakKuis
        generateListJwbn()
        console.log(listSoal)
        console.log(listJawaban)
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
                            {/* <Link to="/siswa/kursus/nilai"> */}
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
    );
};

export default Kuis;
