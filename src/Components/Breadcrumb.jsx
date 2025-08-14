export default function Breadcrumb() {
    return (
        <>
            <div className="px-4 sm:px-6 lg:px-12">
                <h1
                    className="mb-4 bg-clip-text text-transparent text-3xl md:text-3xl font-extrabold leading-none tracking-tight"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                    }}
                >
                    Gentelmen's Ware
                </h1>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-primaryGrey-1000 hover:text-primaryDarkYellow-1000"
                            >
                                <svg
                                    className="w-3 h-3 me-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-primaryGrey-1000 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <a
                                    href="#"
                                    className="ms-1 text-sm font-medium text-primaryGrey-1000 hover:text-primaryDarkYellow-1000 md:ms-2"
                                >
                                    Shop
                                </a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-primaryGrey-1000 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="ms-1 text-sm font-medium text-primaryGrey-1000 hover:text-primaryDarkYellow-1000 md:ms-2 cursor-pointer">
                                    Gentelmen's Ware
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </>
    )
}