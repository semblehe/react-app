
import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormRegister from "../components/Fragments/FormRegister.jsx";

const RegisterPage = () => {
    return(
        <AuthLayout title="Register">
            <FormRegister />
        </AuthLayout>
    )
}

export default RegisterPage