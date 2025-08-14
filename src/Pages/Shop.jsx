import Breadcrumb from "../Components/Breadcrumb";
import SuitedButton from "../Components/SuitedComps/SuitedButton";

export default function Shop() {
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between flex-wrap">
                    <Breadcrumb />

                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="self-end mr-4 sm:mr-6 lg:mr-12 text-white bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 h-fit text-center inline-flex items-center" type="button">
                        Dropdown
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ">
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-wrap justify-left gap-4 px-4 sm:px-6 lg:px-12">
                    {Array.from({ length: 10 }, (_, i) => (
                        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
                            <a href="#">
                                <img className="rounded-t-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Business Tuxedo</h5>
                                <p className="mb-3 font-normal text-gray-700">Buy: $499 | Rent: $299</p>
                                {/* <SuitedButton text={'Button'} /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}