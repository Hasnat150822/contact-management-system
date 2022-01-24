import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigations from "../Navigation";

const Main = () => {

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

export default Main;