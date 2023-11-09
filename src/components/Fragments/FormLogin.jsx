import InputForm from "../Elements/Input/index.jsx";
import ButtonFunc from "../Elements/Button/index.jsx";

const FormLogin = () => {
    return (
        <form action="">
            <InputForm label="Username" name="username" type="text" placeholder="Username"/>
            <InputForm label="Password" name="password" type="password" placeholder="*****"/>
            <ButtonFunc textcolor="white" classname="w-full bg-blue-500">Login</ButtonFunc>
        </form>
    )
}

export default FormLogin