export default function Unauthorized() {
    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12 overflow-hidden">
                <div className="flex flex-col items-center justify-center text-center mt-40">
                    <h1
                        className="mb-4 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                        style={{
                            backgroundImage:
                                'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                        }}
                    >
                        Unauthorized Access
                    </h1>
                    <p className="mt-4 text-lg text-primaryGrey-1000">
                        You don’t have permission to view this page.
                    </p>
                    <Link
                        to="/"
                        className="mt-6 px-6 font-medium py-3 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 text-white rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>
    )
}