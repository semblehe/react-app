import {useSelector} from "react-redux";
import {useContext, useEffect, useRef, useState} from "react";
import {DarkMode} from "../../context/DarkMode.jsx";
import {useTotalPrice, useTotalPriceDispatch} from "../../context/TotalPriceContext.jsx";

const tableCart = (props) => {
    const {products} = props;
    // console.log(state.cart.data)
    const cart = useSelector((state) =>  state.cart.data)
    // const [total,setTotal] = useState(0)

    const dispatch = useTotalPriceDispatch();
    const {total} = useTotalPrice();

    useEffect(() => {
        if(products.length > 0 && cart.length > 0) {
            let total = 0
            cart.forEach((item) => {
                const product = products.find((product) => product.id === item.id)
                total += product.price * item.qty
            })
            // setTotal(total)
            dispatch({type:"UPDATE",payload:{total:total}})
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    },[cart,products])

    const totalPriceref = useRef(null) // useRed

    useEffect(() =>{
        // if(cart.length > 0) {
        //     totalPriceref.current.style.display="table-row";
        // }else{
        //     totalPriceref.current.style.display="none";
        // }
    },[cart])
    const {isDarkMode} = useContext(DarkMode);
    return (
        <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && 'text-white'}`}>
            <thead>
            <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quanty</th>
            <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {/*{cartRef.current.map((item) => {*/}
            {products.length > 0 && cart.map((item) => {
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
            <tr ref={totalPriceref}>
                <td colSpan={3} className="font-bold">Total Price</td>
                <td className="font-bold">Rp {total.toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}

                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default tableCart