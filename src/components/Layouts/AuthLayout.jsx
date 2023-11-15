import {Link} from "react-router-dom";
import {DarkMode} from "../../context/DarkMode.jsx";
import {useContext} from "react";

const AuthLayout = (props) => {
    const {children, title,type} = props

    const {isDarkMode,setIsDarkMode} = useContext(DarkMode);

    return (
        <div className={`flex justify-center bg-amber-100-500 min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
            <div className="w-full max-w-xs">
                <button className="absolute top-4 right-4" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode?"Light":"Dark"}</button>
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
            </div>
        </div>
    )
}
export default AuthLayout