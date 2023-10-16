"use-client"; 
import styles from "./WeatherCard.module.css"; 
import WeatherIcon from "./WeatherIcon"; 

const WeatherCard = ({ 
    cityName, 
    currentTemperature, 
    highTemperature, 
    weatherType,
    lowTemperature, 
    cloudiness, 
    humidity, 
    windSpeed 

}) => (

    <div 
        className = {styles.WeatherCardWrapper}
        style={ { backgroundColor: `rgba(0,0,0,0.${cloudiness})`}}
        
        >
        <div className= {styles.WeatherCardImage}
        //style={ { opacity: `rgba(1,0,0,0.${cloudiness})`}}
        > 
        <WeatherIcon weatherType={weatherType} />
        </div>
        <h2>{cityName}</h2>

        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemperature}&#176; </p>
        <p>High Temperature: {highTemperature}&#176;</p>
        <p>Low Temperature: {lowTemperature}&#176;</p>
        <p>Cloudiness: {cloudiness}% </p>
        <p>Humidity: {humidity}% </p>
        <p>Wind Speed: {windSpeed} mph</p>

    </div>
); 

export default WeatherCard; 