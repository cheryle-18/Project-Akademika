import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons"
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_akademika.png";
import Logo2 from "../../images/logo_akademika2.png";
import Logo3 from "../../images/logo_akademika3.png";
import AuthUser from "../components/AuthUser";
import SiswaNav from "./Siswa/Navbar";
import GuruNav from "./Guru/Navbar";
import cardPic from "../../images/card_pic.png"

const Home = () => {
    const classItem = "";
    const { http, user, token } = AuthUser();
    const [kursusPopuler, setKursusPopuler] = useState([])

    const fetchKursusPopuler = () => {
        http.get("get/kursusPopuler").then((res) => {
            console.log(res.data.kursus)
            setKursusPopuler(res.data.kursus)
        });
    };

    useEffect(() => {
        fetchKursusPopuler()
    }, [])

    const [links, setLink] = useState([
        {
            link: "/admin/home",
        },
        {
            link: "/guru/kursus/diterbitkan",
        },
        {
            link: "/guru/kursus/diproses",
        },
        {
            link: "/guru/kursus/tambah",
        },
        {
            link: "/guru/kursus/detail",
        },
        {
            link: "/guru/report/siswa",
        },
        {
            link: "/kursus/search",
        },
        {
            link: "/kursus/detail",
        },
        {
            link: "/siswa/kursus/pengumuman",
        },
        {
            link: "/siswa/kursus/detail",
        },
        {
            link: "/siswa/kursus/kuis",
        },
    ]);

    const cetakLink = links.map((link, index) => (
        <div>
            <Link to={link.link}>{link.link}</Link>
            <div className="clear-both"></div>
        </div>
    ));

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
            msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit recusandae nobis modi! Odio dolorem quas fuga fugiat, aliquam cum pariatur ducimus quia eligendi, quam magni? Nemo labore nesciunt minima expedita facilis numquam tempora perspiciatis maiores iste, quam sit ut voluptas laudantium.",
            img: "https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            nama: "Emily Doe",
            lulusan: "Lulusan Kursus Analisa Bisnis",
        },
        {
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta eum accusantium consequatur, non id dolores pariatur nihil similique optio et cum consequuntur minima laudantium aliquam? Voluptas rerum commodi adipisci amet quaerat quo laudantium eius vero neque, quibusdam tenetur necessitatibus.",
            img: "https://s3-alpha-sig.figma.com/img/83b1/31fd/9e1ac65719d0990ca684d4cac776f5a4?Expires=1669593600&Signature=FKaqB0T66mN3OCggvalALSRAiT8~~8Z581XjDc6Kd4nahQyg5AorWoQRy1JOXtG3MvWju3WEMzRAnRESsXI9KSRhsPmIXByLynSS9NQqxHBWTAJnWYfdaJgGe4WSitRr1dMRle0VzDZ4MZDHvNe4EgTkGka9A8n0YsLfMnJ2WWX-kwi1htzXQDRrEUf8-PqnnbxieSphRRwNoBYnEr6U04WFy5ydD3sF32UFPtF7P8DVoBfI-hPO7~9D4I1Tk28NjmhHpGfwk-98nmiPPSFB0U1ZBsaWVFMByVbFT5m9EFdm0EBprvuz0UJ~BxABYD-Fz3LAJxl~JoQFH2iXY6x0Hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            nama: "Jane Doe",
            lulusan: "Lulusan Kursus Pengembangan Website Front-End",
        },
    ]);

    const cetakJelajah = jelajahs.map((jelajah, index) => (
        <div className="col-span-12 md:col-span-6 flex justify-center items-center h-20 rounded-lg border-1 bg-custom-light-blue2 border-2 border-solid border-custom-blue hover:bg-custom-blue hover:text-white cursor-pointer text-xl">
            <FontAwesomeIcon icon={jelajah.icon} className="mr-4" />
            <b>{jelajah.title}</b>
        </div>
    ));

    const cetakTestimoni = testimonis.map((testimoni, index) => (
        <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="bg-white rounded-lg minh-400px font-medium p-10">
                <div className="text-left text-xl text-custom-blue h-280px overflow-hidden">
                    "{testimoni.msg}"
                </div>
                <div className="flex justify-start items-center pt-10">
                    <div
                        className="rounded-full w-20 h-20 bg-cover overflow-hidden flex-shrink-0"
                        style={{ backgroundImage: `url(${testimoni.img})` }}
                    />
                    <div className="h-full flex flex-col justify-center items-start ml-5">
                        <div className="text-blue-900 font-semibold">{testimoni.nama}</div>
                        <div className="text-black text-sm">
                            {testimoni.lulusan}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="relative">
            <div
                className="static min-h-screen w-full z-0 px-4 sm:px-16 md:px-24"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <div className="fixed left-0 top-0 z-50 font-extrabold bg-white">
                    {/* {cetakLink} */}
                </div>
                {/* <Nav></Nav> */}

                {(user != null && user.role_text == "siswa")&&<SiswaNav stat="landing"></SiswaNav>}
                {(user != null && user.role_text == "guru")&&<GuruNav stat="landing"></GuruNav>}
                {user != null && user == "admin" && (
                    <Nav></Nav>
                )}
                {user == null && (
                    <Nav></Nav>
                )}
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
                            {user == null &&
                            <label
                                type="button"
                                className="my-10 lg:my-0 py-3 px-6  bg-white hover:bg-blue-900 hover:text-white text-custom-blue transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full sm:w-96 lg:w-52"
                                htmlFor="masukDaftar"
                            >
                                Daftar Sekarang
                            </label>
                            }
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
                                className="text-custom-blue text-6xl"
                                icon={faIcon.faBookOpen}
                            />
                            <div className="text-custom-blue text-center pt-3 text-lg">
                                Puluhan Kursus
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-16 md:h-28 lg:h-32"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl"
                                icon={faIcon.faLaptopCode}
                            />
                            <div className="text-custom-blue text-center pt-3 text-lg">
                                Jam Belajar Fleksibel
                            </div>
                        </div>
                        <div className="border-l-4 border-solid border-custom-blue h-16 md:h-28 lg:h-32"></div>
                        <div className="w-28 md:w-40 lg:w-72 text-center">
                            <FontAwesomeIcon
                                className="text-custom-blue text-5xl"
                                icon={faIcon.faDollarSign}
                            />
                            <div className="text-custom-blue text-center pt-3 text-lg">
                                Biaya terjangkau
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 lg:mt-52">
                    <div className="col-span-12 lg:col-span-6 flex justify-center items-center lg:block">
                        <img
                            src={Logo2}
                            alt=""
                            className="w-300px lg:w-400px ml-auto mr-20"
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-6 lg:mt-10">
                        <div
                            className="text-6xl font-semibold text-custom-blue"
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
            <div className="flex justify-center items-center w-full z-0 px-16 mt-10 bg-white">
                <div className="w-full bg-custom-light-blue rounded-xl p-20">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-5">
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
                            <Link to={"/guest/kursus/search"}>
                                <button
                                    type="button"
                                    className="mt-6 py-3 px-4 bg-custom-blue hover:bg-white hover:text-custom-blue text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg w-full xl:w-52"
                                >
                                    Lihat Semua Kursus
                                </button>
                            </Link>
                        </div>
                        <div className="col-span-12 xl:col-span-7 relative">
                            {/* <div className="pr-6 absolute right-0">
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
                            </div> */}
                            <div className="">
                                <div className="flex justify-center items-center">
                                    {
                                        kursusPopuler && kursusPopuler.length>0 &&
                                        kursusPopuler.map((k, index) => (
                                            <div className="w-200px md:w-300px mx-1 shadow-lg">
                                                <div
                                                    className="h-200px md:h-300px bg-cover bg-no-repeat bg-center rounded-t-lg"
                                                    style={{
                                                        backgroundImage: `url(${cardPic})`,
                                                    }}
                                                    alt=""
                                                />
                                                <div className="bg-white rounded-b-lg p-4">
                                                    <div className="font-semibold text-black ">
                                                        {k.nama}
                                                    </div>
                                                    <div className="flex mt-6">
                                                        <span className="my-auto mr-2 text-gray-500">
                                                            <FontAwesomeIcon icon={faClock} />
                                                        </span>
                                                        <div className="text-gray-500 my-auto">
                                                            {Math.round(k.durasi/60)} jam
                                                        </div>
                                                        <Link to={`/guest/kursus/${k.kursus_id}/detail`} className="ml-auto my-auto">
                                                            <button
                                                                type="button"
                                                                class="inline-block ml-auto px-6 py-2.5 bg-custom-blue text-white font-medium text-sm leading-tight capitalize rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                            >
                                                                Detail
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="text-custom-blue text-5xl px-4 sm:px-16 md:px-24 mt-28 font-semibold"
                style={{
                    letterSpacing: "-1px",
                    fontFamily: "initial",
                }}
            >
                Jelajahi Akademika
            </div>
            <div className="px-4 sm:px-16 md:px-24 bg-white w-full pt-10 mb-28">
                <div className="grid grid-cols-12 gap-2 md:gap-4 w-full h-full text-custom-blue">
                    {cetakJelajah}
                </div>
                <div className="text-right pt-1 mt-3">
                    <Link
                        to={"/guest/kursus/search"}
                        className="text-custom-blue text-lg font-semibold hover:text-blue-700"
                    >
                        Lihat Semua Kursus
                    </Link>
                </div>
            </div>
            <div className="relative min-h-screen w-full z-0 bg-custom-blue px-4 sm:px-16 md:px-24 pb-20">
                <div
                    className="text-white text-5xl font-bold pt-20"
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
                            className="text-5xl font-bold text-custom-blue"
                            style={{
                                letterSpacing: "-1px",
                                fontFamily: "initial",
                            }}
                        >
                            Tunggu apa lagi?
                        </div>
                        <div className="pt-6 text-xl">
                            Belajar tanpa batas dengan Akademika
                        </div>
                        { user == null &&
                        <label
                            type="button"
                            className="mt-6 py-3 px-6 bg-custom-blue hover:bg-custom-light-blue hover:text-custom-blue text-white transition ease-in duration-200 text-center text-base font-normal shadow-md rounded-lg"
                            htmlFor="masukDaftar"
                        >
                            Daftar Sekarang
                        </label>
                        }
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 z-1 py-2 w-full bg-custom-blue text-center text-white font-normal text-sm">
                © Akademika 2022
            </div>
        </div>
    );
};

export default Home;
