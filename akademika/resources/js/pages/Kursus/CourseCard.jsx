import React, { useState, useEffect } from "react";
import clockLogo from "../../../images/Clock.png";
import CardPic from "../../../images/card_pic.png";
import { round } from "lodash";
import { toRupiah } from "../../components/CurrencyUtils";
import { Link } from "react-router-dom";
import AuthUser from "../../components/AuthUser";

const CourseCard = (props) => {
    console.log(props);
    const { http, user } = AuthUser();
    return (
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-1/2 h-auto">
            <img
                className=" w-full h-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={CardPic}
                alt=""
            />
            <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-semibold mb-2">
                    {props.course.nama}
                </h5>
                <p className="text-gray-900 text-base mb-4">
                    Rp {toRupiah(props.course.harga)}
                </p>
                <p className="text-gray-600 text-base mb-5">
                    {props.course.deskripsi}
                </p>

                <div className="text-gray-600 text-base flex">
                    <span className="my-auto mr-auto">
                        <img
                            class=" inline-block mr-2"
                            style={{ width: "25px" }}
                            src={clockLogo}
                            alt=""
                        />
                        {round(props.course.durasi / 60)} jam
                    </span>
                    <span>
                        <Link
                            to={
                                (user != null &&
                                    ((props.status == "diterbitkan" &&
                                        user.role_text == "guru" &&
                                        "/guru/kursus/" +
                                            props.course.kursus_id +
                                            "/home") ||
                                        (props.status != "diterbitkan" &&
                                            user.role_text == "guru" &&
                                            "/guru/kursus/" +
                                                props.course.kursus_id +
                                                "/detail") ||
                                        (user.role_text == "siswa" &&
                                            "/siswa/kursus/" +
                                                props.course.kursus_id +
                                                "/detail"))) ||
                                (user == null &&
                                    `/guest/kursus/${props.course.kursus_id}/detail`)
                            }
                            className="ml-auto"
                        >
                            <button
                                type="button"
                                class="inline-block ml-auto px-6 py-2.5 bg-custom-blue text-white font-medium text-sm leading-tight capitalize rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                Detail
                            </button>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
