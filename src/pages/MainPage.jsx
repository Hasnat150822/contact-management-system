import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Navigations from "../shared/Navigation";

const MainPage = () => {

    return (
        <>
            <Header />
            <main>
                <Navigations />
                <Outlet />
            </main>
        </>
    )

}

export default MainPage;