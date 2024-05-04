import React from 'react'
import Navbar from '../navbar'

const Landing = () => {
    return (
        <div className=" grid grid-cols-8 grid-rows-8 h-screen w-screen">
            

            <div className="col-start-3 col-span-4 row-start-2 text-center text-white tracking-tight py-10">
                <p className="text-xl pb-2"> Crafting Dreams, Engineering Excellence:</p>
                <h1 className="text-2xl font-black">Aston Martin, where performance meets passion</h1>
            </div>

            <div className="col-start-2 col-span-3 row-start-5 flex flex-col gap-12 text-white landing-left">
                <div>
                    <p className="text-2xl">Discover the</p>
                    <p className="text-5xl font-black tracking-wider myAston" style={{ fontFamily: "var(--Bilbo)" }}>Aston Martin Vantage</p>
                </div>
                <p className="text-lg text-blue-400">A fusion of luxury and performance</p>
            </div>

            <div className="row-start-6 row-span-3 col-start-6 col-span-2 text-base font-thin flex flex-col gap-2 text-white landing-right">
                <p>A desire to capture the pure human emotion of the driving experience.</p>
                <p>- Aston Martin</p>
            </div>

        </div>
    )
}

export default Landing;