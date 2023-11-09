import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="flex justify-center bg-amber-100-500 min-h-screen items-center">
                <h1>Error Page</h1>
                <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage