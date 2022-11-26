import {
    faCloudUpload,
    faCloudUploadAlt,
    faUpload,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";
import { Link } from "react-router-dom";

const Materi = () => {
    const [subbab, setSubbab] = useState({
        judul: "HTML",
        deskripsi:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    });

    const [kuiss, setKuis] = useState([
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
    ]);

    const cetakKuis = kuiss.map((kuis, index) => (
        <KuisCard kuis={kuis} idx={index + 1}></KuisCard>
    ));

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                <div className="drawer-side bg-custom-blue overflow-y-auto flex-none">
                    <Nav></Nav>
                </div>
                <div className="banner">
                    <Banner subbab={subbab}></Banner>
                </div>
                <div className="px-4 sm:px-16 md:px-24">
                    <div className="mt-10 text-custom-blue font-semibold text-xl">
                        Video Pembelajaran
                    </div>
                    <div className="w-full min-h-70vh bg-gray-500 rounded-xl mt-4"></div>
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
                        Bacaan
                    </div>
                    <p className="indent-14 mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid dicta ducimus saepe, quia quo, numquam
                        obcaecati voluptatibus cumque nostrum vitae hic dolorem
                        aut nesciunt natus. Nesciunt quis asperiores quo
                        recusandae? Aut aperiam, vitae eaque excepturi
                        exercitationem eligendi consequatur unde a porro sit
                        dolore et, quaerat optio debitis cumque voluptas, illo
                        asperiores nostrum recusandae odit nisi molestias at
                        alias ut? Excepturi? Eligendi placeat adipisci officia
                        sed corporis, non debitis perspiciatis quod culpa quidem
                        fugit quasi rem doloribus suscipit itaque fugiat
                        voluptates? Dolore ipsum aperiam blanditiis placeat,
                        nostrum pariatur consectetur similique. Magnam? Quaerat
                        quisquam commodi libero quibusdam possimus? Delectus
                        eos, voluptatibus omnis praesentium consectetur quae
                        labore nulla a incidunt, deleniti quaerat vel molestiae
                        ducimus nesciunt consequatur veritatis, consequuntur hic
                        exercitationem maiores reprehenderit? Neque numquam
                        earum modi labore tempora aperiam hic omnis facilis! Ad,
                        ut consequuntur dolore mollitia maiores quis, culpa
                        molestiae voluptatem enim expedita laboriosam veniam
                        voluptatum fuga delectus! Quas, porro a!
                    </p>
                    <p className="indent-14 mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid dicta ducimus saepe, quia quo, numquam
                        obcaecati voluptatibus cumque nostrum vitae hic dolorem
                        aut nesciunt natus. Nesciunt quis asperiores quo
                        recusandae? Aut aperiam, vitae eaque excepturi
                        exercitationem eligendi consequatur unde a porro sit
                        dolore et, quaerat optio debitis cumque voluptas, illo
                        asperiores nostrum recusandae odit nisi molestias at
                        alias ut? Excepturi? Eligendi placeat adipisci officia
                        sed corporis, non debitis perspiciatis quod culpa quidem
                        fugit quasi rem doloribus suscipit itaque fugiat
                        voluptates? Dolore ipsum aperiam blanditiis placeat,
                        nostrum pariatur consectetur similique. Magnam? Quaerat
                        quisquam commodi libero quibusdam possimus? Delectus
                        eos, voluptatibus omnis praesentium consectetur quae
                        labore nulla a incidunt, deleniti quaerat vel molestiae
                        ducimus nesciunt consequatur veritatis, consequuntur hic
                        exercitationem maiores reprehenderit? Neque numquam
                        earum modi labore tempora aperiam hic omnis facilis! Ad,
                        ut consequuntur dolore mollitia maiores quis, culpa
                        molestiae voluptatem enim expedita laboriosam veniam
                        voluptatum fuga delectus! Quas, porro a!
                    </p>
                    <p className="indent-14 mt-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Aliquid dicta ducimus saepe, quia quo, numquam
                        obcaecati voluptatibus cumque nostrum vitae hic dolorem
                        aut nesciunt natus. Nesciunt quis asperiores quo
                        recusandae? Aut aperiam, vitae eaque excepturi
                        exercitationem eligendi consequatur unde a porro sit
                        dolore et, quaerat optio debitis cumque voluptas, illo
                        asperiores nostrum recusandae odit nisi molestias at
                        alias ut? Excepturi? Eligendi placeat adipisci officia
                        sed corporis, non debitis perspiciatis quod culpa quidem
                        fugit quasi rem doloribus suscipit itaque fugiat
                        voluptates? Dolore ipsum aperiam blanditiis placeat,
                        nostrum pariatur consectetur similique. Magnam? Quaerat
                        quisquam commodi libero quibusdam possimus? Delectus
                        eos, voluptatibus omnis praesentium consectetur quae
                        labore nulla a incidunt, deleniti quaerat vel molestiae
                        ducimus nesciunt consequatur veritatis, consequuntur hic
                        exercitationem maiores reprehenderit? Neque numquam
                        earum modi labore tempora aperiam hic omnis facilis! Ad,
                        ut consequuntur dolore mollitia maiores quis, culpa
                        molestiae voluptatem enim expedita laboriosam veniam
                        voluptatum fuga delectus! Quas, porro a!
                    </p>
                    <div className="mt-10 mb-20">
                        <div className="float-left">
                            <button
                                className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                name=""
                            >
                                &lt; &nbsp;&nbsp; Kembali
                            </button>
                        </div>
                        <div className="float-right">
                            <Link to="/siswa/kursus/kuis">
                                <button
                                    className="btn w-full mt-3 text-base capitalize bg-custom-blue text-white hover:bg-blue-700 font-normal rounded-md py-2"
                                    name=""
                                >
                                    Kerjakan Kuis &nbsp;&nbsp; &gt;
                                </button>
                            </Link>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materi;
