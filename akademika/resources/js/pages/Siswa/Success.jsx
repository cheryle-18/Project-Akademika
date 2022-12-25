import React, { useState, useEffect, Fragment } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import SiswaNav from "./Navbar";
import GuestNav from "../Nav";
import AuthUser from "../../components/AuthUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcon from "@fortawesome/free-solid-svg-icons";
import { Alert, Input, Radio } from "@material-tailwind/react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ceil, floor, keyBy } from "lodash";
import { countBy } from "lodash";

const Success = (props) => {
    console.log(props.result);
}

export default Success;
