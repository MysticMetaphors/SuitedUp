import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
        <Navigation/>
        <div className="min-h-screen">
            <Outlet />
        </div>
        <Footer/>
        </>
    );
}