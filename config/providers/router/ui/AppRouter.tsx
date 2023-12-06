import {memo, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../../routConfig/routConfig";

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={"Loading..."}>
            <Routes>
                {
                    Object.values(routeConfig).map((rout) => {
                        return <Route key={rout.path} element={rout.element} path={rout.path} />
                    })
                }
            </Routes>
        </Suspense>
    );
});