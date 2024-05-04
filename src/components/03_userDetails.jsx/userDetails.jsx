import { useState } from "react";
import Navbar from "../navbar";
import axios from 'axios'




const UserDetails = () => {
    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        contact: "",
        email: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await axios.post("http://localhost:3000/users", formData);

        if (response.status === 200) {
            // Success!
            setIsSubmitted(true)
            console.log(response.data);
        } else {
            // Error!
            console.log(response.statusText);
        }
    };
    if(isSubmitted)
        console.log(isSubmitted);


    return (
        <div className='h-full w-full text-white' style={{ backgroundColor: "#021926" }}>
            <form onSubmit={handleSubmit}>
                <div className='px-40 flex justify-center items-center flex-col gap-3'>
                    <h2 className='font-bold text-xl my-10 self-start'>3. Enter Contact Details</h2>
                    <div className="flex items-center justify-start gap-40 my-4">
                        <div>
                            <h3>First Name: </h3>
                            <input type="text" name="f_name" placeholder="Your first name" value={formData.f_name} onChange={handleChange} className='my-2 flex flex-col gap-4 px-2 py-2 rounded-sm' style={{ backgroundColor: "#565656" }} />
                        </div>
                        <div>
                            <h3>Last Name: </h3>
                            <input type="text" name="l_name" placeholder="Your last name" value={formData.l_name} onChange={handleChange} className='my-2 flex flex-col gap-4 px-2 py-2 rounded-sm' style={{ backgroundColor: "#565656" }} />
                        </div>
                    </div>
                    <div className="my-8">
                        <h3>Email: </h3>
                        <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} className='my-2 flex flex-col gap-4 px-2 py-2 rounded-sm' style={{ backgroundColor: "#565656" }} />
                    </div>
                    <div>
                        <h3>Contact No: </h3>
                        <input type="number" name="contact" placeholder="Your contact no." value={formData.contact} onChange={handleChange} className='my-2 flex flex-col gap-4 px-2 py-2 rounded-sm' style={{ backgroundColor: "#565656" }} />
                    </div>
                <button type="submit" className=" text-black font-black text-xl w-full rounded-lg py-3 mb-4 userSubmitBtn">Submit</button>
                </div>

            </form>
        </div >
    )
}

export default UserDetails;