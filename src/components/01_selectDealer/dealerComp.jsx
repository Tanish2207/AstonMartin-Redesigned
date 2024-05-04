import { RiArrowRightLine, RiMapPin2Line, RiPhoneLine } from '@remixicon/react'


const DealerComp = (props) => {
    return (
       
            <div className='px-40 dealerCont'>
                <div className='my-10 flex flex-col gap-4 mx-auto px-8 py-6 rounded-sm' style={{ backgroundColor: "#565656" }}>
                    <div>
                        <h3 className='font-bold text-xl'>{props.compName}</h3>
                        <p className='text-slate-300'>Authorised Dealer</p>
                    </div>
                    <div className='flex gap-2'>
                        <RiMapPin2Line size={22} color='#18C87C' />
                        <p className='text-slate-100'>{props.dealerAddr}</p>
                    </div>
                    <div className='flex gap-2'>
                        <RiPhoneLine size={22} color='#18C87C' />
                        <p className='text-slate-100'>{props.dealerContact}</p>
                    </div>
                    <button className='text-base text-black font-bold px-4 py-3 block rounded-sm selDeaBtn'>Select the Dealer</button>
                    <a href={props.dealerLink} className='flex justify-center items-center gap-1 text-base font-bold px-4 py-3  rounded-sm viewDea-btn'>View Dealer's website <RiArrowRightLine size={22} /></a>

                </div>
            </div>
        
    )
}

export default DealerComp