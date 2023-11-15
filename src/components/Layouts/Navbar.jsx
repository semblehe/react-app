import {useLogin} from "../../hooks/useLogin.jsx";
import ButtonFunc from "../Elements/Button/index.jsx";
import {useContext, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {DarkMode} from "../../context/DarkMode.jsx";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data)

    const {isDarkMode,setIsDarkMode} = useContext(DarkMode);

    useEffect(() => {
        if (cart.length > 0) {
            let total = 0
            cart.forEach((item) => {
                total += item.qty
            })
            setTotalCart(total)
        }
    }, [cart])
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {username}
            <ButtonFunc classname="bg-black mx-2" textcolor="white" onClick={handleLogout} type="button">Logout</ButtonFunc>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">{totalCart}</div>

            <ButtonFunc className="bg-black px-10 mx-5" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode?"Light":"Dark"}</ButtonFunc>
        </div>

    );
}

export default Navbar

