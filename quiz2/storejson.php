<?php
function isValidJSON($str) {
   json_decode($str);
   return json_last_error() == JSON_ERROR_NONE;
}

$json_str = file_get_contents('php://input');

if (strlen($json_str) == 0 || !isValidJson($json_str)) {
    exit('json error');
}

$json = json_decode($json_str);

$mysqli = new mysqli('localhost', 'lab6part5', '', 'lab6');

foreach($json as $name => $data) {
    $mysqli->query("INSERT INTO course_archives (name) VALUES ('{$name}')");
    $archive_id = $mysqli->insert_id;

    foreach($data->Lectures as $lecture) {
        $stmt = $mysqli->prepare("INSERT INTO lectures (archive_id, title, description, link) VALUES (?, ?, ?, ?)");
        $stmt->bind_param('isss', $archive_id, $lecture->title, $lecture->description, $lecture->link);
        $stmt->execute();
    }

    foreach($data->Labs as $lab) {
        $stmt = $mysqli->prepare("INSERT INTO labs (archive_id, title, description, link) VALUES (?, ?, ?, ?)");
        $stmt->bind_param('isss', $archive_id, $lab->title, $lab->description, $lab->link);
        $stmt->execute();
    }
}
?>