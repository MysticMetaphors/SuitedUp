import { Link, Outlet } from "react-router-dom";
import ProfileDropdown from "../../Components/ProfileDropdown";
import SuitedButton from "../../Components/SuitedComps/SuitedButton";
import Breadcrumb from "../../Components/Breadcrumb";

export default function DashboardLayout() {
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <Link to={'/'} className="flex ms-2 md:me-24">
                                <img src="Blue and Black Modern Gradient Software Development Technology Logo (3).png" className="h-8 w-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-2xl whitespace-nowrap text-primaryYellow-1000 font-bold hidden md:block sm:hidden">SuitedUp</span>
                            </Link>
                            <Breadcrumb is_header={false}/>
                        </div>
                        <div className="flex items-center">
                            {/* <SuitedButton icon={'add_box'} theme={'transparent'} text={''}/> */}
                            {/* <SuitedButton icon={'person_add'} theme={'transparent'} text={''}/> */}
                            {/* <SuitedButton icon={'inventory_2'} theme={'transparent'} text={''}/> */}
                            <div className="flex items-center ms-3">
                                <ProfileDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                    <ul className="space-y-2 ">
                        <li>
                            <Link to={'/dashboard'} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    dashboard
                                </span>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/inventory'} className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    inventory
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Inventory</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    delivery_truck_speed
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Order</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    notifications
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    manage_accounts
                                </span>
                                <span className="ms-3">User</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    settings
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-primaryGrey-1000 rounded-lg">
                                <span className="material-symbols-rounded shrink-0 w-5 h-5 text-primaryDarkYellow-1000 transition duration-75">
                                    logout
                                </span>
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 h-screen sm:ml-64">
                <Outlet />
            </div>
        </>
    )
}