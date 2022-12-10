import React, { useState } from "react";
import { Select, Option, Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import AuthUser from "../../components/AuthUser";
import { useEffect } from "react";
import { Bar, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { data } from "autoprefixer";
ChartJS.register(...registerables);

const LaporanAdmin = () => {
    const classSelected =
        "float-left bg-white text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";
    const classOther =
        "float-left hover:bg-gray-200 hover:text-custom-blue py-1 px-4 rounded-sm mx-1 cursor-pointer";

        const { http } = AuthUser();
    const [title, setTitle] = useState("penghasilan");
    const [dataChart, setDataChart] = useState([])
    const [dataTable, setDataTable] = useState([])
    const [type, setType] = useState("Penghasilan")
    const [chartLabel, setChartLabel] = useState("Penghasilan Kursus")
    const [chartLabels, setChartLabels] = useState(['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'])
    const [filterChart, setFilterChart] = useState("Bulanan")
    const [filterMonth, setFilterMonth] = useState("1")
    const [filterYear, setFilterYear] = useState("2022")

    const [months, setMonths] = useState([
        { month: "Januari", num: 1 },
        { month: "Februari", num: 2 },
        { month: "Maret", num: 3 },
        { month: "April", num: 4 },
        { month: "Mei", num: 5 },
        { month: "Juni", num: 6 },
        { month: "Juli", num: 7 },
        { month: "Agustus", num: 8 },
        { month: "September", num: 9 },
        { month: "Oktober", num: 10 },
        { month: "November", num: 11 },
        { month: "Desember", num: 12 },
    ])

    const onClickKursus = () => {
        setTitle("kursus");
        setType("Kursus")
        setChartLabel("Pendaftaran Kursus")
    };

    const onClickPenghasilan = () => {
        setTitle("penghasilan");
        setType("Penghasilan")
        setChartLabel("Penghasilan Kursus")
    };

    const onClickUser = () => {
        setTitle("user");
        setType("User")
        setChartLabel("Pendaftaran User")
    };

    const fetchData = () => {
        http.post("/admin/master/laporan/data", {
            type: type,
            month: filterMonth,
            year: filterYear
        }).then((res) => {
            setDataTable(res.data.laporan);
            console.log(res.data.laporan);
        });
    }

    const fetchChart = () => {
        http.post("/admin/master/laporan/chart", {
            type: type,
            filter: filterChart
        }).then((res) => {
            setDataChart(res.data.laporan);
            console.log(res.data.laporan);
        });
    }

    const setFilter = (selected) => {
        setFilterChart(selected)
        if(selected=="Bulanan"){
            setChartLabels(['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'])
        }
        else{
            setChartLabels(['2021', '2022'])
        }
    }

    useEffect(() => {
        fetchData()
        fetchChart()
    }, [type, filterChart, filterMonth, filterYear])

    return (
        <div className="bg-gray-200 flex">
            <Sidebar now="laporan">
                <div className="text-2xl p-10 pb-2">
                    <div className="bg-custom-blue text-white inline-block text-base tracking-wide p-1 py-2 rounded-md">
                        <div
                            className={
                                (title == "penghasilan" && classSelected) ||
                                (title != "penghasilan" && classOther)
                            }
                            onClick={onClickPenghasilan}
                        >
                            Penghasilan
                        </div>
                        <div
                            className={
                                (title == "kursus" && classSelected) ||
                                (title != "kursus" && classOther)
                            }
                            onClick={onClickKursus}
                        >
                            Kursus
                        </div>
                        <div
                            className={
                                (title == "user" && classSelected) ||
                                (title != "user" && classOther)
                            }
                            onClick={onClickUser}
                        >
                            User
                        </div>
                    </div>
                    <div className="clear-both"></div>
                    <div className="inline-block w-full">
                        <div className="w-30 float-right">
                            <Select label="Jenis" className="pt-4 bg-white"
                            onChange={(e) => setFilter(e)}>
                                <Option value="Bulanan">Bulanan</Option>
                                <Option value="Tahunan">Tahunan</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="clear-both"></div>
                    <div className="bg-white overflow-y-auto h-auto p-6 my-4 rounded-md drop-shadow-lg">
                        {
                            dataChart &&
                            <Bar
                                datasetIdKey='id'
                                className="w-full"
                                data={{
                                    labels: chartLabels,
                                    datasets: [{
                                        label: chartLabel,
                                        data: dataChart
                                    }]
                                }}
                            />
                        }

                    </div>
                    <div className="flex">
                        <span className="text-black font-semibold text-xl py-6">
                            Laporan { type } { months[filterMonth-1].month } { filterYear }
                        </span>
                        <div className="w-30 ml-auto my-auto">
                            <Select label="Bulan" className="pt-4 bg-white"
                            onChange={(e) => setFilterMonth(e)}>
                                {
                                    months.map((m, index) => (
                                        <Option value={ m.num }>{m.month}</Option>
                                    ))
                                }
                            </Select>
                        </div>
                        <div className="w-30 ml-3 my-auto">
                            <Select label="Tahun" className="pt-4 bg-white"
                            onChange={(e) => setFilterYear(e)}>
                                <Option value="2021">2021</Option>
                                <Option value="2022">2022</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="bg-white overflow-y-auto p-4 mb-6 rounded-md drop-shadow-lg">
                        <table className="table table-compact w-full text-black">
                            <thead>
                                <tr>
                                    <th className="bg-white text-center text-base">NO</th>
                                    <th className="bg-white text-center text-base">TANGGAL</th>
                                    <th className="bg-white text-center text-base">KETERANGAN</th>
                                    <th className="bg-white text-center text-base">JUMLAH</th>
                                </tr>
                            </thead>
                            {/* {cetakSiswa} */}
                        </table>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
};

export default LaporanAdmin;
