import { useState } from "react"
import { Register } from "../../config/firebase"
import { useNavigate } from "react-router-dom"

export default function SignUp () {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const signup = async() => {
try{
    await Register(email, password)

    navigate('/product')
} catch(e) {
alert(e.message)
}
}

return <>
<div>
<div className="signup-container">
<div className="signup-form">

<h1 className="signin-h1">Register!</h1>
<div className="input-group">
    <p className="label" for="name">email</p>
    <input onChange={(e) => setEmail(e.target.value)} />
</div>

<div className="input-group">
    <p className="label" for="name">password</p>
    <input placeholder="6+ characters" onChange={(e) => setPassword(e.target.value)} />
</div>

<button className="signup-button" onClick={() => signup()}>Sign Up</button>

<p className="already-have-account">Already have an account? <a href="signin">signin</a></p>
</div>
</div>

</div>
    </>
}