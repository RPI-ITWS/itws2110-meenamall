<?php
$mysqli = new mysqli('localhost', 'lab6part5', '', 'lab6');
$mysqli->query('DELETE FROM lectures WHERE 1=1');
$mysqli->query('DELETE FROM labs WHERE 1=1');
$mysqli->query('DELETE FROM course_archives WHERE 1=1');
?>