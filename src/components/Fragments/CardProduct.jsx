import {Link} from "react-router-dom";
import ButtonFunc from "../Elements/Button/index.jsx";

const CardProduct = (props) => {
   const {children} = props
    return (
        <div className="w-full max-w-sm bg-black-800 border border-grey-799 rounded-lg shadow mx-2 flex flex-col justify-between">
            {children}
        </div>
    )

}

const Header = (props) => {
    const {image} = props
    return (
        <Link to="">
            <img src={image} alt="product" className="p-8 rounded-t-lg"/>
        </Link>
    )
}
const Body = (props) => {
    const {children,title} = props
    return (
        <div className="px-5 py-5 h-full">
            <Link to="">
                <h5 className="text-xl font-semibold tracking-tight text-black">{title}</h5>
            </Link>
            <p className="text-s text-black">
                {children}
            </p>
        </div>
    )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between pb-5 px-5">
            <span className="text-xl font-bold text-black">{price}</span>
            <ButtonFunc title="Add to cart" classname="bg-black" textcolor="white"> Add to cart </ButtonFunc>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct