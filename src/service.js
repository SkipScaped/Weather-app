import axios, {isCancel, AxiosError} from 'axios';
async function getgeoloacationForCityName(cityName) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8608d196cd4ff471e401850234aa22a3`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
 export async function getWeatherInfo(lat, lon) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=part&appid=8608d196cd4ff471e401850234aa22a3`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  export default getgeoloacationForCityName;