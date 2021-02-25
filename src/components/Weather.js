import React from 'react'

const Weather = ({city}) => {
    return (
        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-top">
          <div className="card-title m-0 h1">{city.city}</div>
          <img src={city.weather.icon} className=""></img>
          <div className=""><h3>{city.weather.temp} °F</h3></div>
          <div className=""><h3>Cloud Cover: {city.weather.cloudCover}%</h3></div>
        </div>
    )
}

export default Weather
