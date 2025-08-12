import SuitedButton from "./SuitedComps/SuitedButton"

export default function Navigation() {
    return (
        <>
            <nav className="bg-white border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl whitespace-nowrap text-primaryYellow-1000 font-bold">SuitedUp</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-primaryGrey-1000 rounded-lg cursor-pointer hover:bg-gray-300 hover:text-black">
                            <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlink:href="#a" y="420" /><use xlink:href="#a" y="840" /><use xlink:href="#a" y="1260" /></g><use xlink:href="#a" y="1680" /></g><use xlink:href="#b" x="247" y="210" /></g><use xlink:href="#c" x="494" /></g><use xlink:href="#d" x="988" /><use xlink:href="#c" x="1976" /><use xlink:href="#e" x="2470" /></g></svg>
                            English (US)
                        </button>
                        <button className="h-full px-3 rounded-full bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 cursor-pointer">
                            Sign Up
                        </button>
                        <button className="ml-2 h-full px-3 rounded-full bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 cursor-pointer">
                            Sign In
                        </button>
                        {/* <SuitedButton text="Sign Up"/> */}
                        <div className="z-50 hidden my-4 text-base list-none bg-gray-700 divide-y divide-gray-600 rounded-lg shadow-sm" id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-600 hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">
                                            <svg aria-hidden="true" className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"><g fill-rule="evenodd"><g stroke-width="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)" /></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" /><path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" /></g></svg>
                                            English (US)
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300">Contact</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-primaryGrey-1000 rounded-lg font-semibold hover:text-black hover:bg-gray-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}