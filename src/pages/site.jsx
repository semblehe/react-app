import Navbar_ex from "../components/Layouts/Navbar_ex.jsx";
import CardProduct from "../components/Fragments/CardProduct.jsx";
import TableCart from "../components/Fragments/TableCart.jsx";
import {useContext, useEffect, useState} from "react";
import {DarkMode} from "../context/DarkMode.jsx";
import {useLogin} from "../hooks/useLogin.jsx";
import {getProducts} from "../services/product.service.js";
import Navigation from "../components/Layouts/Navigation.jsx";

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
        <Navbar_ex />
        {/*<section id="home" className="pt-36">*/}
        {/*    <div className="container">*/}
        {/*        <div className="flex flex-wrap">*/}
        {/*            <div className="w-full self-center px-4">*/}
        {/*                <h1 className="text-base font-semibold text-primary"> Halo Semua 🙌,*/}
        {/*                    saya <span className="block font-bold text-dark text-4xl mt-1">Dedy Trisaksono</span></h1>*/}
        {/*                 <h2 className="font-medium text-slate-500 text-lg mb-5">Programmer & <span className="text-dart">Human</span></h2>*/}
        {/*                <p className="font-medium text-slate-400 mb-10 leading-relaxed">Belajar web programing itu mudah dan menyenangkan bukan vidisse fermentum dui dui delectus curabitur voluptaria varius malesuada mauris</p>*/}

        {/*            <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-3xl hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out">Hubungi Saya</a>*/}
        {/*            </div>*/}
        {/*            <div className="w-full self-end px-4">*/}
        {/*                <div className="mt-10"></div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}
        <section id="body">

        </section>

        {/*<section id="footer" className="h-screen flex justify-center items-center bg-gray-900">*/}
        {/*<Navigation/>*/}

        {/*</section>*/}
    </> )
}


export default SitePage
