import { RiArrowRightLine, RiMapPin2Line, RiPhoneLine } from '@remixicon/react'
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { DealerSelection } from '../../contexts/dealerSelection';
export const DealerComp = (props) => {
    const val = useContext(DealerSelection)
    // console.log(val);
    const DealerSelectedFunc = () => {
        val[0] = 1;
    }

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
                <Link to="/tdsteps" ><button className='w-full text-base text-black font-bold px-4 py-3 block rounded-sm selDeaBtn' onClick={DealerSelectedFunc}>Select the Dealer</button></Link>
                <a href={props.dealerLink} className='flex justify-center items-center gap-1 text-base font-bold px-4 py-3  rounded-sm viewDea-btn'>View Dealer's website <RiArrowRightLine size={22} /></a>

            </div>
        </div>

    )
}
