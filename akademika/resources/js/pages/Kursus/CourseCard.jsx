import React, { useState, useEffect } from "react";
import clockLogo from "../../../images/Clock.png";

const CourseCard = () => {
    const [course, setCourse] = useState({
        nama: "Pengembangan Website Front-End Dasar",
        harga: 250000,
        deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
        durasi: 40
    })

    return(
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-1/2 h-auto">
            <img
                className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="../card_pic.png"
                alt=""
            />
            <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-semibold mb-2">
                    {course.nama}
                </h5>
                <p className="text-gray-900 text-base mb-4">
                    Rp {course.harga}
                </p>
                <p className="text-gray-600 text-base mb-5">
                    {course.deskripsi}
                </p>

                <div className="text-gray-600 text-base flex">
                    <span className="my-auto mr-auto">
                        <img
                            class=" inline-block mr-2"
                            style={{ width: "25px" }}
                            src={clockLogo}
                            alt=""
                        />
                        {course.durasi} jam
                    </span>
                    <span>
                        <a href="" className="ml-auto">
                            <button
                                type="button"
                                class="inline-block ml-auto px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Detail
                            </button>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;
