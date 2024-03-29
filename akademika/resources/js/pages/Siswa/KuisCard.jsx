import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Alert, Input, Radio } from "@material-tailwind/react";

const KuisCard = (kuis) => {
    var ctr = 0;

    return (
        <div className="relative p-4 mt-6 pr-0">
            <div className="bg-white px-14 py-10 static rounded-xl min-h-100px">
                <div className="num bg-blue-900 text-white text-xl font-bold rounded-full absolute w-14 h-14 flex justify-center items-center -ml-20 -mt-2">
                    <div className="inline">{kuis.idx}</div>
                </div>
                <div className="text-blue-900">
                    <div className="font-semibold text-xl h-10 flex justify-start items-center">
                        {kuis.kuis.pertanyaan}
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-4 gap-4">
                    {kuis.kuis.pilihan.map((pil, index) => (
                        // <div className="col-span-12 xl:col-span-6 bg-custom-light-blue rounded-md">
                        <div className="col-span-12 xl:col-span-6 bg-custom-light-blue rounded-md">
                            <Radio
                                id={`${kuis.idx}${ctr++}`}
                                name="jawaban"
                                value={pil}
                                label={pil}
                                className="text-black font-semibold"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KuisCard;
