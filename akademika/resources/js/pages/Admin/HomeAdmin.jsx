import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import { useHistory } from "react-router-dom";
import AuthUser from "../../components/AuthUser";
import { Bar, Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

const HomeAdmin = () => {
    const history = useHistory();
    const { http, token, user } = AuthUser();
    const [isLoading, setIsLoading] = useState(false);
    const [dataDashboard, setDataDashboard] = useState([])
    const [dataChart, setDataChart] = useState([])
    const [dataChartSec, setDataChartSec] = useState([])

    const fetchData = () => {
        http.get("/admin/dashboard").then((res) => {
            setDataDashboard(res.data)
        })
    }

    const fetchChart = () => {
        http.get("/admin/dashboard/chart").then((res) => {
            setDataChart(res.data.laporan)
        })
    }

    const fetchChartSec = () => {
        http.get("/admin/dashboard/chartSec").then((res) => {
            setDataChartSec(res.data.laporan)
        })
    }

    useEffect(() => {
        fetchData()
        fetchChart()
        fetchChartSec()
    }, [])

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
                <div className="bg-gray-200 flex">
                    <Sidebar now="home">
                        <div className="text-2xl p-14 pb-2 h-full">
                            <div className="grid grid-cols-3 gap-x-5 h-1/4">
                                <div className="w-full h-full bg-white text-custom-blue rounded-lg shadow-lg flex">
                                    <div className="my-auto px-10 flex">
                                        <div className="rounded-full bg-blue-100 w-16 h-16 flex">
                                            <FontAwesomeIcon icon={faUser} className="m-auto" />
                                        </div>
                                        <div className="text-xl font-bold my-auto ml-5">
                                            { dataDashboard.guru } Guru
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full bg-white text-custom-blue rounded-lg shadow-lg flex">
                                    <div className="my-auto px-10 flex">
                                        <div className="rounded-full bg-blue-100 w-16 h-16 flex">
                                            <FontAwesomeIcon icon={faUser} className="m-auto" />
                                        </div>
                                        <div className="text-xl font-bold my-auto ml-5">
                                            { dataDashboard.siswa } Siswa
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-full bg-white text-custom-blue rounded-lg shadow-lg flex">
                                    <div className="my-auto px-10 flex">
                                        <div className="rounded-full bg-blue-100 w-16 h-16 flex">
                                            <FontAwesomeIcon icon={faUser} className="m-auto" />
                                        </div>
                                        <div className="text-xl font-bold my-auto ml-5">
                                            { dataDashboard.kursus } Kursus
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-6 w-full grow">
                                <div className="w-3/5 bg-white rounded-lg shadow-lg p-6">
                                    {dataChart && (
                                        <Line
                                            datasetIdKey="id"
                                            data={{
                                                labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
                                                datasets: [
                                                    {
                                                        label: "Penghasilan Bulanan",
                                                        data: dataChart,
                                                    },
                                                ],
                                            }}
                                        />
                                    )}
                                </div>
                                <div className="grow ml-6 bg-white rounded-lg shadow-lg p-6">
                                    {dataChart && (
                                        <Bar
                                            datasetIdKey="id"
                                            data={{
                                                labels: ["2021", "2022"],
                                                datasets: [
                                                    {
                                                        label: "Penghasilan Tahunan",
                                                        data: dataChartSec,
                                                    },
                                                ],
                                            }}
                                            options= { {
                                                responsive: true,
                                                maintainAspectRatio: false,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
            )}
        </div>
    );
};

export default HomeAdmin;
