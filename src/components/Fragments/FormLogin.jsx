import InputForm from "../Elements/Input/index.jsx";
import ButtonFunc from "../Elements/Button/index.jsx";

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem("username",e.target.username.value)
        localStorage.setItem("password",e.target.password.value)
        window.location.href="/products"
    }
    return (
        <>
        <form onSubmit={handleLogin}  className="mb-8">
            <InputForm label="Username" name="username" type="text" placeholder="Username"/>
            <InputForm label="Password" name="password" type="password" placeholder="*****"/>
            <ButtonFunc textcolor="white" classname="w-full bg-blue-500" type="submit">Login</ButtonFunc>
        </form>
        </>
    )
}

export default FormLogin