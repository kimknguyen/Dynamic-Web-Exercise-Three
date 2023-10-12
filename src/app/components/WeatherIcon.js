"use-client"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {
    faBolt, 
    faCloud, 
    faUmbrella, 
    faSnowflake, 
    faSun, 
    faCloudRain, 
} from "@fortawesome/free-solid-svg-icons"; 

//1. setting up icons and props
//2. see what type of weather values exists 

const WeatherIcon = ({ weatherType }) => {
    switch (weatherType) {
        case "Clouds": 
            return <FontAwesomeIcon icon={faCloud} />; 
        case "Drizzle": 
            return <FontAwesomeIcon icon={faCloudRain} />; 
        case "Rain": 
            return <FontAwesomeIcon icon={faUmbrella} />;
        case "Clear": 
            return <FontAwesomeIcon icon={faSun}/>; 
        case "Snow": 
            return <FontAwesomeIcon icon={faSnowflake} />; 
        default: 
            return <FontAwesomeIcon icon={faCloud} />; 
            //return <div>this works</div>; 
    }


 
}; 

export default WeatherIcon; 