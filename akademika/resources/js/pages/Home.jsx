import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_akademika.png";
import Logo2 from "../../images/logo_akademika2.png";
import Logo3 from "../../images/logo_akademika3.png";
import teknologiLogo from "../../images/Teknologi_Informasi.png";
import openBookImg from "../../images/openBook.png";
import eLearningImg from "../../images/eLearning.png";
import userDollarCircledImg from "../../images/userDollarCircled.png";
import clockLogo from "../../images/Clock.png";

const Home = () => {
    const classItem = "";

    const [jelajahs, setGuru] = useState([
        {
            title: "Teknologi Informasi",
            icon: faIcon.faCode,
        },
        {
            title: "Bisnis dan Ekonomi",
            icon: faIcon.faProjectDiagram,
        },
        {
            title: "Logika dan Matematika",
            icon: faIcon.faWaveSquare,
        },
        {
            title: "Bahasa dan Literatur",
            icon: faIcon.faBook,
        },
        {
            title: "Fisika dan Teknik",
            icon: faIcon.faGear,
        },
        {
            title: "Pengembangan Diri",
            icon: faIcon.faHeart,
        },
        {
            title: "Kesehatan",
            icon: faIcon.faStethoscope,
        },
        {
            title: "Kesenian",
            icon: faIcon.faPaintBrush,
        },
    ]);

    const [testimonis, setTestimoni] = useState([
        {
            msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugiat incidunt cumque reprehenderit accusantium dolorum voluptatibus aut mollitia quos, accusamus vel. Iusto ullam assumenda officia non amet, quam molestiae culpa?",
            img: "https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            nama: "Jane Doe",
            lulusan: "Lulusan Kursus Data Science & Statistika",
        },
        {
            msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugiat incidunt cumque reprehenderit accusantium dolorum voluptatibus aut mollitia quos, accusamus vel. Iusto ullam assumenda officia non amet, quam molestiae culpa?",
            img: "https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            nama: "Jane Doe",
            lulusan: "Lulusan Kursus Data Science & Statistika",
        },
        {
            msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugiat incidunt cumque reprehenderit accusantium dolorum voluptatibus aut mollitia quos, accusamus vel. Iusto ullam assumenda officia non amet, quam molestiae culpa?",
            img: "https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            nama: "Jane Doe",
            lulusan: "Lulusan Kursus Data Science & Statistika",
        },
    ]);

    const cetakJelajah = jelajahs.map((jelajah, index) => (
        <div className="col-span-12 md:col-span-6 flex justify-center items-center h-10 md:h-24 rounded-lg border-1 bg-custom-light-blue2 border-2 border-solid border-custom-blue hover:bg-custom-blue hover:text-white cursor-pointer text-2xl md:text-xl lg:text-2xl xl:text-3xl">
            <FontAwesomeIcon icon={jelajah.icon} className="mr-2" />
            <b>{jelajah.title}</b>
        </div>
    ));

    const cetakTestimoni = testimonis.map((testimoni, index) => (
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="bg-white rounded-lg minh-400px font-semibold p-10">
                <div className="text-left text-2xl text-custom-blue h-280px overflow-hidden">
                    "{testimoni.msg}"
                </div>
                <div className="flex justify-start items-center pt-10">
                    <div
                        className="rounded-full w-20 h-20 bg-cover overflow-hidden flex-shrink-0"
                        style={{ backgroundImage: `url(${testimoni.img})` }}
                    />
                    <div className="h-full flex flex-col justify-center items-start ml-5">
                        <div className="text-gray-400">{testimoni.nama}</div>
                        <div className="text-gray-400 text-sm">
                            {testimoni.lulusan}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="relative">
            <div
                className="static min-h-screen w-full z-0 px-4 sm:px-16 md:px-24"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <Nav></Nav>
                <Link to="/admin/home">admin</Link>
                <div></div>

                <div className="grid grid-cols-12 mt-0 md:mt-10 lg:mt-20">
                    <div className="col-span-12 text-5xl text-center lg:text-start lg:text-7xl xl:text-8xl lg:col-span-7">
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
                    <div className="col-span-12 px-10 lg:px-0 lg:col-span-5 flex items-center justify-center">
                        <img
                            className="object-cover"
                            style={{ width: "500px" }}
                            src={Logo}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center relative min-h-screen w-full z-0 bg-white px-4 sm:px-16 md:px-24">
                <div className="relative"></div>
                <div className="absolute -top-10 md:-top-20">
                    <div className="bg-white overflow-y-auto min-h-8 p-2 md:p-6 rounded-3xl drop-shadow-lg overflow-x-auto flex justify-center items-center flex-row">
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-3xl md:text-5xl lg:text-8xl"
                                icon={faIcon.faBook}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Biaya terjangkau
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-16 md:h-28 lg:h-32"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-3xl md:text-5xl lg:text-8xl"
                                icon={faIcon.faLaptopCode}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Biaya terjangkau
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-16 md:h-28 lg:h-32"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-3xl md:text-5xl lg:text-8xl"
                                icon={faIcon.faDollarSign}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Biaya terjangkau
                            </div>
                        </div>
                        {/* <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl lg:text-8xl"
                                icon={faBookReader}
                            />
                            <div className="text-custom-blue text-center pt-2 text-xs md:text-sm lg:text-xl">
                                Biaya terjangkau
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-12 lg:mt-52">
                    <div className="col-span-12 lg:col-span-6 flex justify-center items-center lg:block">
                        <img
                            src={Logo2}
                            alt=""
                            className="w-400px lg:w-500px"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:mt-10">
                        <div
                            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-custom-blue"
                            style={{
                                letterSpacing: "-1px",
                                fontFamily: "initial",
                            }}
                        >
                            Mengapa pilih Akademika?
                        </div>
                        <div className="mt-6 text-xl">
                            Akademika adalah platform kursus online pertama di
                            Indonesia yang menyediakan kursus dalam berbagai
                            kategori dengan biaya yang terjangkau dan fasilitas
                            tanya guru gratis.
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full xl:min-h-80vh z-0 px-4 sm:px-16 md:px-24 bg-white">
                <div className="w-full min-h-screen xl:h-90vh bg-custom-light-blue rounded-xl p-3 md:p-6 pr-0 lg:pl-20">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-5 xl:pt-16">
                            <div
                                className="text-custom-blue text-4xl lg:text-5xl font-semibold"
                                style={{
                                    letterSpacing: "-1px",
                                    fontFamily: "initial",
                                }}
                            >
                                Kursus Populer
                            </div>
                            <div className="mt-6 pr-6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Dolorem aut quidem quibusdam
                                asperiores, ipsam mollitia quae nesciunt esse
                                eum adipisci inventore aliquam commodi rem
                                quaerat reiciendis praesentium? Asperiores,
                                aspernatur porro.
                            </div>
                            <button
                                type="button"
                                className="mt-6 py-2 px-4 bg-custom-blue hover:bg-white hover:text-custom-blue text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full xl:w-52"
                            >
                                Lihat Semua Kursus
                            </button>
                        </div>
                        <div className="col-span-12 xl:col-span-7 relative lg:mt-10">
                            <div className="pr-6 absolute right-0">
                                <div className="float-right text-4xl hover:text-custom-blue text-gray-500 cursor-pointer">
                                    <FontAwesomeIcon
                                        icon={faIcon.faArrowCircleRight}
                                    ></FontAwesomeIcon>
                                </div>
                                <div className="float-right text-4xl hover:text-custom-blue text-gray-500 cursor-pointer mr-2">
                                    <FontAwesomeIcon
                                        icon={faIcon.faArrowCircleLeft}
                                    ></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="mt-10 xl:mt-20">
                                <div className="flex justify-center items-center">
                                    <div className="w-200px md:w-300px mx-1 shadow-lg">
                                        <div
                                            className="h-200px md:h-300px bg-cover bg-no-repeat bg-center rounded-t-lg"
                                            style={{
                                                backgroundImage:
                                                    "url('https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
                                            }}
                                            alt=""
                                        />
                                        <div className="bg-white rounded-b-lg p-4">
                                            <div className="font-semibold text-black ">
                                                Pengembangan Website Front-End
                                                Dasar
                                            </div>
                                            <div className="text-gray-500 pt-6">
                                                40 jam
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-200px md:w-300px mx-1 shadow-lg">
                                        <div
                                            className="h-200px md:h-300px bg-cover bg-no-repeat bg-center rounded-t-lg"
                                            style={{
                                                backgroundImage:
                                                    "url('https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
                                            }}
                                            alt=""
                                        />
                                        <div className="bg-white rounded-b-lg p-4">
                                            <div className="font-semibold text-black ">
                                                Pengembangan Website Front-End
                                                Dasar
                                            </div>
                                            <div className="text-gray-500 pt-6">
                                                40 jam
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="text-custom-blue text-5xl lg:text-start lg:text-6xl px-4 sm:px-16 md:px-24 mt-14 font-semibold"
                style={{
                    letterSpacing: "-1px",
                    fontFamily: "initial",
                }}
            >
                Jelajahi Akademika
            </div>
            <div className="px-4 sm:px-16 md:px-24 bg-white w-full min-h-screen mt-10">
                <div className="grid grid-cols-12 gap-2 md:gap-4 w-full h-full text-custom-blue">
                    {cetakJelajah}
                </div>
                <div className="text-right pt-1">
                    <Link
                        to={"/"}
                        className="text-custom-blue text-xl hover:text-blue-700"
                    >
                        <b>Lihat Semua Kursus</b>
                    </Link>
                </div>
            </div>
            <div className="relative min-h-screen w-full z-0 bg-custom-blue px-4 sm:px-16 md:px-24 pb-20">
                <div
                    className="text-white text-5xl pt-20"
                    style={{
                        letterSpacing: "-1px",
                        fontFamily: "initial",
                    }}
                >
                    Testimoni Siswa
                </div>
                <div className="grid grid-cols-12 gap-4 mt-10">
                    {cetakTestimoni}
                </div>
            </div>
            <div className="relative min-h-80vh w-full z-0 bg-white px-4 sm:px-16 md:px-24 pt-4 lg:pt-14 pb-20">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-6">
                        <img src={Logo3} alt="" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 h-full flex flex-col justify-center items-start">
                        <div
                            className="text-4xl sm:text-5xl xl:text-7xl text-custom-blue"
                            style={{
                                letterSpacing: "-1px",
                                fontFamily: "initial",
                            }}
                        >
                            Tunggu apa lagi?
                        </div>
                        <div className="pt-10 text-2xl">Belajar tanpa batas dengan Akademika</div>
                        <button
                            type="button"
                            className="mt-6 py-2 px-4 bg-custom-blue hover:bg-white hover:text-custom-blue text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full xl:w-32"
                        >
                            Buat Akun
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 z-1 py-2 w-full bg-custom-blue text-center text-white font-normal">
                @ Akademika
            </div>
        </div>
    );
};

export default Home;
