import React from 'react'

const Landing = () => {
    return (
        <div className="relative">
            <div className="text-center text-white tracking-tight py-10">
                <p className="text-xl pb-2"> Crafting Dreams, Engineering Excellence:</p>
                <h1 className="text-2xl font-black">Aston Martin, where performance meets excellence</h1>
            </div>

            <div className="flex flex-col gap-12 absolute text-white landing-left">
                <div>
                    <p className="text-2xl">Discover the</p>
                    <p className="text-5xl font-black tracking-wider myAston" style={{fontFamily: "var(--Bilbo)"}}>Aston Martin Vantage</p>
                </div>
                <p className="text-lg text-blue-400">A fusion of luxury and performance</p>
            </div>

            <div className="absolute text-base font-thin flex flex-col gap-2 text-white landing-right">
                <p>A desire to capture the pure human emotion of the driving experience.</p>
                <p>- Aston Martin</p>
            </div>

        </div>
    )
}

export default Landing