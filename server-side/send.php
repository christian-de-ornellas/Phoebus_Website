<?php
/**
 * Este arquivo faz o pré cadastro das transferências.
 */

# Dados do banco de dados
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', '12122017');
define('MYSQL_DB_NAME', 'phoebus');

# Conexão com o banco de dados
$PDO = new PDO('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD);

try
{
    $PDO = new PDO('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB_NAME, MYSQL_USER, MYSQL_PASSWORD);
} catch (PDOException $e) {
    echo 'Erro ao conectar com o MySQL: ' . $e->getMessage();
}

# Cadastra o usuário
$name = $_POST["name"];
$age = $_POST["age"];
$address = $_POST["address"];
$email = $_POST["email"];
$cellphone = $_POST["cellphone"];
$passport = $_POST["passport"];
$date_created = date('d/m/Y, H:i:s');

$sql = "INSERT INTO clients(name, age, address, email, cellphone, passport, date_created) VALUES(:name, :age, :address, :email, :cellphone, :passport, :date_created)";
$stmt = $PDO->prepare($sql);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':age', $age);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':cellphone', $cellphone);
$stmt->bindParam(':passport', $passport);
$stmt->bindParam(':date_created', $date_created);

$result = $stmt->execute();

# Se o usuário for cadastrado então cadastre a conta e execute a transferencia.
if (!$result) {
    var_dump($stmt->errorInfo());
    exit;
} else {

    $client_id = $PDO->lastInsertId();
    $type_personal = $_POST["type_personal"];
    $name_account = $_POST["name_account"];
    $document = $_POST["document"];
    $type_bank = $_POST["type_bank"];
    $name_bank = $_POST["name_bank"];
    $agency_bank = $_POST["agency_bank"];
    $number_account = $_POST["number_account"];
    $value_transfer = $_POST["value_transfer"];
    $coin = $_POST["coin"];
    $date_created = date('d/m/Y, H:i:s');

    $sql = "INSERT INTO accounts(client_id, type_personal, name_account, document, type_bank, name_bank, agency_bank, number_account, value_transfer, coin, date_created) VALUES(:client_id,:type_personal, :name_account, :document, :type_bank, :name_bank, :agency_bank, :number_account, :value_transfer, :coin, :date_created)";
    $stmt = $PDO->prepare($sql);
    $stmt->bindParam(':client_id', $client_id);
    $stmt->bindParam(':type_personal', $type_personal);
    $stmt->bindParam(':name_account', $name_account);
    $stmt->bindParam(':document', $document);
    $stmt->bindParam(':type_bank', $type_bank);
    $stmt->bindParam(':name_bank', $name_bank);
    $stmt->bindParam(':agency_bank', $agency_bank);
    $stmt->bindParam(':number_account', $number_account);
    $stmt->bindParam(':value_transfer', $value_transfer);
    $stmt->bindParam(':coin', $coin);
    $stmt->bindParam(':date_created', $date_created);

    $save = $stmt->execute();

    # Se não cadastro mande a tela de erro
    if (!$save) {
        header("location: ../404.html");die('Erro!...');
        # Cadastrou então mande mensagem de boas vindas.
    } else {
        header("location: ../success.html");
    }

}
