import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";
import AuthUser from "../../components/AuthUser";

const EditMateri = () => {
    const [title, setTitle] = useState("proses")
    const [course, setCourse] = useState("Pengembangan Website Front-End Dasar")
    const [bacaan, setBacaan] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim ipsa pariatur, accusantium eaque obcaecati consequuntur dignissimos minima dolor quos itaque dolores qui. Maxime assumenda, possimus ratione ad commodi mollitia libero eaque quod itaque accusamus sit in doloribus molestias beatae hic. Officia, quia. Aliquid minus aliquam quae earum illo vero!")
    const [video, setVideo] = useState()
    const {http,user} = AuthUser();

    const onChangeVideoHandler = (e) => {
        setVideo(e.target.files[0])
    }

    const submitForm = () => {
        const formData = new FormData();
        formData.append('video', video);
        formData.append('subbab_id',22)
        formData.append('penjelasan',penjelasan)

        http.post("/guru/kursus/materi/tambah",formData).then((res) => {
            let data = res.data;
            console.log(data);
        });
    }

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
            <div className="content flex flex-col flex-wrap w-full px-24 pb-16">
                <div className="text-3xl text-blue-900 font-semibold mb-4">
                    {course}
                </div>
                <div className="text-2xl text-blue-900 font-semibold mb-6">
                    Tambah Materi
                </div>
                <div className="w-full h-auto bg-white rounded-lg p-4 flex flex-col">
                    <table>
                        <tr className="p-2">
                            <td className="py-4 align-top">Bacaan</td>
                            <td className="py-2">
                                <Textarea
                                    className="w-full h-48"
                                    name="bacaan"
                                    value={bacaan}
                                    onChange={(e) =>setBacaan(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr className="p-2">
                            <td className="py-4 align-top">Video</td>
                            <td className="flex flex-col py-2">
                                <label class="block">
                                    <span class="sr-only">Choose File</span>
                                    <input type="file" name="video" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-normal file:bg-blue-900 file:text-white hover:file:bg-blue-700"
                                     onChange={onChangeVideoHandler}/>
                                </label>
                                <div className="text-gray-500 text-sm mt-1">*upload video penjelasan materi</div>
                            </td>
                        </tr>
                    </table>
                    <button className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal" name="btnTambah"
                    onClick={submitForm}
                    >Tambah</button>
                </div>
            </div>
        </div>
    )
}

export default EditMateri