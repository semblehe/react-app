import CardProduct from "../components/Fragments/CardProduct.jsx";
import ButtonFunc from "../components/Elements/Button/index.jsx";
import Counter from "../components/Fragments/Counter.jsx";

const products = [
    {
        id: 1,
        title: "Sepatu",
        price: "Rp 1.000.000",
        image: "/images/shoes-1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }, {
        id: 2,
        title: "Sepatu Baru",
        price: "Rp 700.000",
        image: "/images/shoes-1.jpg",
        description: "consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]

const username = localStorage.getItem('username')
const ProductsPage = () => {

    const handleLogout = () => {
        console.log("test")
        localStorage.clear()
        window.location.href = "/login"
    }
    return (
        <>
            <div className="flex justify-center h-10 bg-blend-color-burn text-black items-center px-10">
                username : {username}
                <ButtonFunc classname="bg-black" textcolor="white" onClick={handleLogout} type="button">Logout</ButtonFunc>
            </div>
            <div className="flex justify-center py-5">
                {products.map((products) => (
                    <CardProduct key={products.id}>
                        <CardProduct.Header image={products.image}/>
                        <CardProduct.Body title={products.title}> {products.description} </CardProduct.Body>
                        <CardProduct.Footer price={products.price}/>
                    </CardProduct>
                ))}
            </div>
            <div className="flex justify-center">
                <Counter/>
            </div>
        </>
    )
}

export default ProductsPage