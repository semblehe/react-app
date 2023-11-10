import CardProduct from "../components/Fragments/CardProduct.jsx";
import ButtonFunc from "../components/Elements/Button/index.jsx";
// import Counter from "../components/Fragments/Counter.jsx";
import {useEffect, useRef, useState} from "react";

const products = [
    {
        id: 1,
        title: "Sepatu",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        id: 2,
        title: "Sepatu Baru",
        price: 700000,
        image: "/images/shoes-1.jpg",
        description: "consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        id: 3,
        title: "Sepatu Busuk",
        price: 900000,
        image: "/images/shoes-1.jpg",
        description: "consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const username = localStorage.getItem('username')
const ProductsPage = () => {

    const [cart,setCart] = useState([]);

    const [total,setTotal] = useState(0);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    },[])
    useEffect(() => {
        if(cart.length > 0) {
            let total = 0
            cart.forEach((item) => {
                const product = products.find((product) => product.id === item.id)
                total += product.price * item.qty
            })
            setTotal(total)
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    },[cart])

    const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || [])

    const handleAddToCartref = (id) => {
        console.log(id)
        cartRef.current = [...cartRef.current,{id,qty:1}]
        localStorage.setItem('cart', JSON.stringify(cartRef.current))
    }

    const handleLogout = () => {
        console.log("test")
        localStorage.clear()
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)){
            setCart(cart.map((item) => item.id === id ? {...item,qty:item.qty + 1} : item))
        }else{
            setCart([...cart,{id,qty:1}])
        }
    }

    return (
        <>
            <div className="bg-blue-400 py-4">
            <div className="flex justify-end  h-10 bg-blend-color-burn text-black items-end px-10">
                username : {username}
                <ButtonFunc classname="bg-black mx-2" textcolor="white" onClick={handleLogout} type="button">Logout</ButtonFunc>
            </div>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((products) => (
                        <CardProduct key={products.id}>
                            <CardProduct.Header image={products.image}/>
                            <CardProduct.Body title={products.title}> {products.description} </CardProduct.Body>
                            <CardProduct.Footer price={products.price} id={products.id} handleAddToCart={handleAddToCart}/>
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                   <h1 className="text-3xl font-bold text-blue-400 ml-5 mb-2"> Cart</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quanty</th>
                        <th>Total</th>
                        </thead>
                        <tbody>
                        {cartRef.current.map((item) => {
                        // {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title}</td>
                                        <td>Rp {" "} {product.price.toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(product.price * item.qty).toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}</td>
                                    </tr>
                                )
                        }
                        )}
                        <tr>
                            <td colSpan={3} className="text-bold">Total Price</td>
                            <td className="text-bold">Rp {(total).toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default ProductsPage