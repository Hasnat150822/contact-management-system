import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Navigations from "../shared/Navigation";

const AuthRoutes = () => {

    return (
        <>
            <Header />
            <main>
                <Navigations />
                <article className="mt-3">
                    <Outlet />
                </article>
            </main>
        </>
    )

}

export default AuthRoutes;