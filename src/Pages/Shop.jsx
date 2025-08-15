import Breadcrumb from "../Components/Breadcrumb";
import SuitedButton from "../Components/SuitedComps/SuitedButton";
import SuitedDropdown from "../Components/SuitedComps/SuitedDropdown";

export default function Shop() {
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between flex-wrap">
                    <Breadcrumb />
                    <SuitedDropdown setClass="self-end"/>
                </div>
                <div className="flex flex-wrap justify-left gap-4 px-4 sm:px-6 lg:px-12 mb-10">
                    {Array.from({ length: 20 }, (_, i) => (
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