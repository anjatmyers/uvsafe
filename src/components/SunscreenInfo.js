import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


const SuncreenInfo = () => {

    const city = useSelector(state => state.city);

    const [type, setType] = useState();

    const handleTypeChange = (e) => {
        
        let newType = city.uvData.safeExposureTime[e.target.value]

        setType(newType);
    }
    
    
    return (
        <div className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}}>

            <div className="container-fluid">
            <div className="col-11 d-flex flex-column align-items-center justify-content-center">
            <h3 className="mt-4 text-white">What is a safe exposure time for your skin?</h3>
            <div className=" mt-4 d-flex col-7  ">

            <button type="button" className="button type1 m-2" value={0} onClick={handleTypeChange}>Type I</button> 
            <button type="button" className="button type2 m-2" value={1} onClick={handleTypeChange}>Type II</button> 
            <button type="button" className="button type3 m-2" value={2} onClick={handleTypeChange}>Type III</button> 
            <button type="button" className="button type4 m-2" value={3} onClick={handleTypeChange}>Type IV</button> 
            <button type="button" className="button type5 m-2" value={4} onClick={handleTypeChange}>Type V</button> 
            <button type="button" className="button type6 m-2" value={5} onClick={handleTypeChange}>Type VI</button>
            </div>

    <h2 className="text-white mt-4">{type}</h2>
            </div>


            </div>
            {/* end of container div */}

        </div>
    )
}

export default SuncreenInfo