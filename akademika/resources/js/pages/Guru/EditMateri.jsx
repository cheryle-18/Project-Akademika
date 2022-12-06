import { Input, Textarea } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import GuruNav from "./Navbar"
// import Tabs from "./Tabs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
    faArrowCircleLeft,
    faArrowLeft,
    faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

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
        });
    }

    return(
        <div className="min-h-screen h-full w-full overflow-x-hidden flex flex-col bg-gray-100">
            {/* <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none"> */}
                <GuruNav />
            {/* </div> */}
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                {/* <div className="tabs w-auto"> */}
                    {/* <Tabs titleParam={title}></Tabs> */}

                {/* </div> */}
                <div className="tabs text-xl text-custom-blue">
                    <Link
                        to="/guru/kursus/detail"
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
            <div className="content flex flex-col flex-wrap w-full px-24 pb-16">
                <div className="text-3xl text-blue-900 font-semibold mb-6">
                    {course}
                </div>
                <div className="text-2xl text-blue-900 font-semibold mb-2">
                    Detail Materi
                </div>

                    <div className="mt-5 text-custom-blue font-semibold text-xl">
                        Preview Video
                    </div>
                    <div className="w-full h-70vh bg-gray-500 rounded-xl mt-2">
                        <iframe
                            src="https://drive.google.com/file/d/1XMjIxq7QnjFn2HeZv7wq7zNyUphHCYJw/preview"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                        ></iframe>
                        {/* <video controls width="100%">
                        <source src={src} type="video/mp4" />
                        Sorry, your browser doesn't support embedded videos.
                        </video> */}
                    </div>

                    <div>
                        <div className="float-right">
                            <button
                                className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                name=""
                            >
                                <FontAwesomeIcon
                                    icon={faCloudUploadAlt}
                                    className="mr-2"
                                ></FontAwesomeIcon>
                                Unduh
                            </button>
                        </div>
                        <div className="clear-both"></div>
                    </div>

                    <div className="mt-6 text-custom-blue font-semibold text-xl">
                    Preview Bacaan
                    </div>
                    <p className="indent-14 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, culpa. Eum sapiente dolores labore ipsa repellendus velit quae optio molestiae tenetur. Non possimus voluptas repudiandae laborum voluptate modi sint quis quam at. In temporibus deserunt ad molestias mollitia odit, iusto dolorum, quis reprehenderit quisquam tempore ullam nobis sint, esse nulla?</p>

                    <p className="indent-14 mt-6"></p>


                <div className="text-2xl text-blue-900 font-semibold mb-6 mt-7">
                    Edit Materi
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
                    <button className="btn w-full mt-3 text-base capitalize bg-blue-900 text-white hover:bg-blue-700 font-normal" name="btnEdit"
                    onClick={submitForm}
                    >Edit Materi</button>
                </div>
            </div>
        </div>
    )
}

export default EditMateri
