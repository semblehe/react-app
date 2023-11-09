import FormLogin from "../components/Fragments/FormLogin.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

const LoginPage = () => {
    return(
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage