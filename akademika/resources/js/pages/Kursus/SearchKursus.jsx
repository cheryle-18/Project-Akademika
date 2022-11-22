// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBookJournalWhills,
    faBookOpenReader,
    faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Navbar";
import { Link } from "react-router-dom";
// import searchLogo from "/akademika/resources/images/Search.png";
import searchLogo from "../../../images/Search.png";
import droplistLogo from "../../../images/Collapse_Arrow.png";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import CourseCard from "./CourseCard";


const SearchKursus = () => {
    const [listCourse, setListCourse] = useState([
        {
            nama: "Pengembangan Website Front-End Dasar 1",
            harga: 250000,
            deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
            durasi: 40
        },
        {
            nama: "Pengembangan Website Front-End Dasar 2",
            harga: 250000,
            deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
            durasi: 40
        },
        {
            nama: "Pengembangan Website Front-End Dasar 3",
            harga: 250000,
            deskripsi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, dolorem?",
            durasi: 40
        },
    ])

    return (
        <div className="min-h-screen w-screen">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <Nav></Nav>
            </div>
            <div className="bg-gray-100 overflow-auto h-77vh px-4 sm:px-14 md:px-20">
                <div className="bg-blue-100 px-7 py-7 w-full z-0 my-10 border-2 rounded-md">
                    <span className="text-2xl font-bold">Semua Kursus</span>
                </div>
                <div>
                    <form action="" method="post">
                        <div className="flex gap-x-4">
                            <div className="w-3/6">
                                <Input label="Cari Kursus"
                                    type="text"
                                    className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat focus:outline-none"
                                />
                            </div>
                            <div className="w-1/6">
                                <Select label="Kategori" className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none">
                                    <Option value="1">One</Option>
                                    <Option value="2">Two</Option>
                                    <Option value="3">Three</Option>
                                </Select>
                            </div>
                            <div className="w-1/6">
                                <Select label="Harga" className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none">
                                    <Option value="1">Tertinggi</Option>
                                    <Option value="2">Terendah</Option>
                                </Select>
                            </div>
                            <div className="w-1/6">
                                <Select label="Urutkan" className="form-select appearance-none px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat rounded-md focus:outline-none">
                                    <Option value="1">Asc</Option>
                                    <Option value="2">Desc</Option>
                                </Select>
                            </div>
                        </div>
                    </form>

                    <div class="mt-10 flex flex-wrap gap-10 w-full">
                        {
                            listCourse.map((n, index) => {
                                return(
                                    <CourseCard course={n} key={index} />
                                )
                            })
                        }
                    </div>

                    <div class="flex justify-center mt-36">
                        <nav aria-label="Page navigation example">
                            <ul class="flex list-style-none">
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                    >
                                        1
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                    >
                                        2
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                    >
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded bg-white text-gray-800 hover:text-white hover:bg-blue-900 focus:shadow-none"
                                        href="#"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchKursus;
