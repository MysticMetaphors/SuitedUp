import { useEffect, useState } from "react";

export default function ButtonToTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollThreshold = window.innerHeight * 2;
            setVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener("scroll", toggleVisibility);
        toggleVisibility();

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    function toTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        visible && (<button onClick={toTop} type="button" className="fixed z-1000 bottom-[20px] right-[20px] cursor-pointer text-white bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 font-medium rounded-full text-sm p-1 text-center">
            <span className="material-symbols-rounded" style={{ fontSize: '30px' }}>
                keyboard_arrow_up
            </span>
        </button>
        )
    )
}