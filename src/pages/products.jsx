
import CardProduct from "../components/Fragments/CardProduct.jsx";

const ProductsPage = () => {
    return (<div className="flex justify-center py-5">
        <CardProduct>
            <CardProduct.Header image="/images/shoes-1.jpg"/>
            <CardProduct.Body title="Sepatu"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardProduct.Body>
            <CardProduct.Footer/>
        </CardProduct>
        <CardProduct>
            <CardProduct.Header image="/images/shoes-1.jpg"/>
            <CardProduct.Body title="Sandal"> LLorem ipsum dolor sit amet, consectetur adipiscing elit.</CardProduct.Body>
            <CardProduct.Footer/>
        </CardProduct>
    </div>)
}

export default ProductsPage