import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return <div>
        <h1>Error Page</h1>
        <Link to='/home'> Home </Link>
    </div>
}

export default ErrorPage;