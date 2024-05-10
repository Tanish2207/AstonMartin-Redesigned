import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import {Menu} from './menu'
import { useState } from 'react';

export const Navbar = () => {
    const [sidebar, setSideBar] = useState(false)
    console.log(sidebar);
    const openMenu = () => {
        setSideBar(!sidebar)
    };

    return (
        <>
            <Menu sidebar={sidebar} />
            <nav id="nav" className="fixed top-0 w-full flex text-white justify-between items-center px-40 py-4 h-20" style={{ backgroundColor: "#021926" }}>

                {sidebar ? <RiCloseLine onClick={openMenu} /> : <RiMenuLine onClick={openMenu} />
                }

                <a href="/home"><img src="logo.svg" className="ml-36" /></a>
                <div className="flex gap-10 ">

                    <a href="/config" ><p style={{ fontFamily: "var(--Nunito)" }}>Configure</p></a>
                    <a href="/explore"><p style={{ fontFamily: "var(--Nunito)" }}>Explore 3D</p></a>
                </div>
            </nav>
        </>
    )
}
