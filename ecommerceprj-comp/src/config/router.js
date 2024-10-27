import {createBrowserRouter,RouterProvider, useNavigate, Outlet} from "react-router-dom";
import Dashboard from "../screens/dashboard";
import Detail from "../screens/detail";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";
import Product from "../screens/addproduct";
import { onAuthStateChanged, auth } from "./firebase";
import { useState, useEffect } from "react";
import Cart from "../screens/cart";

const router = createBrowserRouter([
{
path: "/",
    element:<Main />,
    children: [
{    path: "/",
    element:<Dashboard />
},
{
    path: "detail/:id",
    element:<Detail />,
},
{
    path: "signin",
    element:<SignIn />,
},
{
    path: "signup",
    element:<SignUp />,
},
{
    path: "product",
    element:<Product />,
},
{
    path: "cart",
    element:<Cart />,
}
]}]);


function Main() {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])
    useEffect(() => {
        const {pathname} = window.location
        if (user) {
            console.log('user logged in', user)
        }
        else {
            console.log('please logged in !')
            if (pathname === '/product') {
                navigate('/signup')
            }
        }
    }, [window.location.pathname, user])
    return <div>
        <Outlet />
    </div>

}

export default function Route () {
    return  <RouterProvider router={router} />
}