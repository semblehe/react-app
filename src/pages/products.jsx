import CardProduct from "../components/Fragments/CardProduct.jsx";
import ButtonFunc from "../components/Elements/Button/index.jsx";
// import Counter from "../components/Fragments/Counter.jsx";
import {useContext, useEffect, useRef, useState} from "react";
import {getProducts} from "../services/product.service.js";
// import {getUsername} from "../services/auth.service.js";
import {useLogin} from "../hooks/useLogin.jsx";
import TableCart from "../components/Fragments/TableCart.jsx";
import Navbar from "../components/Layouts/Navbar.jsx";
import {DarkMode} from "../context/DarkMode.jsx";



const token = localStorage.getItem('token')
const ProductsPage = () => {
    const {isDarkMode} = useContext(DarkMode);
    // const [cart,setCart] = useState([]);

    // const [total,setTotal] = useState(0);

    const [products,setProduct]= useState([]);
    // const username = useLogin()
    useLogin()

    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem('cart')) || [])
    // },[])

    useEffect(() => {
        getProducts((data) => {
            setProduct(data)
        })
    },[])
    // useEffect(() => {
    //     if(products.length > 0 && cart.length > 0) {
    //         let total = 0
    //         cart.forEach((item) => {
    //             const product = products.find((product) => product.id === item.id)
    //             total += product.price * item.qty
    //         })
    //         setTotal(total)
    //         localStorage.setItem('cart', JSON.stringify(cart))
    //     }
    // },[cart,products])

    // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

    // const handleAddToCartref = (id) => {
    //     console.log(id)
    //     cartRef.current = [...cartRef.current,{id,qty:1}]
    //     localStorage.setItem('cart', JSON.stringify(cartRef.current))
    // }
    //
    // const totalPriceref = useRef(null) // useRed

    // useEffect(() =>{
    //     if(cart.length > 0) {
    //         totalPriceref.current.style.display="table-row";
    //     }else{
    //         totalPriceref.current.style.display="none";
    //     }
    // },[cart])


    // const handleAddToCart = (id) => {
    //     if(cart.find((item) => item.id === id)){
    //         setCart(cart.map((item) => item.id === id ? {...item,qty:item.qty + 1} : item))
    //     }else{
    //         setCart([...cart,{id,qty:1}])
    //     }
    // }

    return (
        <>
             <Navbar/>
            <div className={`flex justify-center ${isDarkMode && 'bg-slate-900'}`}>
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id}/>
                            <CardProduct.Body title={product.title}> {product.description} </CardProduct.Body>
                            <CardProduct.Footer price={product.price} id={product.id}/>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                   <h1 className="text-3xl font-bold text-blue-400 ml-5 mb-2"> Cart</h1>
                     <TableCart products={products}/>
                </div>
            </div>

        </>
    )
}

export default ProductsPage