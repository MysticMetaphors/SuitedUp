import { useEffect } from "react";
import SuitedButton from "../Components/SuitedComps/SuitedButton"

export default function Home() {
     useEffect(() => {
        const timerId = setTimeout(() => {
            const toast = document.getElementById('toast-warning')
            toast.classList.add('hidden')
        }, 4000); 

        
        return () => clearTimeout(timerId);
      }, []); 


    return (
        <>
            <div className="w-full h-full px-4 sm:px-6 lg:px-12">
                {/* HERO SECTION */}
                <div className="mt-20 text-center">
                    <h1
                        className="mb-4 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight"
                        style={{
                            backgroundImage:
                                'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                        }}
                    >
                        The Menswear Label Setting Gold Standard For Timeless Tuxedos
                    </h1>
                    <p className="mb-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-normal text-primaryGrey-1000">
                        Designed for life’s defining moments, our tuxedos combine masterful tailoring, premium fabrics, and modern sophistication to ensure you stand apart in every room.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <SuitedButton text="Buy Item" icon="shopping_bag" />
                        <SuitedButton text="Rent Item" theme="secondary" />
                    </div>
                </div>

                {/* FEATURE BOXES */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <a
                        href="#"
                        className="p-6 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                    >
                        <div className="flex gap-3 items-center">
                            <span
                                className="material-symbols-rounded text-white"
                                style={{ fontSize: '40px' }}
                            >
                                straighten
                            </span>
                            <h5 className="text-lg font-bold text-white">Virtual Fitting  & AI Size Recommendation</h5>
                        </div>
                        <p className="mt-2 text-sm text-white">
                            Reduces fitting errors, saves time, and builds confidence for online orders. Could integrate a 3D preview showing how the tux fits on your body type.
                        </p>
                    </a>
                    <a
                        href="#"
                        className="p-6 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                    >
                        <div className="flex gap-3 items-center">
                            <span
                                className="material-symbols-rounded text-white"
                                style={{ fontSize: '40px' }}
                            >
                                shopping_bag
                            </span>
                            <h5 className="text-lg font-bold text-white">Rent Now, Buy Later</h5>
                        </div>
                        <p className="mt-2 text-sm text-white">
                            Try before you commit. Apply part of your rental fee toward purchase if you decide to keep it.
                        </p>
                    </a>
                    <a
                        href="#"
                        className="p-6 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                    >
                        <div className="flex gap-3 items-center">
                            <span
                                className="material-symbols-rounded text-white"
                                style={{ fontSize: '40px' }}
                            >
                                local_shipping
                            </span>
                            <h5 className="text-lg font-bold text-white">Concierge Delivery & On-Site Fitting</h5>
                        </div>
                        <p className="mt-2 text-sm text-white">
                            We deliver, adjust on-site, and pick up after your event — no return hassle.
                        </p>
                    </a>
                    <a
                        href="#"
                        className="p-6 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
                    >
                        <div className="flex gap-3 items-center">
                            <span
                                className="material-symbols-rounded text-white"
                                style={{ fontSize: '40px' }}
                            >
                                groups
                            </span>
                            <h5 className="text-lg font-bold text-white">Event Group Coordination</h5>
                        </div>
                        <p className="mt-2 text-sm text-white">
                            A dedicated stylist manages matching styles, deliveries, and discounts for your whole group.
                        </p>
                    </a>
                </div>

                {/* IMAGE + TEXT SECTIONS */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20 gap-8">
                    <div className="w-full h-64 sm:h-80 lg:h-[500px] rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg')" }}></div>
                    <div className="p-6">
                        <p className="mb-4 text-base sm:text-lg text-primaryGrey-1000">Lorem ipsum</p>
                        <h1
                            className="mb-4 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none tracking-tight"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}
                        >
                            Header
                        </h1>
                        <p className="mb-6 text-base sm:text-lg text-primaryGrey-1000 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, recusandae totam! Nobis dolor rem praesentium error itaque eveniet labore blanditiis odit dignissimos repellat! Nobis vero adipisci necessitatibus, nemo officia aliquid.
                        </p>
                        <SuitedButton text="Redirect Button" />
                    </div>
                </div>

                {/* REVERSED IMAGE + TEXT SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-20 gap-8">
                    <div className="p-6 order-2 md:order-1">
                        <p className="mb-4 text-base sm:text-lg text-primaryGrey-1000">Lorem ipsum</p>
                        <h1
                            className="mb-4 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none tracking-tight"
                            style={{
                                backgroundImage:
                                    'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}
                        >
                            Header
                        </h1>
                        <p className="mb-6 text-base sm:text-lg text-primaryGrey-1000 text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, recusandae totam! Nobis dolor rem praesentium error itaque eveniet labore blanditiis odit dignissimos repellat! Nobis vero adipisci necessitatibus, nemo officia aliquid.
                        </p>
                        <SuitedButton text="Redirect Button" />
                    </div>
                    <div className="w-full h-64 sm:h-80 lg:h-[500px] rounded-lg bg-cover bg-center order-1 md:order-2" style={{ backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg')" }}></div>
                </div>

                {/* FEATURED PRODUCTS */}
                <div className="mt-20">
                    <h1
                        className="mb-10 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none tracking-tight"
                        style={{
                            backgroundImage:
                                'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                        }}
                    >
                        Featured Products
                    </h1>
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, colIndex) => (
                <div key={colIndex} className="grid gap-4">
                    {[...Array(3)].map((_, imgIndex) => (
                        <div key={imgIndex}>
                            <img
                                className="h-auto max-w-full rounded-lg"
                                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${colIndex * 3 + imgIndex}.jpg`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER SECTION */}
                <div className="mt-20 text-center px-4 sm:px-8 py-12">
                    <div className="flex justify-center">
                        <img
                            src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png"
                            className="h-16 sm:h-20 mb-8"
                            alt="Flowbite Logo"
                        />
                    </div>
                    <p className="max-w-4xl mx-auto text-base sm:text-lg text-primaryGrey-1000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam consectetur doloribus officia eligendi incidunt veritatis recusandae nobis debitis nostrum, tenetur pariatur praesentium iste quos beatae, cupiditate ullam a cumque.
                        Ex sint at praesentium aperiam sit eius id eos voluptatem necessitatibus non delectus iure vitae provident odit fuga, quod deserunt quas quia. Architecto dignissimos ullam libero asperiores deserunt non eveniet?
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <SuitedButton text="Buy Item" icon="shopping_bag" />
                        <SuitedButton text="Rent Item" theme="secondary" />
                    </div>
                </div>

                <div id="toast-warning" className="fixed bottom-[10px] right-[10px] flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm" role="alert">
                    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                        </svg>
                        <span className="sr-only">Warning icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">This website is not commercial but a personal project for practice and for portfolio</div>
                    {/* <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-warning" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button> */}
                </div>
            </div>
        </>
    )
}