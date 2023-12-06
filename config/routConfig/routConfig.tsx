import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {UsersPage} from "pages/UsersPage";

export enum AppRouts {
    MAIN = "main",
    USERS = "users",
}

type RoutConfigType = Record<AppRouts, string>;

export const  RoutePath: RoutConfigType = {
    [AppRouts.MAIN]: "/",
    [AppRouts.USERS]: "/users"
}

export const routeConfig: Record<AppRouts, RouteProps> = {
        [AppRouts.MAIN]:{
            path: RoutePath.main,
                element: <MainPage/>
        },
        [AppRouts.USERS]: {
            path: RoutePath.users,
                element: <UsersPage/>
        }
};

