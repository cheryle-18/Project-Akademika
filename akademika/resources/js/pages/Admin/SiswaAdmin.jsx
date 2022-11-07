import React from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const SiswaAdmin = () => {
    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="siswa">
                <div className="text-2xl p-14 pb-2">
                    <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg">
                        <h1>Home Page</h1>
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

export default SiswaAdmin;
