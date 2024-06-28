import getgeoloacationForCityName, {getWeatherInfo} from './service.js';
import { useState,useEffect } from 'react'; 
import WeatherApp from './Weather.jsx';
import Search from './Search.jsx';
import './App.css'

function App() {
  const [cityName, setCityName] = useState();

  async function getGeoCord() {
    if (cityName) {
      const response = await getgeoloacationForCityName(cityName);
      if (response.status == 200) {
        const cord = response.data.coord;
        const weatherinfo = getWeatherInfo(cord.lat, cord.lon);
        console.log(weatherinfo)
      }
    }
    
  }
  return(
    <>
    <Search
      cityName = {cityName}
      setCityName = {setCityName}
      getGeoCord={getGeoCord}
    ></Search>
    <WeatherApp></WeatherApp>
    </>
    
  );
};
export default App;
