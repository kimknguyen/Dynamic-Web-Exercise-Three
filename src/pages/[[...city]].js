import WeatherCard from "../app/components/WeatherCard"; 
import Header from "../app/components/Header"; 
import "../app/globals.css"; 
import styles from "../app/components/WeatherCard.module.css"; 



export async function getStaticProps({ params }) {
    const city = (params && params.city) || "Boston"; 
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    ); 

    console.log(res); 
    const weatherData = await res.json(); 

    return{
        props: {
            weatherData, 
        }, 
    }; 
}

export const getStaticPaths = async () => {
    return{
        paths: [], 
        fallback: true, 
    }; 
}; 


export default function Home({ weatherData }) {
    console.log(weatherData); 
    if (!weatherData) return null; 
    return (
        <>
        <Header /> 
        <main>
            <div className = {styles.title}> 
            <h1>Weather App</h1>
            </div>
            <WeatherCard 
                cityName={weatherData.name}

                
                weatherType={weatherData.weather[0].main}
                currentTemperature={weatherData.main.temp}
                highTemperature={weatherData.main.temp_max}
                lowTemperature={weatherData.main.temp_min}
                cloudiness={weatherData.clouds.all}
                humidity={weatherData.main.humidity}
                windSpeed={weatherData.wind.speed}


                

                
            /> 
        </main>
    </>
    ); 

}