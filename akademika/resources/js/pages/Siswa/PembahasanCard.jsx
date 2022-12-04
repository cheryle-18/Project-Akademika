import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Alert, Input, Radio } from "@material-tailwind/react";

const PembahasanCard = ({kuis, jawaban, idx}) => {
    var ctr = 0;

    var classBenar = "col-span-12 xl:col-span-6 bg-green-100 rounded-md";
    var classSalah = "col-span-12 xl:col-span-6 bg-red-100 rounded-md";
    var classDefault = "col-span-12 xl:col-span-6 bg-custom-light-blue rounded-md";

    const checkClass = (pil) => {
        if (pil.jawaban == kuis.kunci_jawaban) {
            return classBenar;
        }
        else{
            if(pil.jawaban != jawaban.jawaban){
                return classDefault;
            }
            else{
                return classSalah;
            }
        }
    };


    return (
        <div className="relative p-4 mt-6 pr-0" key={idx}>
            <div className="bg-white px-14 py-10 static rounded-xl min-h-100px">
                <div className="num bg-blue-900 text-white text-xl font-bold rounded-full absolute w-14 h-14 flex justify-center items-center -ml-20 -mt-2">
                    <div className="inline">{idx}</div>
                </div>
                <div className="text-blue-900">
                    <div className="float-left font-semibold text-xl h-10 flex justify-start items-center">
                        {kuis.pertanyaan}
                    </div>
                    {kuis.kunci_jawaban == jawaban.jawaban && (
                            <div className="float-left text-center md:ml-6 py-2 px-4 bg-green-600 rounded-3xl text-white h-10 w-full md:w-auto">
                                Benar
                            </div>
                        )}
                    {kuis.kunci_jawaban != jawaban.jawaban && (
                            <div className="float-left text-center md:ml-6 py-2 px-4 bg-red-600 rounded-3xl text-white h-10 w-full md:w-auto">
                                Salah
                            </div>
                        )}
                    <div className="clear-both"></div>
                </div>
                <div className="grid grid-cols-12 mt-4 gap-4">
                    {kuis.pilihan.map((pil, index) => (
                        // <div className="col-span-12 xl:col-span-6 bg-custom-light-blue rounded-md">
                        <div className={checkClass(pil)}>
                            <Radio
                                id={`${kuis.idx}${ctr++}`}
                                name={`jawaban${idx}`}
                                label={pil.jawaban}
                                className="text-black font-semibold"
                                checked = {pil.jawaban == jawaban.jawaban && true}
                                onChange = {() => {""}}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    {kuis.pembahasan}
                </div>
            </div>
        </div>
    );
};

export default PembahasanCard;
