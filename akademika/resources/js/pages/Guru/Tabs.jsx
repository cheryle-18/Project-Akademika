import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Tabs = ({titleParam}) => {
    const [title, setTitle] = useState(titleParam)

    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    let history = useHistory()

    const onClickLive = () => {
        setTitle("live")
        let  path = "/guru/kursus/diterbitkan"
        history.push(path)
    };

    const onClickProses = () => {
        setTitle("proses")
        let  path = "/guru/kursus/diproses"
        history.push(path)
    };

    const onClickNew = () => {
        setTitle("new")
        let  path = "/guru/kursus/tambah"
        history.push(path)
    };

    return(
        <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md mb-6 mt-4">
            <div
                className={
                    (title == "live" && classSelected) ||
                    (title != "live" && classOther)
                }
                onClick={onClickLive}
            >
                Diterbitkan
            </div>
            <div
                className={
                    (title == "proses" && classSelected) ||
                    (title != "proses" && classOther)
                }
                onClick={onClickProses}
            >
                Dalam Proses
            </div>
            <div
                className={
                    (title == "new" && classSelected) ||
                    (title != "new" && classOther)
                }
                onClick={onClickNew}
            >
                Tambah Baru
            </div>
        </div>
    )
}

export default Tabs
