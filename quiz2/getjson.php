<?php
$mysqli = new mysqli("localhost", "lab6part3", "", "lab6");
$result = $mysqli->query("SELECT json FROM courses WHERE crn = 61971");
header('Content-Type: application/json; charset=utf-8');
echo $result->fetch_column(0);
?>