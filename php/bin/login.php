<?php
  $uname = $_POST['uname'];
  $pwd = $_POST['pwd'];

  $connect = mysqli_connect("localhost","root","","dbtest");

  $selection = "SELECT * FROM register";
  $select = mysqli_query($connect,$selection);

  $flag1=0;

    if($flag1==1){
      header('location: Calendar.html');
    }
    else{
      echo "Wrong credentials!";
    }

    while($row = mysqli_fetch_array($select)) {
    if(($row['username']==$uname)&&($row['password']==$pwd)){
        $flag1=1;
    }
    else{
      $flag1=0;
    }
  }

 ?>
