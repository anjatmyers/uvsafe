import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Weather from './Weather';


const SuncreenInfo = () => {

    const city = useSelector(state => state.city);

    const [type, setType] = useState();
    const [minutes, setMinutes] = useState();
    const [clicked, setClicked] = useState(false);
    

    const handleTypeChange = (e) => {
        
        let newType = city.uvData.safeExposureTime[e.target.value]
        let newMinutes = city.uvData.vitDArr[e.target.value]

        setClicked(true);
        setType(newType);
        setMinutes(newMinutes);
    }
    
    
    return (
        <div className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}}>

            <div className="container-fluid">

            <div className="col-3 text-white " >
       
                <Weather city={city}/>

  
            </div>

            <div className="col-10 offset-1 d-flex flex-column align-items-center justify-content-center">
            {/* <h3 className="mt-5"> <span className="skintypeHeading">Select a skin type to learn more:</span> </h3> */}
            <div className=" mt-5 d-flex col-7 ">

            <button type="button" className="button type1 m-2" value={0} onClick={handleTypeChange}>Type I</button> 
            <button type="button" className="button type2 m-2" value={1} onClick={handleTypeChange}>Type II</button> 
            <button type="button" className="button type3 m-2" value={2} onClick={handleTypeChange}>Type III</button> 
            <button type="button" className="button type4 m-2" value={3} onClick={handleTypeChange}>Type IV</button> 
            <button type="button" className="button type5 m-2" value={4} onClick={handleTypeChange}>Type V</button> 
            <button type="button" className="button type6 m-2" value={5} onClick={handleTypeChange}>Type VI</button>
            </div>

            <div className="d-flex justify-content-center">
            <div className="jumbotron ml-5 mt-5">
                <h2 className="display-4">{type}</h2>
                <p className="lead"> <span>{clicked ? 'This is the length of sun exposure that is safe for this skin type given the current UV level.' : "Select a skin type above for more information"} </span></p>
                <hr className="my-4"></hr>
                <h2 className="display-4">{minutes}</h2>
                <p className="lead"> <span>{clicked ? 'This is how long it would take this skin type to get sufficient daily vitamin D given the current UV level.' : ''}</span> </p>
              
                </div>

                </div>
            
            </div>
            
            

            </div>
            {/* end of container div */}

        </div>
    )
}

export default SuncreenInfo