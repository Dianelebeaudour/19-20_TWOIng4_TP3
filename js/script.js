
// Fonction appelée lors du click du bouton
function start() {
  ThreeDaysForecast();
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchThreeDaysForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

    // on recupere l'information principale
      const main = (data.weather[0].main);
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })

    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  } 


  function ThreeDaysForecast(){
      // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();
    // Appel de la fonction fetchThreeDaysForecast

    apiWeather
    .getThreeDaysForcast()
    .then(function (response){ 
      const data = response.data;

      // On recupere l'info principale
      for (let i=1; i>4; i++){
        const main = (data.list[i].weather[0].main);
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].temp.day;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
      

      // Modifier le DOM
      document.getElementById('today-forecast-main-${i}').innerHTML = main;
      document.getElementById('today-forecast-more-info-${i}').innerHTML = description;
      document.getElementById('icon-weather-container-${i}').innerHTML = icon;
      document.getElementById('today-forecast-temp-${i}').innerHTML = `${temp}°C`;
    }
  })
  .catch(function(error) {
    // Affiche une erreur
    console.error(error);
  });
    }