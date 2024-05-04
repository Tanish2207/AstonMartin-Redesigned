import { RiMailLine } from "@remixicon/react"

const Footer = () => {
    return (
        <div className="py-16 px-3 flex flex-col md:flex-row md:px-24 md:gap-14" style={{ backgroundColor: "#0A192F", color: "#CFD3D7" }}>


            <div className='md:order-4 md:flex-1 '>
                <h3 className="text-base foot-title md:mb-4">Contact Technical Team</h3>
                <p className='text-sm mb-2'>Want to suggest improvements in website?</p>
                <div className="flex gap-4 flex-wrap md:flex-col md:items-start">
                    <label className="flex items-center justify-center gap-2" style={{ border: "0.8px solid #387AE7", backgroundColor: "#4F5A68" }}>
                        <RiMailLine size={22} />
                        <input type="email" className="grow px-2" placeholder="Email" />
                    </label>
                    <button className="px-2 md:w-32 md:min-h-0 h-10 reqTD-btn rounded-none" style={{ color: "white", border: "none" }}>Submit</button>
                </div>

            </div>
            <hr className="my-4 md:hidden" style={{ border: "1px solid #CFD3D7" }} />


            <div className='md:hidden'>
                <div className="flex justify-center items-center gap-4">
                    <img src="logo.svg" width="40%" className='max-w-32' />
                    <h3 className="foot-title font-bold text-xl">Aston Martin</h3>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <p className='text-sm w-2/3'>With a rich heritage spanning over a century, Aston Martin crafts vehicles that marry cutting-edge technology with timeless design, creating automotive masterpieces that stir the soul.</p>
                    <div className='flex flex-col justify-between gap-1'>
                        <h4 className='foot-title'>Gifts for</h4>
                        <ul>
                            <li>Vantage</li>
                            <li>DBX 707</li>
                            <li>DB11</li>
                            <li>DB12</li>
                            <li>DBS</li>
                            <li>Valour</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-4 md:hidden" style={{ border: "1px solid #CFD3D7" }} />


            {/* md */}
            <div className='hidden md:order-1 md:flex md:flex-col md:items-start md:justify-start md:gap-4 md:flex-1 -mt-6'>
                <div className="flex justify-center items-center gap-4 md:justify-start">
                    <img src="logo.svg" width="42%" className='max-w-32' />
                    <h3 className="foot-title font-bold text-xl">Aston Martin</h3>
                </div>
                <p className='text-sm w-full'>With a rich heritage spanning over a century, Aston Martin crafts vehicles that marry cutting-edge technology with timeless design, creating automotive masterpieces that stir the soul.</p>
                <p className='text-center text-xs pb-4 md:mt-4'>Copyright Aston Martin</p>
            </div>

            {/* md */}
            <div className='hidden md:block md:order-3 md:flex-1 '>
                <div className='flex flex-col justify-between gap-4'>
                    <h4 className='foot-title'>Models</h4>
                    <ul className='text-sm'>
                        <li>Vantage</li>
                        <li>DBX 707</li>
                        <li>DB11</li>
                        <li>DB12</li>
                        <li>DBS</li>
                        <li>Valour</li>
                    </ul>
                </div>
            </div>

            {/* Get in touch */}
            <div className='mb-4 md:order-2 md:flex-1' >
                <h3 className='foot-title mb-4'>Get in touch</h3>
                <div className='grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-5 justify-items-start md:grid-cols-1 md:grid-rows-3 md:gap-4'>
                    <div className="flex justify-center items-center gap-2  row-span-2 ">
                        <svg width="20" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C10.87 0 14 3.13 14 7C14 12.25 7 20 7 20C7 20 0 12.25 0 7C0 3.13 3.13 0 7 0ZM2 7C2 9.85 4.92 14.21 7 16.88C9.12 14.19 12 9.88 12 7C12 4.24 9.76 2 7 2C4.24 2 2 4.24 2 7ZM7 9.5C5.61929 9.5 4.5 8.38071 4.5 7C4.5 5.61929 5.61929 4.5 7 4.5C8.38071 4.5 9.5 5.61929 9.5 7C9.5 8.38071 8.38071 9.5 7 9.5Z" fill="#FECDCA" />
                        </svg>
                        <p className='text-sm'>Aston Martin HQ, California</p>
                    </div>

                    <div className="flex justify-center items-center gap-2 ">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#FECDCA" />
                        </svg>
                        <p className='text-sm'>aston.martin@gmail.com</p>
                    </div>

                    <div className="flex justify-center items-center gap-2 ">
                        <svg width="20" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54V2ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02V14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z" fill="#FECDCA" />
                        </svg>
                        <p className='text-sm'>+91 8433956060</p>
                    </div>
                </div>
            </div>
            <p className='text-center text-xs pb-4 md:hidden'>Copyright Aston Martin</p>
        </div>
    )
}

export default Footer