<?php

include_once("../conexao/conexao.php");


if(isset($_POST['mover_card'])){

$id = $_POST["id_card"];
    
$insert["fk_proc_card"] = $_POST["fk_proc_card"];

try {
    foreach ($insert as $keys => $valor) {
        $dados[] = "$keys = '$valor'";
    }
    $dados = implode(", ", $dados);

    $up = $conn->prepare("UPDATE tb_card SET $dados WHERE id_card = '" . $id . "' ");
    $up->execute();
    echo 'concluido';
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}

}else{
    echo 'sem post';
};

