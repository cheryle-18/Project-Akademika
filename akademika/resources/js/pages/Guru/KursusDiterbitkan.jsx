import React, { useState, useEffect, Fragment } from "react";
import CourseCard from "../Kursus/CourseCard";
import GuruNav from "./Navbar"
import Tabs from "./Tabs";

const KursusDiterbitkan = (title) => {

    return(
        <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-gray-100">
            <div className="px-4 sm:px-16 md:px-24 drawer-side bg-custom-blue overflow-y-auto flex-none">
                <GuruNav />
            </div>
            <div className="px-4 sm:px-16 md:px-24 py-6 w-full overflow-x-none bg-gray-100">
                <div className="tabs w-auto">
                    <Tabs titleParam={title}></Tabs>
                </div>
            </div>
        </div>
    )
}

export default KursusDiterbitkan;
