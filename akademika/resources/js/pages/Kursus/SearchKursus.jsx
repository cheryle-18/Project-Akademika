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
import clockLogo from "../../../images/Clock.png";

const SearchKursus = () => {
    return (
        <div className="">
            <div class="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <Nav></Nav>
            </div>
            <div className="bg-white overflow-y-auto h-77vh px-4 sm:px-16 md:px-24 overflow-x-auto ">
                <div className="bg-indigo-100 px-7 py-7 w-full z-0 mt-10 mb-10 border-2 rounded-md">
                    <b>Semua Kursus</b>
                </div>
                <div>
                    <form action="" method="post">
                        <div className="">
                            <input
                                type="text"
                                placeholder="Cari Kursus"
                                class="input input-bordered w-2/6 border-2 border-gray-500 rounded-md placeholder-gray-700"
                            />
                            {/* <img
                            className=""
                            style={{ width: "30px" }}
                            src={searchLogo}
                            alt=""
                        /> */}

                            <select
                                class="form-select appearance-none
                            ml-5
                            w-1/5
                            px-4
                            py-2
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border-2 border-gray-500
                            rounded-md
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                            >
                                <option selected>Kategori</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <select
                                class="form-select appearance-none
                            ml-5
                            w-1/5
                            px-4
                            py-2
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border-2 border-gray-500
                            rounded-md
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                            >
                                <option selected>Harga</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <select
                                class="form-select appearance-none
                            ml-5
                            w-1/5
                            px-4
                            py-2
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border-2 border-gray-500
                            rounded-md
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                            >
                                <option selected>Urutan</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </form>

                    <div class=" mt-5 grid grid-cols-12 gap-5">
                        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg col-span-6 flex justify-center">
                            <img
                                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                alt=""
                            />
                            <div class="p-6 flex flex-col justify-start">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">
                                    Pengembangan Website Front-End Dasar
                                </h5>
                                <p class="text-gray-900 text-base mb-4">
                                    IDR 250.000
                                </p>
                                <p class="text-gray-600 text-base mb-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, dolorem?
                                </p>

                                <p class="text-gray-600 text-base mb-5">
                                    <img
                                        class=" inline-block mr-2"
                                        style={{ width: "25px" }}
                                        src={clockLogo}
                                        alt=""
                                    />
                                    40 jam
                                    <a href="">
                                        <button
                                            type="button"
                                            class="inline-block  ml-36 px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Detail
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg col-span-6 flex justify-center">
                            <img
                                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                alt=""
                            />
                            <div class="p-6 flex flex-col justify-start">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">
                                    Pengembangan Website Front-End Dasar
                                </h5>
                                <p class="text-gray-900 text-base mb-4">
                                    IDR 250.000
                                </p>
                                <p class="text-gray-600 text-base mb-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, dolorem?
                                </p>

                                <p class="text-gray-600 text-base mb-5">
                                    <img
                                        class=" inline-block mr-2"
                                        style={{ width: "25px" }}
                                        src={clockLogo}
                                        alt=""
                                    />
                                    40 jam
                                    <a href="">
                                        <button
                                            type="button"
                                            class="inline-block  ml-36 px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Detail
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg col-span-6 justify-center">
                            <img
                                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                                alt=""
                            />
                            <div class="p-6 flex flex-col justify-start">
                                <h5 class="text-gray-900 text-xl font-medium mb-2">
                                    Pengembangan Website Front-End Dasar
                                </h5>
                                <p class="text-gray-900 text-base mb-4">
                                    IDR 250.000
                                </p>
                                <p class="text-gray-600 text-base mb-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi, dolorem?
                                </p>

                                <p class="text-gray-600 text-base mb-5">
                                    <img
                                        class=" inline-block mr-2"
                                        style={{ width: "25px" }}
                                        src={clockLogo}
                                        alt=""
                                    />
                                    40 jam
                                    <a href="">
                                        <button
                                            type="button"
                                            class="inline-block  ml-36 px-6 py-2.5 bg-custom-blue text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                        >
                                            Detail
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center mt-36">
                        <nav aria-label="Page navigation example">
                            <ul class="flex list-style-none">
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
                                        href="#"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#"
                                    >
                                        1
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#"
                                    >
                                        2
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                                        href="#"
                                    >
                                        3
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a
                                        class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
