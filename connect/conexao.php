<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');

 //CONFIG BANCO DE DADOS
define('USER','sigeps06_dev');
define('PASS','dev@123');

$conn = new PDO('mysql:host=162.241.203.236;dbname=sigeps06_kanban_1_0', USER, PASS);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>