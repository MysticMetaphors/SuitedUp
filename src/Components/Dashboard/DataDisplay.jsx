export default function DataDisplay({text = 'text', sign}) {

    return (
        <>
            <div className="max-w-sm w-full bg-white rounded-lg shadow-sm p-4 md:p-6">
                <div className="flex justify-between">
                    <div>
                        <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2">{sign}12,423</h5>
                        <p className="text-base font-normal text-gray-500">{text}</p>
                    </div>
                    <div
                        className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        23%
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}