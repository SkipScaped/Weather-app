function WeatherDetails ({weatherdetails}) {
    return(
        <main>
            <section class="container">
                <div class="row">
                    <h1
                        class="col d-flex justify-content-center align-items-center city-title"
                        id="searched-city"
                    >
                        {weatherdetails.data.name}
                    </h1>
                </div>
                <span class="measurements">
                    <a href="#" id="celcius-link">Weather App</a> |
                    <a href="#" id="fahrenheit-link"> By Aaliyan</a>
                </span>
            </section>

            <section class="current-weather">
                <div class="container">
                    <div class="row">
                        <h1 class="col temp-title" id="current-temperature">{weatherdetails?.data?.main?.temp}°</h1>
                        <div class="col todays-info">
                            <h2 id="current-day">Today</h2>
                            <p id="weather-type">{weatherdetails?.data?.weather[0].main}</p>
                        </div>
                        <div class="col d-flex align-items-center side-info">
                            <ul>
                                <li>Humidity: <span id="humidity">{weatherdetails?.data?.main?.humidity}</span></li>
                                <li>Wind: <span id="wind">{weatherdetails?.data?.wind?.speed} km/ph</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
            </section>

            <footer>
                <p>
                     &copy; 2024 All rights reserved | Designed and coded by
                    <a href="https://github.com/SkipScaped" target="_blank"> Aaliyan</a>
                    <span></span>
                </p>
            </footer>
    </main>
        
    )
}
export default WeatherDetails
