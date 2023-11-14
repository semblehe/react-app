import InputForm from "../Elements/Input/index.jsx";
import ButtonFunc from "../Elements/Button/index.jsx";
import {useEffect, useRef, useState} from "react";
import {login} from "../../services/auth.service.js";

const FormLogin = () => {

    const [loginFailed,setLoginFailed] = useState("");

    const handleLogin = (e) => {
        e.preventDefault()
        // localStorage.setItem("username",e.target.username.value)
        // localStorage.setItem("password",e.target.password.value)
        // window.location.href="/products"
        const data = {username:e.target.username.value,password:e.target.password.value}
        login(data,(status,res) => {
            if(status){
                localStorage.setItem("token",res)
                window.location.href="/products"
            }else{
                setLoginFailed(res.response.data)
                console.log(res.response.data)
            }
        })
    }

    const username = useRef(null)

    useEffect(() => {
        username.current.focus();
    }, []);
    return (
        <>
        <form onSubmit={handleLogin}  className="mb-8">
            <InputForm label="Username" name="username" type="text" placeholder="Username" ref={username}/>
            <InputForm label="Password" name="password" type="password" placeholder="*****"/>
            <ButtonFunc textcolor="white" classname="w-full bg-blue-500" type="submit">Login</ButtonFunc>
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
        </>
    )
}

export default FormLogin