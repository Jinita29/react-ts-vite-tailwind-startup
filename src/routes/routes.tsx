import Error from "../components/common/Error";
import Login from "../pages/auth/Login";
import Home from '../pages/main/Home';
import { ROUTE_AUTH, ROUTE_MAIN } from "./baseRoute";

interface PathRoute {
    path: string,
    component: JSX.Element
}

export const AuthRoutes: PathRoute[] = [
    {
        path: ROUTE_AUTH.LOGIN,
        component: <Login />
    },
    {
        path: '*',
        component: <Login />
    }
]

export const MainRoutes: PathRoute[] = [
    {
        path: ROUTE_MAIN.HOME,
        component: <Home />
    },
    {
        path: '*',
        component: <Error />
    }
]