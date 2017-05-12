<?php

  if(isset($_COOKIE['tableaux'])){
    $nomDeLaTable=$_COOKIE['tableaux'];
  }
  else{
    header('Location: login.html');
  }

  $date = $_POST['toDate'];
  $month = $_POST['toMonth'];

  $con = mysqli_connect("localhost","root","","events");

  $tablename = mysqli_real_escape_string($con, $nomDeLaTable);
  $getting = "SELECT event from `{$tablename}` where dates={$date}";
  $get = mysqli_query($con,$getting);

  while($row = mysqli_fetch_array($get)) {
    echo $row['event'] . ":";
  }

?>
