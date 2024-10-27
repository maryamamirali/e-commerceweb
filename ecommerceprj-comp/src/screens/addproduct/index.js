import { useNavigate } from "react-router-dom"
import { product } from "../../config/firebase"
import { useState } from "react"


export default function Product () {

const navigate = useNavigate()
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')
const [image, setImage] = useState('')

const onSubmit = async() => {
    try{
await product({title, description, price, image})

navigate('/')
}catch(e) {
    alert(e.message)
}
}


return <>
<div>
<div className="product-container">
<div className="signup-form">
<h2 className="signin-h1">Add your Product!</h2>

<div className="input-group">
    <p className="label">title</p>
    <input onChange={(e) => setTitle(e.target.value)}/>
</div>

<div className="input-group">
    <p className="label">description</p>
    <input onChange={(e) => setDescription(e.target.value)}/>
</div>


<div className="input-group">
    <p className="label">price</p>
    <input onChange={(e) => setPrice(e.target.value)} />
</div>


<div className="input-group">
    <p className="label">image</p>
    <input onChange={(e) => setImage(e.target.files[0])} className="product-btn" type="file" />
</div>
<button className="signup-button" onClick={onSubmit}>addproduct</button>

<p className="already-have-account">Already have an account? <a href="signup">signup</a></p>
</div>
</div>

</div>
    </>
}