import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";

export default function DefaultLayout({children}) {
    return (
        <>
        <Navigation/>
        {children}
        <Footer/>
        </>
    );
}