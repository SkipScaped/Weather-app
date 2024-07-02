import getgeoloacationForCityName, {getWeatherInfo} from './service.js';
import { useState,useEffect } from 'react'; 
import Search from './Search.jsx';
import './App.css'
import WeatherDetails from './weatherdetails.jsx';

function App() {
  const [cityName, setCityName] = useState();
const [weatherdetails, setWeatherDetails] = useState();
  async function getGeoCord() {
    if (cityName) {
      const response = await getgeoloacationForCityName(cityName);
      if (response.status == 200) {
        // const cord = response.data.coord;
        // const weatherinfo = await getWeatherInfo(cord.lat, cord.lon);
        setWeatherDetails(response);
     
      }
    }
    
  }
  return(
    <>
    <Search
      cityName = {cityName}
      setCityName = {setCityName}
      getGeoCord= {getGeoCord}
    ></Search>
    {weatherdetails && (<WeatherDetails
weatherdetails = {weatherdetails}
/>)}

    </>
    
  );
};
export default App;
