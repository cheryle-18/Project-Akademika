import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Input, Radio } from "@material-tailwind/react";

const Nav = () => {
    const [isDaftar, setDaftar] = useState(true);

    const changeDaftarTrue = () => {
        setDaftar(true);
    };

    const changeDaftarFalse = () => {
        setDaftar(false);
    };

    const cetakDaftar = (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">
                Daftar Akademika
            </h3>
            <p className="py-2 mt-2">
                <Input
                    type="text"
                    label="Nama Lengkap"
                    class="input input-bordered w-full border-2 border-gray-500 rounded-md"
                />
            </p>
            <p className="py-2">
                <Input
                    type="text"
                    label="Email"
                    class="input input-bordered w-full border-2 border-gray-500 rounded-md"
                />
            </p>
            <p className="py-2">
                <Input
                    type="text"
                    label="Password"
                    class="input input-bordered w-full border-2 border-gray-500 rounded-md"
                />
            </p>
            <p className="py-2">
                <Input
                    type="text"
                    label="Konfirmasi Password"
                    class="input input-bordered w-full border-2 border-gray-500 rounded-md"
                />
            </p>
            <div className="py-2 flex">
                <span className="mr-2 my-auto">Daftar Sebagai:</span>
                <Radio
                    id="guru"
                    name="type"
                    value="guru"
                    label="Guru"
                />
                <Radio
                    type="radio"
                    id="siswa"
                    name="type"
                    value="siswa"
                    label="Siswa"
                />
            </div>
            <button className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md">
                Buat Akun
            </button>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <div>Sudah punya akun?&nbsp;</div>
                {/* <label for="daftar">Masuk Sekarang</label> */}
                <div
                    onClick={changeDaftarFalse}
                    className="font-semibold underline cursor-pointer"
                >
                    Masuk Sekarang
                </div>
                {/* <label for="masuk" className="font-semibold underline">
                            Masuk Sekarang
                        </label> */}
            </div>
        </div>
    );
    const cetakMasuk = (
        <div>
            <h3 className="text-3xl font-bold text-custom-blue">Masuk</h3>
            <p className="py-4">
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                />
            </p>
            <p className="py-2">
                <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full border-2 border-gray-500 rounded-md placeholder-gray-700"
                />
            </p>
            <div className="w-full">
                <div className="text-right text-custom-blue">Lupa Password</div>
            </div>
            <div className="w-full py-2 mt-4 bg-custom-blue text-white text-center rounded-md">
                Buat Akun
            </div>
            <div className="w-full mt-4 flex justify-center text-custom-blue">
                <div>Belum punya akun?&nbsp;</div>
                <div
                    onClick={changeDaftarTrue}
                    className="font-semibold underline cursor-pointer"
                >
                    Daftar Sekarang
                </div>
                {/* <label for="daftar" className="font-semibold underline">
                            Daftar Sekarang
                        </label> */}
            </div>
        </div>
    );

    return (
        <div className="bg-transparent flex w-full">
            <div className="my-5 w-full">
                <div className="hidden md:block">
                    <div className="text-3xl font-semibold text-white float-left">
                        Akademika
                    </div>
                    <label
                        for="masukDaftar"
                        onClick={changeDaftarTrue}
                        className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right"
                    >
                        Daftar
                    </label>
                    <label
                        for="masukDaftar"
                        onClick={changeDaftarFalse}
                        className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white float-right mr-5"
                    >
                        Masuk
                    </label>
                    <div className="pt-1.5 text-white float-right mr-5 cursor-pointer">
                        Cari Kursus
                    </div>
                </div>
                <div className="md:hidden w-full">
                    <div className="text-3xl font-semibold text-white text-center">
                        Akademika
                    </div>
                    <div className="flex justify-center align-center">
                        <div className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">

                            <Link to="/kursus/search">Cari Kursus</Link>
                        </div>
                    </div>
                    <label for="masukDaftar" onClick={changeDaftarFalse} className="flex justify-center align-center">
                        <div className="cursor-pointer border-2 border-white bg-transparent text-white py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Masuk
                        </div>
                    </label>
                    <label for="masukDaftar" onClick={changeDaftarTrue} className="flex justify-center align-center">
                        <div className="cursor-pointer border-2 border-white text-custom-blue py-1 px-8 rounded-md hover:bg-custom-blue hover:text-white bg-white w-full sm:w-96 text-center mt-2">
                            Daftar
                        </div>
                    </label>
                </div>
            </div>

            <div className="z-10">
                <input type="checkbox" id="masukDaftar" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box relative py-10 px-8">
                        <label
                            for="masukDaftar"
                            class="btn btn-sm absolute bg-transparent text-gray-500 border border-none hover:bg-transparent hover:border-none right-2 top-2 font-bold text-xl"
                        >
                            ✕
                        </label>
                        {isDaftar && cetakDaftar}
                        {!isDaftar && cetakMasuk}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
