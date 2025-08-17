import { Link } from "react-router-dom"

export default function ProfileDropdown() {

    function toggleProfile() {
        const prof = document.getElementById('dropdownAvatarName')
        prof.classList.toggle('hidden')
    }

    return (
        <>
            <div className="relative">
                <button onClick={toggleProfile} id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-primaryGrey-1000 rounded-full cursor-pointer" type="button">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 me-2 rounded-full" src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" alt="user photo" />
                </button>

                <div id="dropdownAvatarName" className="absolute right-0 mt-2 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <div className="px-4 py-3 text-sm text-gray-900">
                        <div className="font-medium ">Pro User</div>
                        <div className="truncate">name@flowbite.com</div>
                    </div>
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                        <li>
                            <Link to={'/dashboard'} className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                        </li>
                        <li>
                            <Link to={'/profile'} className="block px-4 py-2 hover:bg-gray-100">My Profile</Link>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cart</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                    </div>
                </div>
            </div>
        </>
    )
}