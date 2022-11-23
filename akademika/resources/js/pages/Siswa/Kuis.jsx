import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Nav from "./Navbar";

const Kuis = () => {
    const [subbab, setSubbab] = useState({
        "judul" : "HTML",
        "deskripsi" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, laboriosam!"
    })

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <Nav></Nav>
            </div>
            <div className="banner">
                <Banner subbab={subbab}></Banner>
            </div>
        </div>
    )
}

export default Kuis
