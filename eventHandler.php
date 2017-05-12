<?php

  if(isset($_COOKIE['tableaux'])){
    $nomDeLaTable=$_COOKIE['tableaux'];
  }
  else{
    header('Location: login.html');
  }

  $date = $_POST['date'];
  $month = $_POST['month'];
  $event = $_POST['event'];

  $fullDate = $date." ".$month;

  if($event==""){
    echo "0";
  }
  else{
    $cn = mysqli_connect("localhost","root","","events");
    $tablename = mysqli_real_escape_string($cn, $nomDeLaTable);
    $insert = "INSERT INTO `{$tablename}`(dates,event) VALUES ('{$fullDate}','{$event}')";
    $insertion = mysqli_query($cn,$insert);
    echo "1";
  }





 ?>
