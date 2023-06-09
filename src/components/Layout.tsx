import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="font-poppins text-xs">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
