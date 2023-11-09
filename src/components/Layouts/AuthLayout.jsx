import {Link} from "react-router-dom";

const AuthLayout = (props) => {
    const {children, title,type} = props
    return (
        <div className="flex justify-center bg-amber-100-500 min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className="font-medium text-slate-500">Welcome , Please enter </p>
                {children}

                <p className="text-sm">
                    {type==='login'? "Don't have an account? ": "Already have an account? "}
                    {type==='login' && (
                        <Link to="/register" className="font-bold text-blue">Daftar</Link>
                    )}

                    {type==='register' && (
                        <Link to="/login" className="font-bold text-blue">Login</Link>
                    )}


                </p>

                {/*<p className="text-sm"><Link to="/register" className="font-bold text-blue">Daftar Akun?</Link></p>*/}
            </div>
        </div>
    )
}
export default AuthLayout