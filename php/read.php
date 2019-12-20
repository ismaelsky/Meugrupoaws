<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');



include_once("../conexao/conexao.php");


if (isset($_GET['id_rotina'])) {

    $id = $_GET['id_rotina'];
    $select = $conn->prepare("SELECT * FROM `tb_rotina`");
    $select->execute();

    foreach ($select as $var) {
        $result[] = $var;
    }


    echo json_encode($result);
}

if (isset($_GET['fk_rot_proc'])) {

    $fk = $_GET['fk_rot_proc'];
    $select = $conn->prepare("SELECT * FROM `tb_processo` where fk_rot_proc = $fk ");
    $select->execute();

    foreach ($select as $var) {
        $result[] = $var;
    }


    echo json_encode($result);
}

if (isset($_GET['cards'])) {

    $fk = $_GET['cards'];
    $select = $conn->prepare("SELECT * FROM `tb_card` where fk_proc_card = $fk ");
    $select->execute();

    foreach ($select as $var) {
        $result[] = $var;
    }


    echo json_encode($result);
}
