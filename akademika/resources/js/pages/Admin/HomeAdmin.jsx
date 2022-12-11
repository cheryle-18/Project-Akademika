import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const HomeAdmin = () => {
    const history = useHistory();
    const { http, token, user } = AuthUser();
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        if (token == null) {
            console.log(token);
            return history.push("/");
        } else {
            if (user.role_text != null) {
                if (user.role_text == "guru") {
                    return history.push("/guru/kursus/diterbitkan");
                } else if (user.role_text == "siswa") {
                    return history.push("/siswa/kursus");
                }
            }
        }
    }, 1000);

    // useEffect(() => {
    //     alert(token);
    // },[token]);
    return (
        <div>
            {isLoading || token == null || user.role_text != null ? (
                <div className="h-screen w-screen flex justify-center items-center">
                    <img src="/loading1.gif" className="w-400px" alt="" />
                </div>
            ) : (
                // <div className="bg-gray-200 flex">
                <div className="bg-gray-200 flex">
                    <Sidebar now="home">
                        <div className="text-2xl p-14 pb-2">
                            <div className="bg-white overflow-y-auto h-77vh p-6 mb-6 rounded-md drop-shadow-lg hidden"></div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
    // // return (
    // //     <div className="container m-0">
    // //     <Sidebar></Sidebar>
    // //         <div className="grid grid-cols-12">
    // //             <div className="col-span-2">
    // //             </div>
    // //             <div className="col-span-10">
    // //                 <h1 className="text-blue-900 text-2xl font-bold">
    // //                     Hello World with Tailwind
    // //                 </h1>
    // //                 <div className="overflow-x-auto">
    // //                     <table className="table w-full">
    // //                         <thead>
    // //                             <tr>
    // //                                 <th></th>
    // //                                 <th>Name</th>
    // //                                 <th>Job</th>
    // //                                 <th>Favorite Color</th>
    // //                             </tr>
    // //                         </thead>
    // //                         <tbody>
    // //                             <tr>
    // //                                 <th>1</th>
    // //                                 <td>Cy Ganderton</td>
    // //                                 <td>Quality Control Specialist</td>
    // //                                 <td>Blue</td>
    // //                             </tr>
    // //                             <tr>
    // //                                 <th>2</th>
    // //                                 <td>Hart Hagerty</td>
    // //                                 <td>Desktop Support Technician</td>
    // //                                 <td>Purple</td>
    // //                             </tr>
    // //                             <tr>
    // //                                 <th>3</th>
    // //                                 <td>Brice Swyre</td>
    // //                                 <td>Tax Accountant</td>
    // //                                 <td>Red</td>
    // //                             </tr>
    // //                         </tbody>
    // //                     </table>
    // //                 </div>

    // //                 <Button>test</Button>
    // //                 <FontAwesomeIcon icon={faCoffee} />
    // //             </div>
    // //         </div>
    // //     </div>
    // );
};

export default HomeAdmin;
