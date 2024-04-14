const Navbar = () => {
    return (
        <nav id="nav" className="sticky flex text-white justify-between items-center px-40 py-4 h-20">

            <img src="hamburger.svg" />

            <a href="#"><img src="logo.svg" className="ml-36" /></a>
            <div className="flex gap-10 ">

                <a href="#" ><p className="" style={{fontFamily: "var(--Nunito)"}}>Configure</p></a>
                <a href="#"><p className="" style={{fontFamily: "var(--Nunito)"}}>Enquire</p></a>
            </div>
        </nav>
    )
}

export default Navbar