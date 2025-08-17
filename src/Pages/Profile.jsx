export default function Profile() {
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12 overflow-hidden">
                <h1
                    className="text-center my-13 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                    }}
                >
                    Welcome John Doe
                </h1>

                <div className="px-4 sm:px-6 lg:px-50">
                    <div className="mb-20">
                        <h1
                            className="mb-4 bg-clip-text text-transparent text-3xl font-extrabold leading-none tracking-tight"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}
                        >
                            Profile
                        </h1>
                        <hr className="border border-primaryDarkYellow-1000 mb-5" />
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <img
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                alt="Profile"
                                className="w-28 h-28 rounded-full object-cover shadow-lg border-2 border-primaryDarkYellow-1000"
                            />

                            <div className="text-left">
                                <ul className="text-gray-700 space-y-2 w-full">
                                    <li className="flex flex-row sm:flex-row sm:items-center">
                                        <span className="font-semibold w-30">Name:</span>
                                        <span>John Doe</span>
                                    </li>
                                    <li className="flex flex-row sm:flex-row sm:items-center">
                                        <span className="font-semibold w-30">Email:</span>
                                        <span>johndoe@gmail.com</span>
                                    </li>
                                    <li className="flex flex-row sm:flex-row sm:items-center">
                                        <span className="font-semibold w-30">Address:</span>
                                        <span>Manila, Philippines</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h1
                            className="mb-4 bg-clip-text text-transparent text-3xl font-extrabold leading-none tracking-tight"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}
                        >
                            My Cart
                        </h1>
                        <hr className="border border-w-[1px] border-primaryDarkYellow-1000 mb-5" />
                        <div className="space-y-4">
                            {/* Order Item */}
                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1001</p>
                                <p className="text-sm text-gray-500">Placed on Aug 10, 2025</p>
                                <p className="text-green-600 font-medium">Delivered</p>
                                <p className="text-gray-700 mr-10">₱1,500</p>
                                <button type="button" className="cursor-pointer text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                                    <span class="material-symbols-rounded">
                                        close
                                    </span>
                                </button>
                            </div>

                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1002</p>
                                <p className="text-sm text-gray-500">Placed on Aug 15, 2025</p>
                                <p className="text-green-600 font-medium">Delivered</p>
                                <p className="text-gray-700 mr-10">₱2,300</p>
                                <button type="button" className="cursor-pointer text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                                    <span class="material-symbols-rounded">
                                        close
                                    </span>
                                </button>
                            </div>

                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1003</p>
                                <p className="text-sm text-gray-500">Placed on Aug 17, 2025</p>
                                <p className="text-red-600 font-medium">Failed</p>
                                <p className="text-gray-700 mr-10">₱850</p>
                                <button type="button" className="cursor-pointer text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                                    <span class="material-symbols-rounded">
                                        close
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h1
                            className="mb-4 bg-clip-text text-transparent text-3xl font-extrabold leading-none tracking-tight"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}
                        >
                            Order History
                        </h1>
                        <hr className="border border-w-[1px] border-primaryDarkYellow-1000 mb-5" />
                        <div className="space-y-4">
                            {/* Order Item */}
                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1001</p>
                                <p className="text-sm text-gray-500">Placed on Aug 10, 2025</p>
                                <p className="text-green-600 font-medium">Delivered</p>
                                <p className="text-gray-700 mr-10">₱1,500</p>

                            </div>

                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1002</p>
                                <p className="text-sm text-gray-500">Placed on Aug 15, 2025</p>
                                <p className="text-yellow-600 font-medium">Pending</p>
                                <p className="text-gray-700 mr-10">₱2,300</p>
                            </div>

                            <div className="p-4 bg-white rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <img src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" className="h-20 w-20" />
                                <p className="font-semibold text-gray-800">Order #1003</p>
                                <p className="text-sm text-gray-500">Placed on Aug 17, 2025</p>
                                <p className="text-red-600 font-medium">Cancelled</p>
                                <p className="text-gray-700 mr-10">₱850</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}