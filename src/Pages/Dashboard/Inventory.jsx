export default function Inventory() {
    return (
        <>
            <div className="text-black p-4 pb-24 mt-12 h-screen overflow-y-auto overflow-visible">


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-primaryYellow-1000">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Category
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Buy Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rent Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }, (_, i) =>
                                <tr className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600" />
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        Business Tuxedo
                                    </th>
                                    <td className="px-6 py-4 font-semibold text-gray-900 flex items-center">
                                        <span className="mr-2 w-3 h-3 rounded-full border border-gray-400 bg-black"></span>
                                        Black
                                    </td>
                                    {/* <td className="px-6 py-4">
                                        Laptop
                                    </td> */}
                                    <td className="px-6 py-4 text-green-700">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-red-700">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-green-700">
                                        <span className="w-fit font-medium flex items-center px-2.5 py-0.5 rounded bg-green-200 text-green-700 mr-[8px]">
                                            stock
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-black">
                                        205
                                    </td>
                                    <td className="px-6 py-4 flex gap-2">
                                        <button type="button" className="p-1 flex items-center rounded-lg bg-orange-200 text-orange">
                                            <span className="material-symbols-rounded" style={{color: 'darkorange'}}>
                                                stylus
                                            </span>
                                        </button>
                                        <button type="button" className="p-1 flex items-center rounded-lg bg-red-200 text-orange">
                                            <span className="material-symbols-rounded" style={{color: 'red'}}>
                                                delete
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            )}

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
        </>
    )
}