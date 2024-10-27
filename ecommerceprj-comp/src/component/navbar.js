import { useDispatch , useSelector } from "react-redux"

export default function NavBar() {

const dispatch = useDispatch()

const cart = useSelector(state => state.cart)
    console.log(cart , "cart");
    


return <>
<div>
<div className="navbar">
<div class="logo">BR.<span className="f">f</span></div>
<div>
<div>


<div className="search-bar">

    <input type="text" placeholder="Search..." />
    <button className="navbar-button">Search</button>
</div>
</div>
</div>   
<img className="cart-img" src="https://i.pinimg.com/474x/ff/63/4f/ff634fea86a41aea0d8988767a5a92a1.jpg"/> <span className="counting">{cart.length}</span>
</div>
<div class="nav-links">
    <a href="/">Home</a>
    <a href="product">Add product</a>
    <a href="signup">Signup</a>
    <a href="signin">Signin</a>
<div>
</div>

</div>
    <hr />

</div>
    </>
}