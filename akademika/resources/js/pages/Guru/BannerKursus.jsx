import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import * as faIcon from "@fortawesome/free-solid-svg-icons";

const BannerKursus = ({courseParam}) => {
    const [course, setCourse] = useState(courseParam)

    return(
        <div className="banner">
            <div
                className="static h-96 w-full z-0 px-4 sm:px-16 md:px-16 py-14 flex"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <div className="w-1/4 p-3 px-0 h-full flex flex-col">
                    <img
                        className="w-48 h-48 mb-4 mx-auto object-cover md:rounded-none"
                        src="/card_pic.png"
                        alt=""
                    />
                    {/* <button className="btn w-48 mx-auto rounded bg-white text-blue-900 border-0 hover:bg-gray-100 capitalize font-medium text-base">
                        Daftar Sekarang
                    </button> */}
                </div>
                <div className="w-3/4 flex flex-col text-white">
                    <div className="font-bold text-4xl mb-3">
                        {course.nama}
                    </div>
                    <div className="text-xl mb-3 font-semibold">
                        {course.kategori}
                    </div>
                    <div className="text-lg">{course.deskripsi}</div>
                    <div className="mt-auto flex text-xl font-semibold">
                        <span>IDR {course.harga}</span>
                        <span className="ml-8">
                            <FontAwesomeIcon
                                icon={faClock}
                                className="text-white mr-2"
                            />
                            {course.durasi} jam
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerKursus
