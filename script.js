// Script para manipular as Datas
var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
var mes = ["janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro"];
var s = new Date();
var m = new Date();

//Domingo
if (s.getDay() == 0) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() + 2];
  document.getElementById("semana3").innerHTML = semana[s.getDay() + 3];
  document.getElementById("semana4").innerHTML = semana[s.getDay() + 4];
  document.getElementById("semana5").innerHTML = semana[s.getDay() + 5];
  document.getElementById("semana6").innerHTML = semana[s.getDay() + 6];
}
//Segunda
if (s.getDay() == 1) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() + 2];
  document.getElementById("semana3").innerHTML = semana[s.getDay() + 3];
  document.getElementById("semana4").innerHTML = semana[s.getDay() + 4];
  document.getElementById("semana5").innerHTML = semana[s.getDay() + 5];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}
//Terça
if (s.getDay() == 2) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() + 2];
  document.getElementById("semana3").innerHTML = semana[s.getDay() + 3];
  document.getElementById("semana4").innerHTML = semana[s.getDay() + 4];
  document.getElementById("semana5").innerHTML = semana[s.getDay() - 2];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}
//Quarta
if (s.getDay() == 3) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() + 2];
  document.getElementById("semana3").innerHTML = semana[s.getDay() + 3];
  document.getElementById("semana4").innerHTML = semana[s.getDay() - 3];
  document.getElementById("semana5").innerHTML = semana[s.getDay() - 2];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}
//Quinta
if (s.getDay() == 4) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() + 2];
  document.getElementById("semana3").innerHTML = semana[s.getDay() - 4];
  document.getElementById("semana4").innerHTML = semana[s.getDay() - 3];
  document.getElementById("semana5").innerHTML = semana[s.getDay() - 2];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}
//Sexta
if (s.getDay() == 5) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() + 1];
  document.getElementById("semana2").innerHTML = semana[s.getDay() - 5];
  document.getElementById("semana3").innerHTML = semana[s.getDay() - 4];
  document.getElementById("semana4").innerHTML = semana[s.getDay() - 3];
  document.getElementById("semana5").innerHTML = semana[s.getDay() - 2];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}
//Sábado
if (s.getDay() == 6) {
  document.getElementById("semana").innerHTML = semana[s.getDay()];
  document.getElementById("semana1").innerHTML = semana[s.getDay() - 6];
  document.getElementById("semana2").innerHTML = semana[s.getDay() - 5];
  document.getElementById("semana3").innerHTML = semana[s.getDay() - 4];
  document.getElementById("semana4").innerHTML = semana[s.getDay() - 3];
  document.getElementById("semana5").innerHTML = semana[s.getDay() - 2];
  document.getElementById("semana6").innerHTML = semana[s.getDay() - 1];
}

document.getElementById("mes").innerHTML = m.getDate() + " de " + mes[m.getMonth()];

/*****************************************************************************************/
//Script para manipular os requests e JSON
var lat;
var lon;
var cityIn;
var exit;

onload = myFunction;

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5000);
  padrao();
}

