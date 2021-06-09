<!DOCTYPE html>
<html lang="pt_BR">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">
		<title>Ponciano Clima</title>
    <link rel="shortcut icon" sizes="16x16" href="images/favicon.ico" />
    
    <!-- Loading third party fonts -->
		<link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css">
    
    <!-- AJAX -->
    <script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"></script>
    <script src="js/jquery-1.11.1.min.js"></script>
    
		<!-- Loading main css file -->
		<link rel="stylesheet" href="style.css">
    <link href="loader.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    
    
    

	</head>


	<body style="margin:0">
		<div id="loader"></div>
    <div id="myDiv" style="display:none;">
      <div  class="site-content">
        <div class="site-header">
          <div class="container">
            <a href="index.php" class="branding">
              <img src="images/logo.png" alt="" class="logo">
              <div class="logo-type">
                <h1 class="site-title">Ponciano Clima</h1>
                <small class="site-description">Preveja o futuro conosco</small>
              </div>
            </a>
            
            <div class="main-navigation">
              <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
              <ul class="menu">
                <!--<li class="menu-item current-menu-item"><a href="index.php">Vitória</a></li>
                <li class="menu-item"><a href="cariacica.php">Cariacica</a></li>
                <li class="menu-item"><a href="vilavelha.php">Vila Velha</a></li>
                <li class="menu-item"><a href="serra.php">Serra</a></li>-->
                <li class="menu-item"><a href="https://openweathermap.org/" target="_blank">API</a></li>
              </ul> <!-- .menu -->
            </div> <!-- .main-navigation -->


            <div class="mobile-navigation"></div>

          </div>
        </div> <!-- .site-header -->

        <div class="hero" data-bg-image="images/ceu.jpg">
        <div class="container"> 
            <form action="" class="find-location" id="search-form">
              <input type="text" id="cityName" name="city"  placeholder="Find your location...">
              <input type="button" id="myBtn" onclick="processRequest();" value="Find">
              <script>
                var input = document.getElementById("cityName");
                  input.addEventListener("keyup", function(event) {
                    if (event.keyCode === 13) {
                      event.preventDefault();
                      document.getElementById("myBtn").click();
                    }
                  });
              </script>
            </form>
            <div id="id01" class="w3-modal">  
              <div id="loader"></div> 
            </div>
          </div>
        </div>
        <div class="forecast-table">
          <div class="container">
            <div class="forecast-container">
              <div class="today forecast">
                <div class="forecast-header">
                  <div class="day" id="semana"></div>
                  <div class="date" id="mes"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="location" id="currentCity">nome da cidade</div>
                  <div class="degree">
                    <div class="num" id="currentTemp">temperatura</div>
                    <div class="forecast-icon" id="currentIcon"></div>
                  </div>
                  <span><img src="images/icon-umberella.png" alt="humidade" ><span id="humidity">humidade</span></span>
                  <span><img src="images/icon-wind.png" alt="vento"><span id="windSpeed">vento km/h</span></span>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day" id="semana1"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon1"></div>
                  <div class="degree" id="temp_max1">temp_max1<sup>o</sup>C</div>
                  <small id="temp_min1">temp_min1<sup>o</sup></small>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day" id="semana2"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon2"></div>
                  <div class="degree" id="temp_max2">temp_max2<sup>o</sup>C</div>
                  <small  id="temp_min2">temp_min2<sup>o</sup></small>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day" id="semana3"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon3"></div>
                  <div class="degree" id="temp_max3">temp_max3<sup>o</sup>C</div>
                  <small  id="temp_min3">temp_min3<sup>o</sup></small>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day" id="semana4"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon4"></div>
                  <div class="degree" id="temp_max4">temp_max4<sup>o</sup>C</div>
                  <small  id="temp_min4">temp_min4<sup>o</sup></small>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day" id="semana5"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon5"></div>
                  <div class="degree" id="temp_max5">temp_max5<sup>o</sup>C</div>
                  <small id="temp_min5">temp_min5<sup>o</sup></small>
                </div>
              </div>
              <div class="forecast">
                <div class="forecast-header">
                  <div class="day"id="semana6"></div>
                </div> <!-- .forecast-header -->
                <div class="forecast-content">
                  <div class="forecast-icon" id="icon6"></div>
                  <div class="degree" id="temp_max6">temp_max6<sup>o</sup>C</div>
                  <small  id="temp_min6">temp_min6<sup>o</sup></small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="site-footer">
          <div class="container">
            <div class="row">						
              <div class="col-md-4 col-md-offset-4">
                <div class="social-links">
                  <a href="https://www.facebook.com/KevinPonciano2017" target="_blank"><i class="fa fa-facebook"></i></a>
                  <a href="https://github.com/Kevin-Ponciano" target="_blank"><i class="fa fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/kevin-ponciano-a462661a3/" target="_blank"><i class="fa fa-linkedin"></i></a>               
                </div>
              </div>
            </div>

            <p class="colophon">
              Copyright 2021 
              <a href="https://replit.com/@HavestCS" target="_blank">Kevin Ponciano</a><br>
              <a href="https://www.themezy.com/free-website-templates" target="_blank">Designed CSS by Themezy</a><br>
              Fundo foto criado por evening_tao
              <a href='https://br.freepik.com/fotos/fundo' target="_blank"> br.freepik.com</a><br>
              All rights reserved</p>
          </div>
        </footer> <!-- .site-footer -->
      </div>
    </div> 

		
		
		<script src="js/plugins.js"></script>
		<script src="js/app.js"></script>
    <script src="script.js"></script>

    <script>
      $(document).keypress(
        function(event){
          if (event.which == '13') {
            event.preventDefault();
          }
      });
    </script>

	</body>

</html>