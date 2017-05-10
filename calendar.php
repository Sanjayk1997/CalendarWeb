<?php

if(isset($_COOKIE['tableaux'])){
    header('Location: Calendar.html');

}
else {
  header('Location: login.html');
}

?>
