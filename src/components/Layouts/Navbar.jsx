import {useLogin} from "../../hooks/useLogin.jsx";
import ButtonFunc from "../Elements/Button/index.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data)

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
        </div>

    );
}

export default Navbar

