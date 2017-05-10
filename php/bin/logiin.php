<?php
  $uname = $_POST['uname'];
  $pwd = $_POST['pwd'];

  $flag=0;

  $connect = mysqli_connect("localhost","root","","dbtest");

  $selection = "SELECT * FROM register";
  $select = mysqli_query($connect,$selection);

    while($row = mysqli_fetch_array($select)) {
    if(($row['username']==$uname)&&($row['password']==$pwd)){
        $flag=1;
    }
  }

  if($flag==1){
    header('location: Calendar.html');
  }
  else{
    echo "Wrong credentials!";
  }

 ?>
