import React, {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {v1 as uuidv1} from 'uuid';
import Exposure from './components/Exposure';
import {Card} from 'react-bootstrap';
import Footer from './components/layout/Footer';



const App = (props) => {

  // const [uvData, setUvData] = useState([]);
  const city = useSelector(state => state.city);
  
  

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
      <div className="row">


      <div class="col-3 text-white" >
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

      <div className="col-9">
        <div className="row">
            <div className="col-2"> <h3>Current UV Level: {city.uvData.uvCurrent}</h3></div>
            <img className="col-6 uvIndex" src="images/uvindexwheel.png"></img>
            <div className="col-2"><h3>Max UV Level: {city.uvData.uvMax}</h3></div>
        </div>
        {/* end mini uv wheel row */}
      </div>
      {/* end UV wheel div col-9 */}
        </div>
        {/* end row1 */}
       
       <div className="row mt-5">

        <div className="col-5 mx-5"> <h3>What does precautions are necessary under this range?</h3>
            <div><img className="uvchart" src="images/uvchart.png"></img></div>
        </div>
       
       <div className="col-5 ml-5">
            <h3>Safe exposure level for skin tone?</h3>
            <div><img className="skintone" src="images/skintonescale.png"></img></div>
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