import { useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import SuitedDropdown from "../Components/SuitedComps/SuitedDropdown";
import SuitedSidebar from "../Components/SuitedComps/SuitedSidebar";

export default function Shop() {
    const [items, setItems] = useState([])
    const tux = [
        {id: 1, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 2, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 3, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 4, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 5, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 6, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 7, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 8, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 9, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 10, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 11, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
        {id: 12, image: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg', title: 'Business Tuxedo', buy: '499', rent: '299'},
    ]
    useEffect(() => (
        setItems(tux)
    ),[])
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12">
                <SuitedSidebar />
                <div className="flex justify-between flex-wrap my-5">
                    <Breadcrumb />
                    <SuitedDropdown setClass="self-end"/>
                </div>
                <div className="flex flex-wrap justify-left gap-4 px-4 sm:px-6 lg:px-12 mb-10">
                    {items.map((item) => (
                        <div className="max-w-[318px] bg-white border border-gray-200 rounded-lg shadow-sm mt-4">
                            <a href="#">
                                <img className="rounded-t-lg" src={item.image} alt="" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title} {item.id}</h5>
                                <p className="mb-3 font-normal text-gray-700">Buy: ${item.buy} | Rent: ${item.rent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}