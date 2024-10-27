import { useNavigate } from "react-router-dom"
import { GetProduct } from "../../config/firebase"
import { useEffect, useState } from "react";

export default function Dashboard() {

const navigate = useNavigate();
const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async() => {
        const productsData = await GetProduct();
        setProducts(productsData);
    };

fetchProducts();
}, []);

console.log('products ----->', products);

const gotoDetail = (product) => {
navigate('/detail/' + product.id);
};

return <>
<div className="container">
{products.map((item) => (
<div className="box" key={item.id} onClick={() => gotoDetail(item)} >
    <br />    <br />
<img className="product-img " src={item.image} width='30%' height='30%'/>

<p className="title">{item.title}</p>

<p className="price">$<span className="sign"> {item.price}</span></p>
<br />
<button className="addtocart">ADD TO CART</button>
</div>
))}
</div>
</>
}