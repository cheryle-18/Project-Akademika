import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const TabsKursus = ({titleParam}) => {
    const [title, setTitle] = useState(titleParam)

    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    let history = useHistory()

    const onClickMateri = () => {
        setTitle("materi");
        let path = "/guru/kursus/detail"
        history.push(path)
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
        let  path = "/guru/kursus/pengumuman"
        history.push(path)
    };


    return(
        <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                    <div
                        className={
                            (title == "materi" && classSelected) ||
                            (title != "materi" && classOther)
                        }
                        onClick={onClickMateri}
                    >
                        Detail Kursus
                    </div>
                    <div
                        className={
                            (title == "pengumuman" && classSelected) ||
                            (title != "pengumuman" && classOther)
                        }
                        onClick={onClickPengumuman}
                    >
                        Pengumuman
                    </div>
        </div>
    )
}

export default TabsKursus
