import { useState,useEffect } from 'react'; 

import Search from './Search.jsx';
import './App.css'

function App() {
  const [cityName, setCityName] = useState();
useEffect(() => {console.log(cityName)}, [cityName])
  return(
    <Search
      cityName = {cityName}
      setCityName = {setCityName}
    ></Search>
    
  );
};
export default App;
