import React, { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Navbar";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
            id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

const Silabus = () => {
    const [course, setCourse] = useState({
        "nama" : "Pengembangan Website Front-End Dasar",
        "kategori" : "Teknologi Informasi",
        "deskripsi" : "Belajar fundamental dari pengembangan website front-end dengan HTML, CSS, dan JavaScript",
        "harga" : 250000,
        "durasi" : 40
    })

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <Nav></Nav>
            </div>
            <div className="banner">
                <div
                className="static h-96 w-full z-0 px-4 sm:px-16 md:px-20 py-20 flex"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
                >
                    <div className="flex flex-col text-white my-auto">
                        <div className="font-bold text-4xl mb-3">
                            {course.nama}
                        </div>
                        <div className="text-xl mb-6 font-semibold">
                            {course.kategori}
                        </div>
                        <div className="text-lg">
                            {course.deskripsi}
                        </div>
                    </div>
                </div>
            </div>
            <div className="tabs">

            </div>
            <div className="silabus p-16 m-0 w-full overflow-x-none bg-gray-100">
                <div className="font-bold text-3xl text-blue-900 mb-5">
                    Silabus Kursus
                </div>
                <Fragment>
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="bg-blue-100 p-4 border-2 border-b-0 border-blue-900">
                            HTML
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="bg-blue-100 p-4 border-2 border-b-0 border-blue-900">
                            CSS
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="bg-blue-100 p-4 border-2 border-blue-900">
                            JavaScript
                        </AccordionHeader>
                        <AccordionBody className="bg-white p-4 text-base border-2 border-blue-900">
                            <div className="w-full bg-white flex mb-3">
                                <span>Materi</span>
                                <span className="ml-auto">120 Menit</span>
                            </div>
                            <div className="w-full bg-white flex">
                                <span>Kuis</span>
                                <span className="ml-auto">20 Menit</span>
                            </div>
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </div>
    )
}

export default Silabus
