export default function Footer() {
    return (
        <>
            <footer className="p-4 bg-transparent-100 sm:p-6">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <img src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" className="mr-3 h-10 w-10" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-primaryDarkYellow-1000 uppercase">QUICK LINKS</h2>
                                <ul className="text-primaryGrey-1000">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Home</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Shop</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Styles</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Men's Ware</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Women's Ware</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-primaryDarkYellow-1000 uppercase">Follow us</h2>
                                <ul className="text-primaryGrey-1000">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Socials 1</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Socials 2</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Socials 3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Socials 4</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-primaryDarkYellow-1000 uppercase">Legal</h2>
                                <ul className="text-primaryGrey-1000">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-primaryYellow-1000 sm:mx-full lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="#" className="hover:underline">SuitedUp™</a>. All Rights Reserved.</span>
                    </div>
            </footer>  
        </>
    )
}