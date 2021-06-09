<?php
  //Receber os dados do front
  $city = $_GET["cityIn"];
  $latIn = $_GET["lat"];
  $lonIn = $_GET["lon"];
  $key = "fa23f4b681863cc75e95c5d6a5e9b597";

  $urlViaNome = "https://api.openweathermap.org/data/2.5/weather?q=$city&units=metric&lang=pt_br&appid=$key";//url via nome da cidade
  $urlViaCoord = "https://api.openweathermap.org/data/2.5/onecall?lat=$latIn&lon=$lonIn&units=metric&lang=pt_br&appid=$key";//url via coordenada da cidade
  
  //Requisição ao WebService
  $viaNome = file_get_contents($urlViaNome);
  $viaCoord = file_get_contents($urlViaCoord);

  //Enviar resposta do WS ao front
  print $viaNome;
  print $viaCoord;
?>