import Navbar_ex from "../components/Layouts/Navbar_ex.jsx";
import CardProduct from "../components/Fragments/CardProduct.jsx";
import TableCart from "../components/Fragments/TableCart.jsx";
import {useContext, useEffect, useState} from "react";
import {DarkMode} from "../context/DarkMode.jsx";
import {useLogin} from "../hooks/useLogin.jsx";
import {getProducts} from "../services/product.service.js";

const SitePage = () => {
    const {isDarkMode} = useContext(DarkMode);
    const [products,setProduct]= useState([]);
    useLogin()
    useEffect(() => {
        getProducts((data) => {
            setProduct(data)
        })
    },[])
    return (<>
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4">
                        <h1 className="text-base font-semibold text-primary"> Halo Semua 🙌,
                            saya <span className="block font-bold text-dark text-4xl mt-1">Dedy Trisaksono</span></h1>
                         <h2 className="font-medium text-slate-500 text-lg mb-5">Programmer & Human</h2>
                        <p>Belajar webv programing itu mudah dan menyenangkan bukan</p>
                    </div>
                </div>
            </div>
        </section>
    </> )
}

export default SitePage
