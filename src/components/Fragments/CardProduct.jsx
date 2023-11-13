import {Link} from "react-router-dom";
import ButtonFunc from "../Elements/Button/index.jsx";

const CardProduct = (props) => {
   const {children} = props
    return (
        <div className="w-full max-w-xs bg-black-800 border border-grey-799 rounded-lg shadow mx-5 my-2 flex flex-col justify-between">
            {children}
        </div>
    )

}

const Header = (props) => {
    const {image} = props
    return (
        <Link to="">
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </Link>
    )
}
const Body = (props) => {
    const {children,title} = props
    return (
        <div className="px-5 py-5 h-full">
            <Link to="">
                <h5 className="text-xl font-semibold tracking-tight text-black">{title.substring(0,20)} ...</h5>
            </Link>
            <p className="text-s text-black ">
                {children.toString().substring(0,200)} ...
            </p>
        </div>
    )
}

const Footer = (props) => {
    const {price,handleAddToCart,id} = props
    return (
        <div className="flex items-center justify-between pb-5 px-5">
            <span className="text-xl font-bold text-black">Rp {price.toLocaleString('id-ID',{styles:'currency',currency:'IDR'})}</span>
            <ButtonFunc title="Add to cart" classname="bg-black" textcolor="white" onClick={ () => handleAddToCart(id)}> Add to cart </ButtonFunc>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct