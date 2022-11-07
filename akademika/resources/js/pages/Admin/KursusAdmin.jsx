import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const KursusAdmin = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-white hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

    const [title, setTitle] = useState("master");

    const onClickMaster = () => {
        setTitle("master");
    };

    const onClickPengajuan = () => {
        setTitle("pengajuan");
    };

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="kursus">
                <div className="text-2xl p-10 pb-2">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                        <div
                            className={
                                (title == "master" && classSelected) ||
                                (title != "master" && classOther)
                            }
                            onClick={onClickMaster}
                        >
                            Master
                        </div>
                        <div
                            className={
                                (title == "pengajuan" && classSelected) ||
                                (title != "pengajuan" && classOther)
                            }
                            onClick={onClickPengajuan}
                        >
                            Pengajuan
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                        <h1>Home Page</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium ad, nisi amet eaque, reprehenderit sequi
                        voluptate adipisci voluptas labore maxime ducimus magni
                        perferendis harum? Facere libero iste quisquam deserunt?
                        Enim? Temporibus, suscipit nostrum! Fugiat amet
                        molestiae consequuntur est sequi ipsam a nihil at? Quae
                        <FontAwesomeIcon icon={faCoffee} />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium ad, nisi amet eaque, reprehenderit sequi
                        voluptate adipisci voluptas labore maxime ducimus magni
                        perferendis harum? Facere libero iste quisquam deserunt?
                        Enim? Temporibus, suscipit nostrum! Fugiat amet
                        molestiae consequuntur est sequi ipsam a nihil at? Quae
                        <FontAwesomeIcon icon={faCoffee} />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium ad, nisi amet eaque, reprehenderit sequi
                        voluptate adipisci voluptas labore maxime ducimus magni
                        perferendis harum? Facere libero iste quisquam deserunt?
                        Enim? Temporibus, suscipit nostrum! Fugiat amet
                        molestiae consequuntur est sequi ipsam a nihil at? Quae
                        <FontAwesomeIcon icon={faCoffee} />
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default KursusAdmin;
