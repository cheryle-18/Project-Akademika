import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-transparent flex w-full">
            <div className="my-5 mx-14 w-full">
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        Akademika
                    </div>
                    <label
                        for="daftar"
                        className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right"
                    >
                        Daftar
                    </label>
                    <label
                        for="masuk"
                        className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right mr-5"
                    >
                        Masuk
                    </label>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        Cari Kursus
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="text-3xl font-semibold text-white float-left">
                        Akademika
                    </div>
                    <div className="text-3xl font-semibold text-white float-right mr-5">
                        Daftar
                    </div>
                    <div className="text-3xl font-semibold text-white float-right mr-5">
                        Masuk
                    </div>
                    <div className="text-3xl font-semibold text-white float-right mr-5">
                        Cari Kursus
                    </div>
                </div>
            </div>

            <input type="checkbox"id="daftar" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative py-10 px-8">
                    <label
                        for="daftar"
                        class="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                    >
                        ✕
                    </label>
                    <h3 class="text-3xl font-bold text-custom-blue">
                        Daftar Akademika
                    </h3>
                    <p class="py-4">
                        <input
                            type="text"
                            placeholder="Nama Lengkap"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <p class="py-2">
                        <input
                            type="text"
                            placeholder="Email"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <p class="py-2">
                        <input
                            type="text"
                            placeholder="Password"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <p class="py-2">
                        <input
                            type="text"
                            placeholder="Konfirmasi Password"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <div className="pt-2">
                        Daftar Sebagai:&nbsp;&nbsp;&nbsp;  
                        <input
                            type="radio"
                            id="guru"
                            name="fav_language"
                            value="guru"
                        />
                        <label for="guru">&nbsp;Guru</label>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                            type="radio"
                            id="siswa"
                            name="fav_language"
                            value="siswa"
                        />
                        <label for="siswa">&nbsp;Siswa</label>
                    </div>
                    <div className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md">
                        Buat Akun
                    </div>
                    <div className="w-full mt-4 flex justify-center text-custom-blue">
                        <div>Sudah punya akun?&nbsp;</div>
                        {/* <label for="daftar">Masuk Sekarang</label> */}
                        <label for="masuk" className="font-semibold underline">
                            Masuk Sekarang
                        </label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="masuk" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative py-10 px-8">
                    <label
                        for="masuk"
                        class="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                    >
                        ✕
                    </label>
                    <h3 class="text-3xl font-bold text-custom-blue">Masuk</h3>
                    <p class="py-4">
                        <input
                            type="text"
                            placeholder="Email"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <p class="py-2">
                        <input
                            type="text"
                            placeholder="Password"
                            class="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                        />
                    </p>
                    <div className="w-full">
                        <div className="text-right text-custom-blue">
                            Lupa Password
                        </div>
                    </div>
                    <div className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md">
                        Buat Akun
                    </div>
                    <div className="w-full mt-4 flex justify-center text-custom-blue">
                        <div>Belum punya akun?&nbsp;</div>
                        <label for="daftar" className="font-semibold underline">
                            Daftar Sekarang
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
