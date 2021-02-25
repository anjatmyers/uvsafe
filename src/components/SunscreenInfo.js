import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Weather from './Weather';
import {Carousel} from 'react-bootstrap'


const SuncreenInfo = () => {

    const city = useSelector(state => state.city);

    const [type, setType] = useState();
    const [minutes, setMinutes] = useState();
    const [clicked, setClicked] = useState(false);
    const [skinType, setSkinType] = useState('');
    const uvLevel = city.uvData.uvCurrent
    

    const handleTypeChange = (e) => {
        
        let newType = city.uvData.safeExposureTime[e.target.value]
        let newMinutes = city.uvData.vitDArr[e.target.value]
        let skinType = ['Type I', 'Type II', 'Type III', 'Type IV', 'Type V', 'Type VI']

        setSkinType(skinType[e.target.value])
        setClicked(true);
        setType(newType);
        setMinutes(newMinutes);
    }
    
    
    return (
        <div className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}}>

            <div className="container-fluid">

            <div className="col-3 text-white d-flex flex-column" >

                <div className="col"> <Weather city={city}/></div>
            
  
            </div>

            

            <div className="col-8 offset-3  d-flex flex-column align-items-center justify-content-center">


            <div className=" mt-5 d-flex col-10 ">

            <button type="button" className="button type1 m-2" value={0} onClick={handleTypeChange}>Type I</button> 
            <button type="button" className="button type2 m-2" value={1} onClick={handleTypeChange}>Type II</button> 
            <button type="button" className="button type3 m-2" value={2} onClick={handleTypeChange}>Type III</button> 
            <button type="button" className="button type4 m-2" value={3} onClick={handleTypeChange}>Type IV</button> 
            <button type="button" className="button type5 m-2" value={4} onClick={handleTypeChange}>Type V</button> 
            <button type="button" className="button type6 m-2" value={5} onClick={handleTypeChange}>Type VI</button>
            </div>

            <div className="d-flex justify-content-center align-items-end">
                {/* end skin type div */}
            <div className="jumbotron mt-5">
                <h2 className="display-4">{type}</h2>
                <p className="lead"> <span>{clicked ? `Is the safe amount of sun exposure for ${skinType} skin given a ${uvLevel} UV level.` : "Select a skin type above for more information"} </span></p>
                <hr className="my-4"></hr>
                <h2 className="display-4">{minutes}</h2>
                <p className="lead"> <span>{clicked ? `Is how long it takes ${skinType} skin to get their entire daily dose vitamin D given a ${uvLevel} UV level.` : ''}</span> </p>
              
                </div>

                </div>
            
            </div>
            
            

            </div>
            {/* end of container div */}

        </div>
    )
}

export default SuncreenInfo