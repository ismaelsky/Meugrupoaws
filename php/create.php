<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('HTTP/1.1 200 OK');


include_once("../conexao/conexao.php");



if (isset($_POST['novo_card'])) { 

    $insert["stg_nome"] = $_POST["stg_nome"];
    $insert["stg_o_q_fazer"] = $_POST["stg_o_q_fazer"];
    $insert["text_descricao"] = $_POST["text_descricao"];
    $insert["dt_vencimento"] = $_POST["dt_vencimento"];
    $insert["stg_responsaveis"] = $_POST["stg_responsaveis"];
    $insert["stg_prioridade"] = $_POST["stg_prioridade"];
    $insert["fk_proc_card"] = $_POST["fk_proc_card"];
    

    try {

        $campos = implode(", ", array_keys($insert));
        $values = "'" . implode("','", array_values($insert)) . "'";


        $stmt = $conn->prepare("INSERT INTO `tb_card`($campos) VALUES($values)");
        $stmt->execute();

        if ($stmt == 1) {
            echo "<div class='alert alert-success alert-dismissable'>  criado ! </div>";
        } else {
            echo "<div class='alert alert-danger alert-dismissable'>Erro,  não criado ! </div>";
        }
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }


}
