import ButtonFunc from "./components/Elements/Button"
import InputForm from "./components/Elements/Input/index.jsx";

function App() {
    return (<div className="flex justify-center bg-amber-100-500 min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
            <p className="font-medium text-slate-500">Welcome , Please enter </p>
            <form action="">
                <InputForm label="Username" name="username" type="text" placeholder="Username"/>
                <InputForm label="Password" name="password" type="password" placeholder="*****"/>
                <ButtonFunc textcolor="white" classname="w-full bg-blue-500">Login</ButtonFunc>
            </form>
        </div>
    </div>)
}

export default App
