<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
require_once 'Blocs/connection.php';

if(isset($_POST['name'] ) && isset($_POST['company'])){
    $link = mysqli_connect($host, $user,$password,$database) or die("Ошибка". mysqli_error($link));


$query = "INSERT INTO phones VALUES(NULL, '$name', '$company')";
    $result = mysqli_query($link, $query) or die(mysqli_error($link));
    if($result)
    {
        echo "<spab style='color:blue;'>Данные добавлены</span>";
    }    
    mysqli_close($link);


}



?>
</body>
</html>