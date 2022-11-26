import React, { useState, useEffect } from "react";

const Banner = (subbab) => {
    return(
        <div
        className="static h-96 w-full z-0 px-4 sm:px-16 md:px-24 py-20 flex"
        style={{
            backgroundImage:
                "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
        }}
        >
            <div className="flex flex-col text-white my-auto">
                <div className="font-bold text-4xl mb-3">
                    {subbab.subbab.judul}
                </div>
                <div className="text-xl mb-6 font-semibold">
                    {subbab.subbab.deskripsi}
                </div>
            </div>
        </div>
    )
}

export default Banner
