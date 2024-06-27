function Search({cityName, setCityName}){

  function HandleOnchange(event){
    setCityName(event.target.value)
  }
    return(
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#Weather">Weather</a>
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder=  "Search Your City.." name="search" value={cityName} onChange={HandleOnchange}></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>

      
    );
};

export default Search;
