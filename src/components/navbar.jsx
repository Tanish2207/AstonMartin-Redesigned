// import Menu from "./menu";
// import './menu.css';
// import './model.css';
// import styles from './menu.module.css';


const Navbar = () => {
//  const handle=()=>{
    
//     // document.querySelector("#nav").classList.add("menu");
//     const menuu=document.querySelector(".menu");
//     menuu.style.display="block";
//     };


    return (<>
        {/* <Menu/> */}
        <nav id="nav" className="sticky flex text-white justify-between items-center px-40 py-4 h-20" style={{backgroundColor:"#021926"}}>

            <img src="hamburger.svg"/>

            <a href="#"><img src="logo.svg" className="ml-36" /></a>
            <div className="flex gap-10 ">

                <a href="#" ><p style={{fontFamily: "var(--Nunito)"}}>Configure</p></a>
                <a href="#"><p style={{fontFamily: "var(--Nunito)"}}>Enquire</p></a>
            </div>
        </nav>
    </>
    )
}

export default Navbar