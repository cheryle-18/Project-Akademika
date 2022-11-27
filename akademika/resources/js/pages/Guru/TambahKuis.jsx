import { Input, Radio, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect, Fragment } from "react";
import { Tabs } from "@material-tailwind/react";
import GuruNav from "./Navbar";

const TambahKuis = () => {
    const [title, setTitle] = useState("proses");
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const ctr = [1]
    const [ctrSoal, setCtrSoal] = useState(1)

    const addCount = () => {
        setCtrSoal(ctrSoal+1)
        ctr.push(ctrSoal)
        console.log(ctrSoal)
    }

    useEffect(() => {
        
    }, [ctrSoal])

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
                    ctr.map((c, index) => (
                        <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col -mt-4">
                            <div className="flex gap-2">
                                <div className="w-2/3">
                                    <Input
                                        type="text"
                                        label="Pertanyaan"
                                        className=""
                                        name="pertanyaan"
                                    />
                                </div>
                                <div className="w-1/6 mr-2">
                                    <Input
                                        type="text"
                                        label="Nilai"
                                        className=""
                                        name="nilai"
                                    />
                                </div>
                                <div className="w-1/6">
                                    <button className="btn btn-sm h-9 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal w-full">
                                        Hapus
                                    </button>
                                </div>
                            </div>
                            <div className="pilihan mt-4">
                                <div className="border-2 border-gray-300 rounded flex my-1">
                                    <Radio
                                        type="radio"
                                        id=""
                                        name="jwbn"
                                        value="pil1"
                                        label="Pilihan 1"
                                    />
                                    <button className="btn btn-sm bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto my-auto mr-2">
                                        X
                                    </button>
                                </div>
                                <div className="border-2 border-gray-300 rounded flex my-1">
                                    <Radio
                                        type="radio"
                                        id=""
                                        name="jwbn"
                                        value="pil2"
                                        label="Pilihan 2"
                                    />
                                    <button className="btn btn-sm bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto my-auto mr-2">
                                        X
                                    </button>
                                </div>
                                <div className="border-2 border-gray-300 rounded flex my-1">
                                    <Radio
                                        type="radio"
                                        id=""
                                        name="jwbn"
                                        value="pil3"
                                        label="Pilihan 3"
                                    />
                                    <button className="btn btn-sm bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto my-auto mr-2">
                                        X
                                    </button>
                                </div>
                                <div className="border-2 border-gray-300 rounded flex my-1">
                                    <Radio
                                        type="radio"
                                        id=""
                                        name="jwbn"
                                        value="pil4"
                                        label="Pilihan 4"
                                    />
                                    <button className="btn btn-sm bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto my-auto mr-2">
                                        X
                                    </button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Textarea
                                    label="Pembahasan"
                                />
                            </div>
                        </div>
                    ))
                }
                <div className="w-full">
                    <button className="btn btn-sm h-10 px-4 bg-blue-900 hover:bg-blue-700 text-white rounded capitalize font-normal ml-auto" onClick={(e) =>addCount()}>
                        Tambah Soal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TambahKuis