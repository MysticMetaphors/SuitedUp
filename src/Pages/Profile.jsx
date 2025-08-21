import { useEffect, useState } from "react"
import SuitedDropdown from "../Components/SuitedComps/SuitedDropdown"

export default function Profile() {
    const [history, setHistory] = useState([])
    const [cart, setCart] = useState([])

    const tcart = [
        { purchase_opt: 'Buy', id: 1, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        { purchase_opt: 'Rent', id: 2, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        { purchase_opt: 'Rent', id: 3, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        { purchase_opt: 'Buy', id: 4, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        { purchase_opt: 'Buy', id: 5, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        { purchase_opt: 'Rent', id: 6, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Buy', id: 7, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Rent', id: 8, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Rent', id: 9, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Rent', id: 10, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Buy', id: 11, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
        // { purchase_opt: 'Buy', id: 12, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' },
    ]

    useEffect(() => (
        setCart(tcart)
        // setHistory
    ), [])
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12 overflow-hidden">
                <div className="px-4 sm:px-6 lg:px-50 mt-10">
                    <div className="mb-20">
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
                        {/* <hr className="border border-w-[1px] border-primaryDarkYellow-1000 mb-5" /> */}
                        <div className="my-4 flex justify-between">
                            <div className="flex-row flex">
                                <SuitedDropdown />
                            </div>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead className="text-xs text-white uppercase bg-primaryDarkYellow-1000 mb-5">
                                    <tr>
                                        <th scope="col" className="px-16 py-3">
                                            <span className="sr-only">Image</span>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Qty
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product Option
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => (
                                        <tr className="bg-white border-b">
                                            <td className="p-4">
                                                <img src={item.image} className="w-8 md:w-16 h-8 md:h-16 max-w-full max-h-full" alt="Apple Watch" />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">
                                                {item.title}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                                                        <span className="sr-only">Quantity button</span>
                                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                        </svg>
                                                    </button>
                                                    <div>
                                                        <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1" placeholder="1" required />
                                                    </div>
                                                    <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200" type="button">
                                                        <span className="sr-only">Quantity button</span>
                                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">
                                                ${item.buy}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900">
                                                {item.purchase_opt}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-red-600">Remove</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900">1-10</span> of <span className="font-semibold text-gray-900">1000</span></span>
                            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">3</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
                                </li>
                            </ul>
                        </nav>
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
                    </div>
                </div>
            </div>
        </>
    )
}