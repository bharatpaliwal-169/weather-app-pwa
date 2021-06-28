import React from 'react'
import {Card} from 'react-bootstrap';

function Weather(props) {
  return (
    <React.Fragment>
      <Card className='text-center align-items-center mt-5 mb-5 card-x'>
        <h1 className='city-title'>
          {props.name}
          <sup className='sup'>{props.sys.country}</sup>
        </h1>
        <p className='text-muted'>
          Latitude : {props.coord.lat}
          <span className='ms-2'>
            Longitude : {props.coord.lon}
          </span>
        </p>
        
        <h4 className='city-temp'>
          {Math.round(props.main.temp)}
          <sup>&deg;</sup>C
        </h4>

        <p className='text-muted'>
          <span className='me-2'>
            Max : {props.main.temp_max}<sup>&deg;</sup>C
          </span>
          <span>
            Min : {props.main.temp_min}<sup>&deg;</sup>C
          </span>
        </p>

        <img className="img-fluid img-responsive" 
          src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} 
          alt={props.weather[0].description} height="240" width="180" />
        
        <p>{props.weather[0].description}</p>
      </Card>
    </React.Fragment>
  )
}

export default Weather;
