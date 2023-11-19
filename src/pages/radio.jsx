import Navbar_ex from "../components/Layouts/Navbar_ex.jsx";
import {useContext, useEffect, useState} from "react";
import {DarkMode} from "../context/DarkMode.jsx";
import {useLogin} from "../hooks/useLogin.jsx";
import {getRadios} from "../services/radio.service.js";
import RadioList from "../components/Layouts/RadioList.jsx";

const RadioPage = () => {
    const [radios,setRadio]= useState([]);
    useLogin()
    useEffect(() => {
        getRadios((data) => {
            setRadio(data)
        })
    },[])
    return (<>
        <Navbar_ex />

        <section id="body">
          <RadioList api={radios} />
        </section>

    </> )
}


export default RadioPage
