import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_akademika.png";

const Home = () => {
    return (
        <div>
            <div
                className="relative min-h-screen w-full z-0 px-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <Nav></Nav>
                <Link to="/admin/home">admin</Link>
                <div class="grid grid-cols-12 mt-20">
                    <div class="col-span-12 text-5xl text-center md:text-7xl lg:text-start lg:text-8xl lg:col-span-6">
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
                                className="py-2 px-4  bg-white hover:bg-blue-900 text-custom-blue transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-52"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 flex items-center justify-center">
                        <img
                            className="object-cover"
                            style={{ width: "500px" }}
                            src={Logo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 z-1 py-2 w-full bg-custom-blue text-center text-white font-normal">
                @ Akademika
            </div> */}
        </div>
    );
};

export default Home;
