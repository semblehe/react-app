import ButtonFunc from "./components/Elements/Button"

function App() {
    return (<div className="flex justify-center bg-amber-100-500 min-h-screen items-center">
        <div className="w-full max-w-xs">
            <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
            <p className="font-medium text-slate-500">Welcome , Please enter </p>
            <form action="">
                <div className="mt-4">
                    <label htmlFor="username" className="block text-sm font-medium text-slate-700">Username</label>
                    <div className="mt-1">
                        <input type="text" name="username" id="username" placeholder="Username"
                               className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2"/>
                    </div>
                </div>
                <div className="mt-4 mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                    <div className="mt-1">
                        <input type="text" name="password" id="password" placeholder="Password"
                               className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-slate-300 rounded-md p-2"/>
                    </div>
                </div>
                <ButtonFunc textcolor="white" classname="w-full bg-blue-500">Login</ButtonFunc>
            </form>
        </div>
    </div>)
}

export default App
