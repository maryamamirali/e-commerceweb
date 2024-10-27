import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, deltocart } from "../../store/cartSlice";
export default function Detail() {

    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items); // Assuming your cart items are stored here
    console.log(cartItems);

    
    useEffect(() => {
        getSingleProductData();
    }, []);

    const getSingleProductData = async () => {
        const productData = await getSingleProduct(params.id);
        setProduct(productData);
    };

    const Back = () => {
        navigate(-1);
    };


const toggleCart = () => {
    console.log('Cart visibility:', showCart);
    setShowCart(!showCart);
};

dispatch(addtocart(product));
console.log('Added to cart:', product);

dispatch(deltocart(product));
console.log('Removed from cart:', product);



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="detail-container">
                <div className="product-detail">
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-info">
                        <p className="title">{product.title}</p>
                        <p className="price">{"Rs. " + product.price}</p>
                        <div className="description">
                            <p>'{product.description}'</p>
                        </div>
   <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwk3VgR90V1oQ8zw5T2HcCEzmJzkxuldXU3w&s'  width='7%' className="plus" onClick={() => dispatch(addtocart(product))} />
   
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLc7hIZgwsxkcxmTfNHVg6GpC5Z_hixwrsD9DFHWcgYlrcauMacnD-vbF8ohPfSjua6U&usqp=CAU" width='7%' className="minus" onClick={() => dispatch(deltocart(product))} />


                    </div>

                </div>
                <div className="buttons">
                <button onClick={Back} className="detail-btn">back</button>

                </div>
            </div>

        </>
    );
}

