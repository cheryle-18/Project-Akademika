import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faBookJournalWhills,
    faBookOpenReader,
    faBookReader,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_akademika.png";

const Home = () => {
    return (
        <div>
            <div
                className="relative min-h-screen w-full z-0 px-4 sm:px-16 md:px-24 lg:px-32"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <Nav></Nav>
                <Link to="/admin/home">admin</Link>
                <div class="grid grid-cols-12 mt-10 lg:mt-20">
                    <div class="col-span-12 text-5xl text-center lg:text-start lg:text-7xl xl:text-8xl lg:col-span-7">
                        <div className="relative">
                            <div
                                className="text-white font-semibold"
                                style={{
                                    letterSpacing: "-1px",
                                    fontFamily: "initial",
                                }}
                            >
                                Belajar tanpa batas
                            </div>
                            <button
                                type="button"
                                className="my-10 lg:my-0 py-2 px-4  bg-white hover:bg-blue-900 hover:text-white text-custom-blue transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full sm:w-96 lg:w-52"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                    <div class="col-span-12 px-10 lg:px-0 lg:col-span-5 flex items-center justify-center">
                        <img
                            className="object-cover"
                            style={{ width: "500px" }}
                            src={Logo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center align-center relative min-h-screen w-full z-0 px-32 bg-white">
                <div className="relative"></div>
                <div className="absolute -top-10 md:-top-14 lg:-top-20">
                    <div className="bg-white overflow-y-auto min-h-8 p-2 md:p-6 rounded-3xl drop-shadow-lg overflow-x-auto flex justify-center align-center flex-row">
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl lg:text-8xl"
                                icon={faBookReader}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                50 + Kursus
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-auto"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl lg:text-8xl"
                                icon={faBookReader}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Jam belajar fleksibel
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-auto"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl lg:text-8xl"
                                icon={faBookReader}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Biaya terjangkau
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 mt-60">
                    <div class="col-span-6"></div>
                    <div class="col-span-6">
                        <div
                            className=" lg:text-7xl font-semibold text-custom-blue"
                            style={{
                                letterSpacing: "-1px",
                                fontFamily: "initial",
                            }}
                        >
                            Mengapa pilih Akademika?
                        </div>
                        <div className="mt-6 text-xl">
                            Akademika adalah platform kursus online pertama di Indonesia yang menyediakan kursus dalam berbagai kategori dengan biaya yang terjangkau dan fasilitas tanya guru gratis.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 z-1 py-2 w-full bg-custom-blue text-center text-white font-normal">
                @ Akademika
            </div> */}
            <div className="flex relative min-h-screen w-full z-0 px-32 bg-white">
            </div>
        </div>

    );
};

export default Home;
