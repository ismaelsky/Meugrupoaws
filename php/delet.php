<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');

include_once("../conexao/conexao.php");

if (isset($_POST['delet_card'])) {

    try {

        $id = $_POST['id_card'];

        $stmt = $conn->prepare("DELETE FROM `tb_card` WHERE `id_card` = '" . $id . "'");
        $stmt->execute();
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>