function showPage() {
  document.getElementById('loader').style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function padrao(){
  cityIn = "vitoria";

  //Requisição AJAX para o PHP
  new Ajax.Request("server.php",
    {
      method: "get",
      parameters: { cityIn: cityIn },
      onSuccess: ajaxSucces
    }
  );

}


function processRequest() {
  document.getElementById('id01').style.display='block'
  exit = setTimeout(exit2, 3000);

  function exit2(){
    document.getElementById("id01").style.display='none';
  }

  cityIn = document.querySelector("#cityName").value;

  //Requisição AJAX para o PHP
  new Ajax.Request("server.php",
    {
      method: "get",
      parameters: { cityIn: cityIn },
      onSuccess: ajaxSucces
    }
  );
}

function ajaxSucces(viaNome) {
  //------Inicio JSON UrlViaNome--------\\
  
  //iniciando variaveis
  var jsonCityIn = JSON.parse(viaNome.responseText);
  var nameCity = (jsonCityIn.name);
  var currentTemp = (jsonCityIn.main.temp);
  var currentHumidity = (jsonCityIn.main.humidity);
  var currentWind = (jsonCityIn.wind.speed);

  lat = (jsonCityIn.coord.lat);
  lon = (jsonCityIn.coord.lon);
   
  //Mostrar valores via innerHTML
  document.getElementById("currentCity").innerText = nameCity;
  document.getElementById("humidity").innerText = currentHumidity + "%";
  document.getElementById("windSpeed").innerText = currentWind + " km/h";
  
  //-------Fim JSON UrlViaNome----------\\

  //Requisição AJAX para o PHP
  new Ajax.Request("server.php",
    {
      method: "get",
      parameters: { lat: lat, lon: lon },
      onSuccess: ajaxSucces2
    }
  );
  
  function ajaxSucces2(viaCoord){
    var jsonCityCoord = JSON.parse(viaCoord.responseText);
    var currentIcon = (jsonCityCoord.daily[0].weather[0].icon);

    //clima dia 1
    var temp_max1 = (jsonCityCoord.daily[1].temp.max);
    var temp_min1 = (jsonCityCoord.daily[1].temp.min);
    var dailyIcon1 = (jsonCityCoord.daily[1].weather[0].icon);
    //clima dia 2
    var temp_max2 = (jsonCityCoord.daily[2].temp.max);
    var temp_min2 = (jsonCityCoord.daily[2].temp.min);
    var dailyIcon2 = (jsonCityCoord.daily[2].weather[0].icon);
    //clima dia 3
    var temp_max3 = (jsonCityCoord.daily[3].temp.max);
    var temp_min3 = (jsonCityCoord.daily[3].temp.min);
    var dailyIcon3 = (jsonCityCoord.daily[3].weather[0].icon);
    //clima dia 4
    var temp_max4 = (jsonCityCoord.daily[4].temp.max);
    var temp_min4 = (jsonCityCoord.daily[4].temp.min);
    var dailyIcon4 = (jsonCityCoord.daily[4].weather[0].icon);
    //clima dia 5
    var temp_max5 = (jsonCityCoord.daily[5].temp.max);
    var temp_min5 = (jsonCityCoord.daily[5].temp.min);
    var dailyIcon5 = (jsonCityCoord.daily[5].weather[0].icon);
    //clima dia 6
    var temp_max6 = (jsonCityCoord.daily[6].temp.max);
    var temp_min6 = (jsonCityCoord.daily[6].temp.min);
    var dailyIcon6 = (jsonCityCoord.daily[6].weather[0].icon);

    //Mostrar valores via innerHTML
    //clima atual
    document.getElementById("currentTemp").innerHTML = currentTemp.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("currentIcon").innerHTML = "<img src=http://openweathermap.org/img/wn/"+currentIcon+"@2x.png alt='icon_weather' width=auto>";
    //clima dia 1
    document.getElementById("temp_max1").innerHTML = temp_max1.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min1").innerHTML = temp_min1.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon1").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon1+"@2x.png' alt='icon_weather' width=auto>";
    //clima dia 2
    document.getElementById("temp_max2").innerHTML = temp_max2.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min2").innerHTML = temp_min2.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon2").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon2+"@2x.png' alt='icon_weather' width=auto>";
    //clima dia 3
    document.getElementById("temp_max3").innerHTML = temp_max3.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min3").innerHTML = temp_min3.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon3").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon3+"@2x.png' alt='icon_weather' width=auto>";
    //clima dia 4
    document.getElementById("temp_max4").innerHTML = temp_max4.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min4").innerHTML = temp_min4.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon4").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon4+"@2x.png' alt='icon_weather' width=auto>";
    //clima dia 5
    document.getElementById("temp_max5").innerHTML = temp_max1.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min5").innerHTML = temp_min1.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon5").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon5+"@2x.png' alt='icon_weather' width=auto>";
    //clima dia 6
    document.getElementById("temp_max6").innerHTML = temp_max6.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("temp_min6").innerHTML = temp_min6.toFixed(0) + "<sup>o</sup>C";
    document.getElementById("icon6").innerHTML = "<img src='http://openweathermap.org/img/wn/"+dailyIcon6+"@2x.png' alt='icon_weather' width=auto>";
 
  
  }
}