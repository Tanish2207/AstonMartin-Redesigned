import { useContext } from "react"
import { DealerSelection } from "../../contexts/dealerSelection"
import { Link } from "react-router-dom"

export const SelectModel = () => {
    const val = useContext(DealerSelection)
    const modelSelectedFunc = () => {
        val[0] = 1
        val[1] = 1;
    }
    return (
        <div className='pt-24 h-screen w-full flex justify-center items-start' style={{ backgroundColor: "#021926" }}>
            <div className="text-white w-full px-40 ">
                <div>
                    <h2 className=" font-bold text-xl mb-8 ">2. Select the Model</h2>
                    <div>
                        <select className="model-dropdwn w-full h-8 rounded-md text-center " name="model-dropdwn" id="model-dropdwn" style={{ border: "1px solid white" }}>
                            <option>Select model</option>
                            <option value="1">DBX707</option>
                            <option value="1">Vantage</option>
                            <option value="1">DB12</option>
                            <option value="1">DBS</option>
                            <option value="1">Valour</option>
                            <option value="1">Valkyrie</option>
                        </select>
                    </div>
                </div>
                <Link to="/tdsteps">
                    <button className="text-white mt-10  w-1/4 rounded-lg py-2 text-lg font-semibold reqTD-btn" onClick={modelSelectedFunc}>Submit</button>
                </Link>
            </div>

        </div>
    )
}
