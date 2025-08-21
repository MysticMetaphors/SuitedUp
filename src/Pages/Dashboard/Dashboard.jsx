import { useEffect, useState } from "react";
import DataArea from "../../Components/Dashboard/DataArea";
import DataDisplay from "../../Components/Dashboard/DataDisplay";
import DataPie from "../../Components/Dashboard/DataPie";

export default function Dashboard() {
    const [cart, setCart] = useState([])

    const tcart = [
        { purchase_opt: 'Buy', id: 1, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 600 },
        { purchase_opt: 'Rent', id: 2, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 545 },
        { purchase_opt: 'Rent', id: 3, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 502 },
        { purchase_opt: 'Buy', id: 4, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 495 },
        { purchase_opt: 'Buy', id: 5, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 478 },
        { purchase_opt: 'Buy', id: 1, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299' , count: 410},
        { purchase_opt: 'Rent', id: 2, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 399 },
        { purchase_opt: 'Rent', id: 3, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 360 },
        { purchase_opt: 'Buy', id: 4, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 200 },
        { purchase_opt: 'Buy', id: 5, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299', count: 180 },
    ]

    useEffect(() => (
        setCart(tcart)
        // setHistory
    ), [])

    const data = [
        {
            name: "Buy",
            color: "#31C48D",
            data: ["1420", "1620", "1820", "1420", "1650", "2120"],
        },
        {
            name: "Rent",
            data: ["788", "810", "866", "788", "1100", "1200"],
            color: "#F05252",
        }
    ]
    return (
        <>
            <div className="text-black p-4 pb-24 mt-12 h-screen overflow-y-auto overflow-visible">
                <div className="flex flex-row gap-5">
                    <DataDisplay text="Buy profit" sign="$" />
                    <DataDisplay text="Rent profit" sign="$" />
                    <DataDisplay text="Total transaction" />
                    <DataDisplay text="Traffic this week" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-5">
                    <DataArea id={'area-1'} type={'area'} series={data}>
                        <div className="flex justify-between border-gray-200 border-b pb-3">
                            <dl>
                                <dt className="text-base font-normal text-gray-500 pb-1">Profit</dt>
                                <dd className="leading-none text-3xl font-bold text-gray-900">$5,405</dd>
                            </dl>
                            <div>
                                <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                                    </svg>
                                    Profit rate 23.5%
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 py-3">
                            <dl>
                                <dt className="text-base font-normal text-gray-500 pb-1">Buy</dt>
                                <dd className="leading-none text-xl font-bold text-green-500">$23,635</dd>
                            </dl>
                            <dl>
                                <dt className="text-base font-normal text-gray-500 pb-1">Rent</dt>
                                <dd className="leading-none text-xl font-bold text-green-500">$18,230</dd>
                            </dl>
                        </div>
                    </DataArea>
                    <DataPie id={'area-2'} type={'pie'} series={[80, 20]} labels={['Buy', 'Rent']} >
                        <div className="flex justify-between border-gray-200 border-b pb-3">
                            <dl>
                                <dt className="text-base font-normal text-gray-500 pb-1">Purchase Mode Ratio</dt>
                                {/* <dd className="leading-none text-3xl font-bold text-gray-900">$5,405</dd> */}
                            </dl>
                            <div>
                                <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md">
                                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                                    </svg>
                                    Profit rate 23.5%
                                </span>
                            </div>
                        </div>
                    </DataPie>
                </div>

                <div className="flex mt-5">
                    <div className="self-start w-full bg-white rounded-lg shadow-sm">
                        <div className="border-gray-200 border-b p-4 md:p-6 ">
                            {/* <dt className="text-base font-normal text-gray-500 pb-1">Profit</dt> */}
                            <h1 className="leading-none text-3xl font-bold text-gray-900">Top Selling Products</h1>
                        </div>
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-white bg-primaryYellow-1000 uppercase mb-5">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Id
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Buy Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rent Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr className="bg-white border-b border-gray-200 hover:bg-gray-200">
                                         <td className="px-6 py-4 font-semibold text-gray-900">
                                            {item.id}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 flex items-center">
                                            <span className="mr-2 w-3 h-3 rounded-full border border-gray-400 bg-black"></span>
                                            Black
                                        </td>
                                        <td className="px-6 py-4 text-green-700">
                                            ${item.buy}
                                        </td>
                                        <td className="px-6 py-4 text-red-700">
                                            ${item.rent}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">
                                            {item.count}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}