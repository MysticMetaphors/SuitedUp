export default function Footer() {
    return (
        <>
            {/* <footer className="w-full p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 bg-white border-gray-600">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer> */}
            <footer className="p-4 bg-transparent-100 sm:p-6">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <img src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" className="mr-3 h-10" alt="FlowBite Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
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
                                        <a href="" className="hover:underline">Socials 1</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="" className="hover:underline">Socials 2</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="" className="hover:underline">Socials 3</a>
                                    </li>
                                    <li>
                                        <a href="" className="hover:underline">Socials 4</a>
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
                    <hr className="my-6 border-primaryYellow-1000 sm:mx-auto lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="#" className="hover:underline">SuitedUp™</a>. All Rights Reserved.</span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900">
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}