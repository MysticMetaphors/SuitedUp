export default function SuitedSidebar() {
    const colors = [
        { name: "Black", value: "black" },
        { name: "White", value: "white" },
        { name: "Blue", value: "blue" },
        { name: "Red", value: "red" },
        { name: "Green", value: "green" },
        { name: "Yellow", value: "yellow" },
    ];
    function toggleSidebar() {
        const sidebar = document.getElementById('drawer-navigation')
        sidebar.classList.toggle('-translate-x-full')
    }

    return (
        <>
            <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-70 h-screen p-4 overflow-y-show transition-transform -translate-x-full bg-white border-primaryYellow-1000 border-r-2" tabindex="-1" aria-labelledby="drawer-navigation-label">
                <div className="mb-5 flex flex-column gap-5">
                    <img src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" alt="" className="w-10 h-10" />
                                            <span className="self-center text-2xl whitespace-nowrap text-primaryYellow-1000 font-bold hidden md:block sm:hidden">SuitedUp</span>
                </div>
                <button
                    onClick={toggleSidebar}
                    type="button"
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="cursor-pointer absolute -right-9 top-1/2 -translate-y-1/2 text-primaryYellow-1000 rounded-r-lg text-sm pl-0 pr-1 py-1.5 inline-flex items-center bg-white border-primaryYellow-1000 border-y-2 border-r-2"
                >
                    <span className="material-symbols-rounded" style={{ fontSize: "30px" }}>
                        chevron_right
                    </span>
                </button>

                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-4">
                        <li>
                            <h3 className="px-2 text-sm text-gray-600 tracking-wide">
                                Purchase Option
                            </h3>
                            <hr className="my-2 border-black" />
                            <ul className="space-y-2">
                                <li className="flex items-center px-2">
                                    <input
                                        type="checkbox"
                                        className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                    ></span>
                                    <label className="ml-2 text-gray-700">
                                        Buy
                                    </label>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center px-2">
                                    <input
                                        type="checkbox"
                                        className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                    ></span>
                                    <label className="ml-2 text-gray-700">
                                        Rental
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="px-2 text-sm text-gray-600 tracking-wide">
                                Price Range
                            </h3>
                            <hr className="my-2 border-black" />
                            <ul className="space-y-2">
                                <li className="flex items-center px-2">
                                    <input
                                        type="checkbox"
                                        className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                    ></span>
                                    <label className="ml-2 text-gray-700">
                                        $200-$500
                                    </label>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center px-2">
                                    <input
                                        type="checkbox"
                                        className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                    ></span>
                                    <label className="ml-2 text-gray-700">
                                        $700-$1000
                                    </label>
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center px-2">
                                    <input
                                        type="checkbox"
                                        className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span
                                        className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                    ></span>
                                    <label className="ml-2 text-gray-700">
                                        $1000-$1300
                                    </label>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h3 className="px-2 text-sm text-gray-600 tracking-wide">
                                Filter Color
                            </h3>
                            <hr className="my-2 border-black" />
                            <ul className="grid grid-cols-2">
                                {colors.map((color, index) => (
                                    <li key={index} className="flex items-center px-2">
                                        <input
                                            id={color.value}
                                            type="checkbox"
                                            value={color.value}
                                            className="hidden w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <span
                                            className="ml-2 w-3 h-3 rounded-full border border-gray-400"
                                            style={{ backgroundColor: color.value }}
                                        ></span>
                                        <label htmlFor={color.value} className="ml-2 text-gray-700">
                                            {color.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}