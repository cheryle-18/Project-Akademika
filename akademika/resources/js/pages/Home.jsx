import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div
                className="relative min-h-screen w-full z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom right, rgb(13,90,162), rgb(152,204,234))",
                }}
            >
                <Nav></Nav>
                <Link to="/admin/home">admin</Link>
                <div className="absolute bottom-0 z-1 py-2 w-full bg-custom-blue text-center text-white font-normal">@ Akademika</div>
            </div>
        </div>
    );
};

export default Home;
