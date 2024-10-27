import { useState } from "react"
import { Login } from "../../config/firebase"
import { useNavigate } from "react-router-dom"

export default function SignIn () {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate()

const signin = async() => {
try{
await Login(email, password)

} catch(e) {
    alert(e.message)
}
}
return <>
<div>
<div className="signup-container">
<div className="signup-form">
<h1 className="signin-h1">welcome back!</h1>
<div className="input-group">
    <p className="label">email</p>
    <input onChange={(e) => setEmail(e.target.value)} />
</div>

<div className="input-group">
    <p className="label">password</p>
    <input onChange={(e) => setPassword(e.target.value)}/>
</div>

<button className="signup-button" onClick={() => signin()}>Sign Up</button>

<p className="already-have-account">Already have an account? <a href="signup">signup</a></p>
</div>
</div>

</div>
    </>
}