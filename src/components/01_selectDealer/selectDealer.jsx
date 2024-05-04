import Navbar from '../navbar'
import DealerComp from './dealerComp';
import { useEffect, useState } from 'react'
import axios from 'axios'

const apiCall = async () => {
    const res = await axios.get(`http://localhost:3000/dealers`)
    // console.log(res.data[2].compName)
    return res;
}

const SelectDealer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data: dealers } = await apiCall()
            setData(dealers)
        }
        fetchData()
    }, [])
    return (
        <div className='h-full w-full text-white' style={{ backgroundColor: "#021926" }}>
            {/* {console.log(data)} */}
            <h2 className='font-bold text-xl mb-10 px-40'>1. Select nearest Dealer</h2>
            {data.map((dealer) => {
                return (<DealerComp compName={dealer.compName} dealerAddr={dealer.location} dealerContact={dealer.contact} dealerLink={dealer.link} />)
            })}

        </div >
    )
}

export default SelectDealer;