import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addCity} from '../../actions/actions'
import { Link } from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {v1 as uuidv1} from 'uuid'


const Header = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

    
        getWeather(city);
        console.log('calling weather API')
        
    }
    
    const getWeather = async(city) => {
        
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=96b7161f2b268a361ae1242c3f78e823`;
        const response = await fetch(weatherURL);
        const data = await response.json();
    
        console.log(data)
        let lat = data.coord.lat
        let lon = data.coord.lon
        let cloudCover = data.clouds.all
        let weather = data.weather[0].description
        let weatherIcon = data.weather[0].icon
        let iconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        let weatherMain = data.weather[0].main
        let weatherNoSpaces = weather.split(" ").join("")
        let weatherImg = `images/${weatherNoSpaces}.jpg`
        let temp = data.main.temp
        let timeDiff = data.timezone / 3600
        console.log(lat, lon, cloudCover, weatherNoSpaces, temp, timeDiff)

    //   get UV data

        var request = require("request");

        var options = { method: 'GET',
        url: 'https://api.openuv.io/api/v1/uv',
        qs: { lat: lat, lng: lon},
        headers: 
        { 'content-type': 'application/json',
        'x-access-token': 'a313f5a1d7baa9f51eee5c23c89d844a' } };
    
        request(options, function (error, response, body) {
        if (error) {
          
        };
        
        let data = JSON.parse(body)
        let uvCurrent = data.result.uv.toFixed(1)
        let uvMax = data.result.uv_max.toFixed(1)
        let uvMaxTime = data.result.uv_max_time
        let safeExposureTime = data.result.safe_exposure_time;
        let minutesArr = Object.values(safeExposureTime);
        let vitDArr = ['15-20 minutes', '20-30 minutes', '30-40 minutes', '40-60 minutes', '60-80 minutes', '80-90 minutes']

        if (uvCurrent < 3){
            vitDArr = vitDArr
        } else if(uvCurrent < 6 && uvCurrent >=3 ){
            vitDArr = ['10-15 minutes', '15-20 minutes', '20-30 minutes', '30-40 minutes', '40-60 minutes', '60-80 minutes']
        } else if (uvCurrent < 8 && uvCurrent >=6){
            vitDArr = ['5-10 minutes', '10-15 minutes', '15-20 minutes', '20-30 minutes', '30-40 minutes', '40-60 minutes']
        } else if (uvCurrent < 11 && uvCurrent >= 8){
            vitDArr = ['2-8 minutes', '5-10 minutes', '10-15 minutes', '15-20 minutes', '20-30 minutes', '30-40 minutes']
        } else if (uvCurrent > 11){
            vitDArr = ['1-5 minutes', '2-8 minutes', '5-10 minutes', '10-15 minutes', '15-20 minutes', '20-30 minutes']
        }

        let valuesInMinutes = minutesArr.map((min) => {
            if (min === null){
                return 'No time limit';
            }
            else if(min <= 60){
                return min + " minutes";
            }
            else{
        
                var num = min;
                var hours = (num / 60);
                var rhours = Math.floor(hours);
                var minutes = (hours - rhours) * 60;
                var rminutes = Math.round(minutes);
                if(rhours <= 1){
                return rhours + " hour " + rminutes + " minutes";
                }
                else{
                return rhours + " hours " + rminutes + " minutes";
                }
            }
            });

        
        console.log(uvCurrent, uvMax, uvMaxTime, safeExposureTime);
        console.log(valuesInMinutes, 'vitamin D arr', vitDArr);


        let newCity = {
            id: uuidv1(),
            city: city,
            weather: {
                lat: lat,
                lon: lon,
                cloudCover: cloudCover,
                weatherMain: weatherMain,
                weather: weather,
                img: weatherImg,
                icon: iconURL,
                temp: temp,
                timeDiff: timeDiff
            },
            uvData: {
                uvCurrent: uvCurrent,
                uvMax: uvMax,
                uvMaxTime: uvMaxTime,
                vitDArr: vitDArr,
                safeExposureTime: valuesInMinutes
            }
        }
        

        dispatch(addCity(newCity))

        });
      }

      

    return (

<>
<div className="backgroundImg2 d-flex flex-column justify-content-end align-items-left" style={{backgroundImage: `url("images/beachheader.jpg")`}}>
    <div className="headerText d-flex align-items-center h-75 ">
        <div className="">
        <span className="headerBackground">
        <span className="veryHigh">U</span><span className="high">V</span><span className="moderate">S</span><span className="low">a</span><span className="blue">f</span><span className="extreme">e</span>
        </span>
        </div>
        
        </div>
  <Navbar className="header w-100 sticky-top" >
    <Navbar.Brand className="linkText text-white ml-3" to="/">"UV Safe out there!"</Navbar.Brand>
    <Nav className="text-right ml-auto ">
      <Link to="/" className="linkText mx-3 link">Home</Link>
      {/* <Link to="/sunscreen" className="linkText mx-3 link">Sunscreen</Link> */}
      <Link to="/sunscreen" className="linkText mx-3 mr-4 link">Skin Protection</Link>
      {/* <Link to="/hooks" className="linkText mx-3 mr-4 link">Hooks</Link> */}
      <Link to="/about" className="linkText mx-3 mr-4 link">About</Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="City" className="mr-sm-2" onChange={(e)=>setCity(e.target.value)}/>
      <Button variant="outline-warning text-white" onClick={handleSubmit}>Search</Button>
    </Form>
  </Navbar>
  </div>

</>



    )
}

export default Header
