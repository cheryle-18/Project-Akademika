import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import KuisCard from "./KuisCard";
import Nav from "./Navbar";

const Kuis = () => {
    const [subbab, setSubbab] = useState({
        judul: "HTML",
        deskripsi:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!",
    });

    const [kuiss, setKuis] = useState([
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
        {
            soal: "Apa kepanjangan dari HTML",
            pilihan: [
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
                "HyperText Markup Language",
            ],
            jawaban: "HyperText Markup Language",
        },
    ]);

    const cetakKuis = kuiss.map((kuis, index) => (
        <KuisCard kuis={kuis} idx={index + 1}></KuisCard>
    ));

    return (
        <div className="bg-gray-100">
            <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
                <div className="drawer-side bg-custom-blue overflow-y-auto flex-none">
                    <Nav></Nav>
                </div>
                <div className="banner">
                    <Banner subbab={subbab}></Banner>
                </div>
                <div className="px-4 sm:px-16 md:px-24">
                    <div className="mt-10 text-custom-blue font-semibold text-xl">
                        Kuis
                    </div>
                    {cetakKuis}
                </div>
            </div>
        </div>
    );
};

export default Kuis;
