<?php

  $_POST['username'] = (isset($_POST['username']) ? $_POST['username'] : 'default');
  $_POST['password'] = (isset($_POST['password']) ? $_POST['password'] : 'default');
  $_POST['email'] = (isset($_POST['email']) ? $_POST['email'] : 'default');

  $name = $_POST['username'];
  $password = $_POST['password'];
  $email = $_POST['email'];

  $connect = mysqli_connect("localhost","root","","dbtest");

  $insert = "INSERT INTO register (username, password, email) VALUES ('{$name}' , '{$password}' , '{$email}')";

  $selection = "SELECT email FROM register";
  $select = mysqli_query($connect,$selection);

  $flag=0;

    while($row = mysqli_fetch_array($select)) {
      if($row["email"]==$email){
          $flag=1;
      }
    }



  if($flag==1){
    echo "This E-mail id already exists";
  }
  else if($flag == 0){
    $q1 = mysqli_query($connect, $insert);
    if($q1==1){
    echo "User created";
    $connect = mysqli_connect("localhost","root","","events");
    $savname = mysqli_real_escape_string($connect, $_POST['username']);
    $creation = "CREATE TABLE `{$savname}` (dates VARCHAR(30),event VARCHAR(30))";
    $create = mysqli_query($connect,$creation);
        }
      else{
      echo "User already exists";
     }
   }


?>
