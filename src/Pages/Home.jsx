import SuitedButton from "../Components/SuitedComps/SuitedButton"

export default function Home() {
    return (
        <>
            <div className="w-full h-full px-35">
                {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center"> */}
                <div className=" mt-20 text-center">
                    <h1 className="mb-4 bg-clip-text text-transparent text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                        }}>
                        The Menswear Label Setting Gold Standard For Timeless Tuxedos
                    </h1>
                    <p className="mb-6 mx-50 text-lg font-normal text-primaryGrey-1000 lg:text-xl">Designed for life’s defining moments, our tuxedos combine masterful tailoring, premium fabrics, and modern sophistication to ensure you stand apart in every room.</p>
                    <SuitedButton text="Buy Item" icon="shopping_bag" />
                    <SuitedButton text="Rent Item" theme="secondary" />
                </div>
                {/* <div></div>
                </div> */}
                <div className="mt-15 flex gap-[8px]">
                    {Array.from({ length: 4 }, (_, i) => (
                        <a href="#" className="block max-w-sm p-6 bg-gradient-to-r from-primaryYellow-1000 to-primaryDarkYellow-1000  border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                            <div className="flex gap-[8px] items-center">
                                <span className="material-symbols-rounded" style={{ fontSize: '50px' }}>settings</span>
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-white">Ready to Ship, Free</h5>
                            </div>
                            <p className="font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </a>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-23">
                    <div className="w-full h-[500px] rounded-lg bg-[url('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg')] bg-cover bg-center"></div>
                    <div className="p-18 h-[500px]">
                        <h1 className="mb-8 bg-clip-text text-transparent text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}>Header</h1>
                        <p className="mb-6 text-lg font-normal text-primaryGrey-1000 text-justify lg:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, recusandae totam! Nobis dolor rem praesentium error itaque eveniet labore blanditiis odit dignissimos repellat! Nobis vero adipisci necessitatibus, nemo officia aliquid.
                        </p>
                        <SuitedButton text="Redirect Button" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center h-screen mt-16">
                    <div className="p-18 h-[500px]">
                        <h1 className="mb-8 bg-clip-text text-transparent text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
                            style={{
                                backgroundImage: 'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                            }}>Header</h1>
                        <p className="mb-6 text-lg font-normal text-primaryGrey-1000 text-justify lg:text-xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, recusandae totam! Nobis dolor rem praesentium error itaque eveniet labore blanditiis odit dignissimos repellat! Nobis vero adipisci necessitatibus, nemo officia aliquid.
                        </p>
                        <SuitedButton text="Redirect Button" />
                    </div>
                    <div className="w-full h-[500px] rounded-lg bg-[url('https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="mt-18">
                    <h1 className="mb-10 bg-clip-text text-transparent text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(to right, #E8C068 30%, #D19C46 25%, #E8C068 50%, #D19C46 75%)'
                        }}
                    >Featured Products</h1>
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
                <div className="mt-14 text-center p-40">
                    <div className="flex justify-center">
                        <img src="./Blue and Black Modern Gradient Software Development Technology Logo (3).png" className="h-20 mb-8" alt="Flowbite Logo" />
                    </div>
                    <p className="text-lg font-normal text-primaryGrey-1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam consectetur doloribus officia eligendi incidunt veritatis recusandae nobis debitis nostrum, tenetur pariatur praesentium iste quos beatae, cupiditate ullam a cumque.
                    Ex sint at praesentium aperiam sit eius id eos voluptatem necessitatibus non delectus iure vitae provident odit fuga, quod deserunt quas quia. Architecto dignissimos ullam libero asperiores deserunt non eveniet?</p>
                    <div className="flex gap-[8px] w-full justify-center mt-10">
                        <SuitedButton text="Buy Item" icon="shopping_bag" />
                        <SuitedButton text="Rent Item" theme="secondary" />
                    </div>
                </div>
            </div>
        </>
    )
}