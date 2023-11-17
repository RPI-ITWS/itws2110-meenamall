<?php
$mysqli = new mysqli("localhost", "lab6part3", "", "lab6");

$course = isset($_GET['course']) ? $_GET['course'] : 'Websys_course';

$result = $mysqli->query("SELECT json FROM courses WHERE crn = 61971 AND course = '$course'");
header('Content-Type: application/json; charset=utf-8');
echo $result->fetch_row()[0];
?>