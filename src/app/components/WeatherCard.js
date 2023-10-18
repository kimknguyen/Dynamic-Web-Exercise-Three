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
        style={ { backgroundColor: `rgba(30,81,123,0.${cloudiness})`}}
        
        >
    
        <div className= {styles.WeatherCardImage}
        > 
        <WeatherIcon weatherType={weatherType} />
        </div>
        <h2>{cityName}</h2>

        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemperature}&#176; </p>
        <p>High Temperature: {highTemperature}&#176;</p>
        <p>Low Temperature: {lowTemperature}&#176;</p>
       
        <p>Cloudiness: {cloudiness}% </p>
        <div
        style={ { backgroundColor: `rgba(192,57,43,1.${humidity})`}} >
            <p>Humidity: {humidity}% </p>
        </div>
        
        <p>Wind Speed: {windSpeed} mph</p>

    </div>
); 

export default WeatherCard; 