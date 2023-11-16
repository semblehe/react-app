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
        <section id="home" className="pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4">
                        <h1 className="text-base font-semibold text-primary"> Halo Semua 🙌,
                            saya <span className="block font-bold text-dark text-4xl mt-1">Dedy Trisaksono</span></h1>
                         <h2 className="font-medium text-slate-500 text-lg mb-5">Programmer & <span className="text-dart">Human</span></h2>
                        <p className="font-medium text-slate-400 mb-10 leading-relaxed">Belajar web programing itu mudah dan menyenangkan bukan vidisse fermentum dui dui delectus curabitur voluptaria varius malesuada mauris</p>

                    <a href="#" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-3xl hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out">Hubungi Saya</a>
                    </div>
                    <div className="w-full self-end px-4">
                        <div className="mt-10"></div>
                    </div>
                </div>
            </div>
        </section>
        <section id="body">
            <div className="">nonumes viverra deterruisset nullam tempus qui fusce velit fusce possim debet posuere postea cum sociosqu ipsum veritus his dolor patrioque percipit omittantur efficiantur habeo ceteros inceptos felis sea mi sanctus cum noluisse lectus oratio per vitae fames esse gubergren maluisset pulvinar te corrumpit vitae quem dictumst sed minim sea ponderum adipiscing aliquam litora atomorum dui finibus equidem commodo dolores verterem neglegentur salutatus ultrices tritani ancillae propriae eros brute etiam torquent adipisci molestie mus disputationi semper litora feugait augue massa dictumst fabulas quam faucibus sit errem simul te efficiantur euripidis sumo veritus senectus nec alienum eloquentiam omittam vivamus oporteat vehicula has tacimates tation sumo mandamus evertitur purus sit est elit elaboraret pellentesque atqui ex tale lorem adipisci inceptos urna vituperata ponderum velit aliquet potenti mattis adhuc vestibulum sapientem assueverit tempus patrioque posidonium regione maiestatis adhuc primis ad quis nostra prompta quem accusata dignissim evertitur esse dolore delenit pri theophrastus imperdiet civibus causae quam iusto recteque pro consequat amet propriae eloquentiam definitionem nostra invenire error reprehendunt signiferumque eleifend eros menandri non mi deseruisse offendit quot deserunt audire ultrices mutat tractatos perpetua signiferumque consequat alia aperiri graeci veri decore eget definitiones tritani class adhuc sanctus fuisset sociis posse principes invidunt placerat torquent justo quaeque dignissim liber postea magna intellegebat quidam latine altera discere dolores mea suas ponderum omittantur vivamus signiferumque dicunt blandit delenit iuvaret montes sagittis sociosqu autem elaboraret dolores ornatus delectus elaboraret legimus fabulas consectetuer quem penatibus atomorum lacus moderatius curae eirmod sadipscing cubilia quam voluptaria tritani egestas nihil dis tempor doming nonumes ancillae est laoreet mutat tale sociosqu habeo molestie tibique repudiare vocent eirmod affert tellus adipisci regione audire causae et vivendo gubergren mus tempor elitr interesset dolores ius alienum deterruisset nulla animal eam est curabitur sodales luptatum constituam faucibus persius legere ac consectetuer porttitor comprehensam dissentiunt cu maiestatis accumsan scripta</div>
        </section>
        <section id="footer" className="h-screen flex justify-center items-center bg-gray-900">
        <Navigation/>

        </section>
    </> )
}


export default SitePage
