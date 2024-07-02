function Search({cityName, setCityName, getGeoCord}){

  function HandleOnchange(event){
    setCityName(event.target.value)
  }
  function HandlekeyDown(event) {
   
    if (event.keyCode = 13 ) {
      getGeoCord();
    }
  }
    return(
    <div class="topnav">
  <a class="active" href="#home">Home</a>

  <div class="search-container">
      <input type="text" placeholder=  "Search Your City.." name="search" value={cityName} onChange={HandleOnchange} onKeyDown={HandlekeyDown}></input>
  </div>
</div>

      
    );
};

export default Search;
