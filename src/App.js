import React, {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Exposure from './components/Exposure';
import {Card} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Weather from './components/Weather'


const App = (props) => {

  // const [uvData, setUvData] = useState([]);
  const city = useSelector(state => state.city);
  
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/sunscreen`; 
    history.push(path);
  }
  

  useEffect(() => {
    const setData = async () => {
    
      console.log(city)
      
    };
    setData();
  }, []);




  return (
    <div className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}} >

      <div className="container-fluid"> 

    
      <div className="row">


        <div className="col m-3" >
            <div className="row mt-4z">

          <div className="col-3 text-white offset-1" >
      
            <Weather city={city}/>
          </div>
        {/* end weather component div col-3 */}

      {/* end UV wheel div col-9 */}
      <div className="col-7 ml-4 mt-5">
                <div className="jumbotron jumbotron-fluid uvCard">
                  <div className="container">
                    <h1 className="display-4">Current UV level: {city.uvData.uvCurrent}</h1>
                    <h1 className="display-5">Max UV level today: {city.uvData.uvMax}</h1>
                    <p className="lead">UV levels are typically at a max between 10am-2pm during what is refered to as 'solar noon.' Your skin is at greatest risk of damage during this time of the day.</p>
                  </div>
            </div>
      </div>
      {/* end jumbotron div */}

     
        </div>
        {/* end row1 */}
       
       <div className="row d-flex justify-content-center mt-5">

        <div className=" mx-5"> 
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white">What does precautions are necessary in this range?</h3>
              <div className="col-10 d-flex flex-column justify-content-center align-items-center">
              
                <div> <img className="uvchart" src="images/uvchart.png"></img></div>
            
                  <div className="col-10 d-flex bg-grey">
                    <div className="m-1">
                      <span className="low bold"> No protection needed.</span>
                    </div>
                    <div className="m-1">
                      <span className="moderate bold"> Some protection is required.</span>
                    </div>
                    <div className="m-1">
                      <span className="high bold"> Protection is essential.</span>
                    </div>
                    <div className="m-1">
                      <span className="veryHigh bold"> Extra protection required.</span>
                    </div>
                    <div className="m-1">
                      <span className="extreme bold"> Stay home.</span>
                    </div>
                  </div>
              </div>
              
              <div><button type="button" className="btn btn-warning mt-4 m-2" onClick={routeChange}>How do I protect my skin?</button></div>
            </div>
            {/* end precautions div */}

            
        </div>
       

       </div>
       {/* end row 2 */}
          
    
          </div>
        
      </div>
      {/* end of outside row div */}
      
      </div>
       {/* end of container div */}
    
    </div>
    
  )
}

export default App

