import { Input, Radio, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import { useId } from "react";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";
import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";


const TambahKuis = () => {
    const {http,user} = AuthUser()
    const {kursus_id,subbab_id} = useParams()
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState([])
    const [ctrSoal, setCtrSoal] = useState(1)
    const id = useId()
    const [listSoal, setListSoal] = useState([
        {
            id: id+0,
            pertanyaan: "",
            nilai: 0,
            jawaban: "",
            pilihan: [],
            pembahasan: ""
        }
    ])

    const fetchDataKuis = () => {
        let url = `/guru/kursus/kuis/getKuis/${subbab_id}`
        http.get(url).then((res) => {
            console.log(res.data.listSoal)
            let temp = res.data.listSoal
            if(temp.length > 0)
                setListSoal(temp);
        })
        setCtrSoal(listSoal.length)
        console.log(listSoal)
    }

    const submitForm = () => {
        // console.log(listSoal)
        const formData = new FormData();
        formData.append('subbabId', subbab_id)
        formData.append('listSoal', JSON.stringify(listSoal))

        http.post("/guru/kursus/kuis/simpan",formData).then((res) => {
            let data = res.data
            console.log(data)
        })
    }

    const addCount = () => {
        setCtrSoal(ctrSoal+1)

        listSoal.push({
            id: id+ctrSoal,
            pertanyaan: "",
            nilai: 0,
            jawaban: "",
            pilihan: [],
            pembahasan: ""
        })
    }

    const handleDelete = (deleteId) => {
        const newListSoal = listSoal.filter(e=>e.id!=deleteId)
        setListSoal(newListSoal)
    }

    const updatePertanyaan = (pertanyaan, idx) => {
        let soal = listSoal[idx]
        soal.pertanyaan = pertanyaan

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)
    }

    const updateNilai = (nilai, idx) => {
        let soal = listSoal[idx]
        soal.nilai = nilai

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)
    }

    const updatePilihan = (pilihan, idxPil, idx) => {
        let soal = listSoal[idx]
        if(soal.pilihan.length <= idxPil){
            soal.pilihan.push(pilihan)
        }
        else{
            soal.pilihan[idxPil] = pilihan
        }

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)
    }

    const updateJawaban = (idxJwbn, idx) => {
        let soal = listSoal[idx]
        soal.jawaban = soal.pilihan[idxJwbn]

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)
    }

    const updatePembahasan = (pembahasan, idx) => {
        let soal = listSoal[idx]
        soal.pembahasan = pembahasan

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)
    }

    const fetchKursus = () => {
        http.post("/guru/kursus/get", {
            guru_id:user.guru_id,
            kursus_id: kursus_id,
        }).then((res) => {
            setCourse(res.data.kursus);
        });
    };


    useEffect(() => {
        fetchKursus()
        fetchDataKuis()
    }, [])

    useEffect(() => {
        displaySoalCard
    }, [ctrSoal])

    const displaySoalCard = listSoal.map((soal, index) => (
        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col -mt-4">
            <div className="flex gap-2">
                <div className="w-2/3">
                    <Input
                        type="text"
                        label="Pertanyaan"
                        className=""
                        name="pertanyaan"
                        value={soal.pertanyaan}
                        onChange={ (e) => updatePertanyaan(e.target.value, index) }
                    />
                </div>
                <div className="w-1/6 mr-2">
                    <Input
                        type="text"
                        label="Nilai"
                        className=""
                        name="nilai"
                        value={soal.nilai}
                        onChange={ (e) => updateNilai(e.target.value, index) }
                    />
                </div>
                <div className="w-1/6">
                    <button className="btn btn-sm h-9 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal w-full" onClick={ () => handleDelete(soal.id) }>
                        Hapus
                    </button>
                </div>
            </div>
            <div className="pilihan mt-4">
                <div className="p-1 border-2 border-gray-300 rounded flex my-1">
                    <Radio
                        type="radio"
                        id=""
                        name={`jwbn${soal.id}`}
                        checked={soal.jawaban==soal.pilihan[0] && true}
                        onChange={ () => "" }
                        onClick={ () => updateJawaban(0, index) }
                    />
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded w-full h-10 mr-1 my-auto px-2 focus:border-blue-300"
                        name="pil1"
                        value={soal.pilihan[0]}
                        onChange={ (e) => updatePilihan(e.target.value, 0, index) }
                    />
                </div>
                <div className="p-1 border-2 border-gray-300 rounded flex my-1">
                    <Radio
                        type="radio"
                        id=""
                        name={`jwbn${soal.id}`}
                        checked={soal.jawaban==soal.pilihan[1] && true}
                        onChange={ () => "" }
                        onClick={ () => updateJawaban(1, index) }
                    />
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded w-full h-10 mr-1 my-auto px-2 focus:border-blue-300"
                        name="pil2"
                        value={soal.pilihan[1]}
                        onChange={ (e) => updatePilihan(e.target.value, 1, index) }
                    />
                </div>
                <div className="p-1 border-2 border-gray-300 rounded flex my-1">
                    <Radio
                        type="radio"
                        id=""
                        name={`jwbn${soal.id}`}
                        checked={soal.jawaban==soal.pilihan[2] && true}
                        onChange={ () => "" }
                        onClick={ () => updateJawaban(2, index) }
                    />
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded w-full h-10 mr-1 my-auto px-2 focus:border-blue-300"
                        name="pil3"
                        value={soal.pilihan[2]}
                        onChange={ (e) => updatePilihan(e.target.value, 2, index) }
                    />
                </div>
                <div className="p-1 border-2 border-gray-300 rounded flex my-1">
                    <Radio
                        type="radio"
                        id=""
                        name={`jwbn${soal.id}`}
                        checked={soal.jawaban==soal.pilihan[3] && true}
                        onChange={ () => "" }
                        onClick={ () => updateJawaban(3, index) }
                    />
                    <input
                        type="text"
                        className="border-2 border-gray-300 rounded w-full h-10 mr-1 my-auto px-2 focus:border-blue-300"
                        name="pil4"
                        value={soal.pilihan[3]}
                        onChange={ (e) => updatePilihan(e.target.value, 3, index) }
                    />
                </div>
            </div>
            <div className="mt-4">
                <Textarea
                    label="Pembahasan"
                    value={soal.pembahasan}
                    onChange={ (e) => updatePembahasan(e.target.value, index) }
                />
            </div>
        </div>
    ))

    return(
        <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
            {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                <GuruNav />
            {/* </div> */}
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                {/* <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div> */}

            <div className="tabs text-xl text-custom-blue">
                    <Link
                        to={"/guru/kursus/"+kursus_id+"/subbab/"+subbab_id+"/detail"}
                        className="rounded-xl py-2"
                    >
                        <div className="float-left">
                            <FontAwesomeIcon
                                icon={faArrowCircleLeft}
                            ></FontAwesomeIcon>
                        </div>
                        <div className="float-left ml-4 text-custom-blue inline underline">
                            Kembali ke detail subbab
                        </div>
                        <div className="clear-both"></div>
                    </Link>
                </div>
            </div>
            <div className="content flex flex-col flex-wrap gap-10 w-full px-24 pb-10">
                <div className="text-3xl text-blue-900 font-semibold mb-4">
                    {course.nama}
                </div>
                <div className="flex">
                    <span className="text-2xl text-blue-900 font-semibold">Tambah Kuis</span>
                    <div className="ml-auto">
                        {/* <Link to="/guru/kursus/subbab/detail">
                            <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded mr-3 capitalize font-normal">
                                Back
                            </button>
                        </Link> */}
                        <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded mr-3 capitalize font-normal" onClick={submitForm}>
                            Simpan Kuis
                        </button>
                    </div>
                </div>
                {
                    displaySoalCard
                }
                <div className="w-full">
                    <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto" onClick={ addCount }>
                        Tambah Soal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TambahKuis
