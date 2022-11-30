import { Input, Radio, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import { useId } from "react";
import GuruNav from "./Navbar";
import Tabs from "./Tabs";

const TambahKuis = () => {
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [ctr, setCtr] = useState([1])
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
        // console.log(ctr)
    }

    const handleDelete = (deleteId) => {
        console.log(deleteId)
        const newListSoal = listSoal.filter(e=>e.id!=deleteId)
        console.log(newListSoal)
        setListSoal(newListSoal)

        setCtrSoal(ctrSoal-1)
    }

    const updatePertanyaan = (pertanyaan, idx) => {
        let soal = listSoal[idx]
        soal.pertanyaan = pertanyaan

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)

        console.log(listSoal)
    }

    const updateNilai = (nilai, idx) => {
        let soal = listSoal[idx]
        soal.nilai = nilai

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)

        console.log(listSoal)
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

        console.log(listSoal)
    }

    const updateJawaban = (idxJwbn, idx) => {
        let soal = listSoal[idx]
        soal.jawaban = soal.pilihan[idxJwbn]

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)

        console.log(listSoal)
    }

    const updatePembahasan = (pembahasan, idx) => {
        let soal = listSoal[idx]
        soal.pembahasan = pembahasan

        const newListSoal = [...listSoal]
        newListSoal[idx] = soal
        setListSoal(newListSoal)

        console.log(listSoal)
    }

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
                        // { ...soal.jawaban==soal.pilihan[0] && checked }
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
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div>
            </div>
            <div className="content flex flex-col flex-wrap gap-10 w-full px-24 pb-10">
                <div className="text-3xl text-blue-900 font-semibold mb-4">
                    {course}
                </div>
                <div className="flex">
                    <span className="text-2xl text-blue-900 font-semibold">Tambah Kuis</span>
                    <button className="btn btn-sm h-10 bg-blue-900 hover:bg-blue-700 text-white rounded ml-auto mr-3 capitalize font-normal">
                        Simpan Kuis
                    </button>
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
