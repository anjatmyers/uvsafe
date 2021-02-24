import React, {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Exposure from './components/Exposure';
import {Card} from 'react-bootstrap';
import { useHistory } from "react-router-dom";


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
    <body className="backgroundImg" style={{backgroundImage: `url("images/beach.jpg")`}} >

      <div className="container-fluid"> 

    
    <div className="row">

        

        <div className="col m-3" >
      
          {/* <h3>See what your cities UV level falls on the range:</h3> */}
      <div className="row mt-4">

      <div class="col-3 text-white offset-1" >
        {/* style={{backgroundImage: `url("images/umbrella.jpg")`}} */}
      {/* <img src={city.weather.img} class="card-img-top" alt="..."></img> */}
      <div className="card-img-overlay d-flex flex-column align-items-center justify-content-top">
          <div className="card-title m-0 h1">{city.city}</div>
          <img src={city.weather.icon} className=""></img>
          <div className=""><h3>{city.weather.temp} °F</h3></div>
          <div className=""><h3>Cloud Cover: {city.weather.cloudCover}%</h3></div>
          
        </div>
        </div>
        {/* end weather div col-3 */}

        {/* <div className="col-4 ml-5">
      <img className="uvIndex" src="images/uvindexwheel.png"></img>
      </div> */}
      {/* end UV wheel div col-9 */}
      <div className="col-7 ml-4">
                <div className="jumbotron jumbotron-fluid uvCard">
                  <div className="container">
                    <h1 className="display-4">Current UV level: {city.uvData.uvCurrent}</h1>
                    <h1 className="display-5">Max UV level today: {city.uvData.uvMax}</h1>
                    <p className="lead">UV levels typically max out between 10am-2pm during what is refered to as 'solar noon.' Your skin is at greatest risk of damage during this time of the day.</p>
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
              <img className="uvchart" src="images/uvchart.png"></img>
              <div><button type="button" class="btn btn-warning m-2" onClick={routeChange}>How do I protect my skin?</button></div>
            </div>

            
        </div>
       

       </div>
       {/* end row 2 */}
          
        
  

          </div>
        {/* <img src={city.weather.img} class="card-img-top" alt="..."></img> */}
        
        {/* <div className="card-body">
          <h2>Current UV Level: {city.uvData.uvCurrent} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          Max UV Level: {city.uvData.uvMax}</h2>
          <h2></h2>
       
              <ul>
              <Exposure time={city.uvData.safeExposureTime}/>
              
            </ul>
          </div> */}
  

          
      
      </div>
      {/* end of row div */}
      
      </div>
       {/* end of container div */}
    
    </body>
    
  )
}

export default App

{/* style={{backgroundImage: `url("images/umbrella.jpg")`}}  */}
        {/* <div className="card bg-dark col-8 text-white" >
        <img src={city.weather.img} className="" alt="..."></img>
        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
          <h1 className="card-title m-0">{city.city}</h1>
          <img src={city.weather.icon} className=""></img>
          <div className=""><h3>{city.weather.temp} °F</h3></div>
          <div className="card-text"><h3>{city.weather.weatherMain}: {city.weather.weather}</h3></div>
          <div className=""><h3>Cloud Cover: {city.weather.cloudCover}%</h3></div>
          
        </div>
        </div> */}
        {/* end of card div  */}