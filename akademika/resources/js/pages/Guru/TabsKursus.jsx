import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const TabsKursus = ({titleParam,kursus_id}) => {
    const [title, setTitle] = useState(titleParam)
    const { http, user } = AuthUser()
    const [isDiterbitkan,setIsDiterbitkan] = useState(0)

    const classSelected = "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther = "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    let history = useHistory()

    const onClickHome = () => {
        setTitle("home");
        let path = "/guru/kursus/"+kursus_id+"/home"
        history.push(path)
    };

    const onClickEdit = () => {
        setTitle("edit");
        let path = "/guru/kursus/"+kursus_id+"/detail"
        history.push(path)
    };

    const onClickPengumuman = () => {
        setTitle("pengumuman");
        let  path = "/guru/kursus/"+kursus_id+"/pengumuman"
        history.push(path)
    };

    const checkStatus = () => {
        http.post("/guru/kursus/isDiterbitkan", {
            kursus_id: kursus_id,
        }).then((res) => {
            setIsDiterbitkan(res.data)
        });
    }

    checkStatus()

    return(
        <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                    {isDiterbitkan == 1 && <div
                        className={
                            (title == "home" && classSelected) ||
                            (title != "home" && classOther)
                        }
                        onClick={onClickHome}
                    >
                        Home Kursus
                    </div>}
                    <div
                        className={
                            (title == "edit" && classSelected) ||
                            (title != "edit" && classOther)
                        }
                        onClick={onClickEdit}
                    >
                        Detail & Edit Kursus
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
