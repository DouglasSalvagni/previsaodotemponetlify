import axios from 'axios';

const getWeatherData = (lat, lon) => {
    
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=7e06bd8c11c32dfc21196675a15cd05b&units=metric&lat=${lat}&lon=${lon}`)
    
} 

export default getWeatherData