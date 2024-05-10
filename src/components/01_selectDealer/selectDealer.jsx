import { DealerComp } from './dealerComp';
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { DealerSelection } from '../../contexts/dealerSelection';

const apiCall = async () => {
    const res = await axios.get(`http://localhost:3000/dealers`)
    // console.log(res.data[2].compName)
    return res;
}

export const SelectDealer = () => {


    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data: dealers } = await apiCall()
            setData(dealers)
        }
        fetchData()
    }, [])
    // console.log(data);


    return (
        <div className='h-full w-full pt-20 text-white' style={{ backgroundColor: "#021926" }}>
            {/* {console.log(data)} */}
            <h2 className='font-bold text-xl mb-10 px-40'>1. Select nearest Dealer</h2>
            {data.map((dealer, id) => {
                return (<DealerComp key={dealer._id} compName={dealer.compName} dealerAddr={dealer.location} dealerContact={dealer.contact} dealerLink={dealer.link} />)
            })}

        </div >
    )
}
