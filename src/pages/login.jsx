import FormLogin from "../components/Fragments/FormLogin.jsx";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";

const LoginPage = () => {
    return(
        <AuthLayout title="Login">
            <FormLogin />
        </AuthLayout>
    )
}

export default LoginPage